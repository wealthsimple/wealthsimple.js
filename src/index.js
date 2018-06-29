'use strict';

require('babel-polyfill');
const snakeCase = require('lodash.snakecase');
const mapKeys = require('lodash.mapkeys');
const ApiRequest = require('./api-request');
const ApiError = require('./api-error');
const constants = require('./constants');

class Wealthsimple {
  constructor({
    clientId, clientSecret, fetchAdapter, auth = null, authAccessToken = null,
    env = null, baseUrl = null, apiVersion = 'v1', onAuthSuccess = null,
    onAuthRevoke = null, onAuthInvalid = null, onResponse = null,
    verbose = false, deviceId = null
  }) {
    // OAuth client details:
    if (!clientId || typeof clientId !== 'string') {
      throw new Error('Please specify a valid OAuth \'clientId\'.');
    }
    this.clientId = clientId;
    this.clientSecret = clientSecret;

    if (baseUrl) {
      this.baseUrl = baseUrl;
    } else {
      // API environment (either 'sandbox' or 'production') and version:
      if (!constants.ENVIRONMENTS.includes(env)) {
        throw new Error(`Unrecognized 'env'. Please use one of: ${constants.ENVIRONMENTS.join(', ')}`);
      }
      this.env = env;
    }

    // Setting to `true` will add request logging.
    this.verbose = verbose;

    if (!constants.API_VERSIONS.includes(apiVersion)) {
      throw new Error(`Unrecognized 'apiVersion'. Please use one of: ${constants.API_VERSIONS.join(', ')}`);
    }
    this.apiVersion = apiVersion;

    this.deviceId = deviceId;

    // Optionally allow a custom request adapter to be specified (e.g. for
    // react-native) which must implement the `fetch` interface:
    if (fetchAdapter) {
      this.fetchAdapter = fetchAdapter;
    } else {
      require('isomorphic-fetch');
      if (typeof window !== 'undefined') {
        // Browser: fixes the following error:
        // Error: TypeError: Failed to execute 'fetch' on 'Window': Illegal invocation
        this.fetchAdapter = window.fetch.bind(window);
      } else {
        // Node.js:
        this.fetchAdapter = fetch;
      }
    }

    // Optionally allow for callbacks on certain key events:
    this.onAuthSuccess = onAuthSuccess;
    this.onAuthRevoke = onAuthRevoke;
    this.onAuthInvalid = onAuthInvalid;
    this.onResponse = onResponse;

    this.request = new ApiRequest({ client: this });

    // Optionally pass in existing OAuth details (access_token + refresh_token)
    // or just the access token (then fetching the details) so that the user
    // does not have to be prompted to log in again:
    this.auth = auth;
    if (authAccessToken && typeof authAccessToken === 'string') {
      this.authPromise = this.accessTokenInfo(authAccessToken).then((a) => {
        this.auth = a;
        // Info endpoint sadly returns a string of a date vs seconds since epoc/int :(
        if (this.auth && typeof this.auth.created_at === 'string') {
          this.auth.created_at = Math.round(new Date(this.auth.created_at) / 1000.0);
        }
        return this.auth;
      });
    } else {
      this.authPromise = new Promise(resolve => resolve(this.auth));
    }
  }

  // TODO: Should this have the side-effect of updating this.auth?
  accessTokenInfo(accessToken = null) {
    return this.get('/oauth/token/info', {
      headers: { Authorization: `Bearer ${accessToken || this.accessToken()}` },
      ignoreAuthPromise: true,
      checkAuthRefresh: false,
    }).then(response =>
      // the info endpoint nests auth in a `token` root key
      response.json.token,
    ).catch((error) => {
      if (error.response === null) {
        throw error;
      }
      if (error.response.status === 401) {
        if (this.onAuthInvalid) {
          this.onAuthInvalid(error.response.json);
        }
        return null;
      }
      throw new ApiError(error.response);
    });
  }

  accessToken() {
    // info endpoint and POST response have different structures
    return this.auth && (this.auth.access_token || this.auth.token);
  }

  refreshToken() {
    return this.auth && this.auth.refresh_token;
  }

  resourceOwnerId() {
    return this.auth && this.auth.resource_owner_id;
  }

  clientCanonicalId() {
    return this.auth && this.auth.client_canonical_id;
  }

  authExpiresAt() {
    if (this.auth && this.auth.created_at && this.auth.expires_in) {
      const expiresAtTimestamp = this.auth.created_at + this.auth.expires_in;
      return new Date(expiresAtTimestamp * 1000);
    }
    return undefined;
  }

  isAuthExpired() {
    const expiresAt = this.authExpiresAt();
    return !!expiresAt && expiresAt <= new Date();
  }

  isAuthRefreshable() {
    return !!(this.auth && typeof this.auth.refresh_token === 'string');
  }

  authenticate(attributes) {
    const headers = {};
    if (attributes.otp) {
      headers[constants.OTP_HEADER] = attributes.otp;
      delete attributes.otp;
    }

    if (attributes.otpClaim) {
      headers[constants.OTP_CLAIM_HEADER] = attributes.otpClaim;
      delete attributes.otpClaim;
    }

    let checkAuthRefresh = true;
    if (attributes.hasOwnProperty('checkAuthRefresh')) {
      ({ checkAuthRefresh } = attributes);
      delete attributes.checkAuthRefresh;
    }

    const body = {
      ...mapKeys(attributes, (v, k) => snakeCase(k)),
      client_id: this.clientId,
      client_secret: this.clientSecret,
    };

    return this.post('/oauth/token', { headers, body, checkAuthRefresh })
      .then((response) => {
        // Save auth details for use in subsequent requests:
        this.auth = response.json;

        if (this.onAuthSuccess) {
          this.onAuthSuccess(response.json);
        }

        return response;
      })
      .catch((error) => {
        if (error.response) {
          throw new ApiError(error.response);
        } else {
          throw error;
        }
      });
  }

  refreshAuth() {
    return this.authPromise.then(() => {
      if (!this.isAuthRefreshable()) {
        throw new Error('Must have a refresh_token set in order to refresh auth.');
      }
      return this.authenticate({
        grantType: 'refresh_token',
        refreshToken: this.auth.refresh_token,
        checkAuthRefresh: false,
      });
    });
  }

  revokeAuth() {
    return this.authPromise.then(() => {
      if (this.auth) {
        return this.post('/oauth/revoke')
          .then(() => {
            this.auth = null;

            if (this.onAuthRevoke) {
              this.onAuthRevoke();
            }
          });
      }
      // Not authenticated
      return new Promise((resolve) => {
        if (this.onAuthRevoke) {
          this.onAuthRevoke();
        }
        resolve();
      });
    }).catch(() => (
      // Something went wrong server-side, but that doesn't matter to the client
      // The risk is that the token didnt revoke, but we can still forget about
      // The data here on the client side
      new Promise((resolve) => {
        if (this.onAuthRevoke) {
          this.onAuthRevoke();
        }
        resolve();
      })
    ));
  }

  _fetch(method, path, {
    headers = {},
    query = {},
    body = null,
    checkAuthRefresh = true,
  }) {
    const executePrimaryRequest = () => {
      if (!this.isAuthExpired() && !headers.Authorization) {
        headers.Authorization = `Bearer ${this.accessToken()}`;
      }
      return this.request.fetch({
        method, path, headers, query, body,
      });
    };

    if (checkAuthRefresh && this.isAuthRefreshable() && this.isAuthExpired()) {
      // Automatically refresh auth using refresh_token, then subsequently
      // perform the actual request:
      return this.refreshAuth().then(executePrimaryRequest);
    }
    return executePrimaryRequest().catch((error) => {
      if (error.response && error.response.status === 401 && this.onAuthInvalid) {
        this.onAuthInvalid(error.response.json);
      }
      throw error;
    });
  }
}

['get', 'patch', 'put', 'post', 'delete', 'head'].forEach((method) => {
  Wealthsimple.prototype[method] = function (path, options = {}) {
    // Make sure that constructor's context bootstrapping is complete before a
    // remote call is made
    if (options.ignoreAuthPromise || !this.authPromise) {
      return this._fetch(method.toUpperCase(), path, options);
    }
    return this.authPromise.then(() => this._fetch(method.toUpperCase(), path, options));
  };
});

module.exports = Wealthsimple;
