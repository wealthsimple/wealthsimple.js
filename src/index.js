'use strict';

require('babel-polyfill');
const snakeCase = require('lodash.snakecase');
const mapKeys = require('lodash.mapkeys');
const ApiRequest = require('./api-request');
const ApiError = require('./api-error');
const constants = require('./constants');

class Wealthsimple {
  constructor({
    clientId, clientSecret, auth, fetchAdapter, env = null, baseUrl = null, apiVersion = 'v1', onAuthSuccess = null, onAuthRevoke = null, verbose = false,
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

    // Optionally pass in existing OAuth details (access_token + refresh_token)
    // so that the user does not have to be prompted to log in again:
    this.auth = auth;

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

    this.request = new ApiRequest({ client: this });
  }

  resourceOwnerId() {
    return this.auth && this.auth.resource_owner_id;
  }

  clientCanonicalId() {
    return this.auth && this.auth.client_canonical_id;
  }

  authExpiresAt() {
    if (this.auth) {
      const expiresAtTimestamp = this.auth.created_at + this.auth.expires_in;
      return new Date(expiresAtTimestamp * 1000);
    }
    return undefined;
  }

  isAuthExpired() {
    const expiresAt = this.authExpiresAt();
    return !expiresAt || expiresAt <= new Date();
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
        throw new ApiError(error.response);
      });
  }

  refreshAuth() {
    if (!this.isAuthRefreshable()) {
      throw new Error('Must have a refresh_token set in order to refresh auth.');
    }
    return this.authenticate({
      grantType: 'refresh_token',
      refreshToken: this.auth.refresh_token,
      checkAuthRefresh: false,
    });
  }

  revokeAuth() {
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
  }

  _fetch(method, path, {
    headers = {},
    query = {},
    body = null,
    checkAuthRefresh = true,
  }) {
    const exeturePrimaryRequest = () => {
      if (!this.isAuthExpired()) {
        headers.Authorization = `Bearer ${this.auth.access_token}`;
      }
      return this.request.fetch({
        method, path, headers, query, body,
      });
    };

    if (checkAuthRefresh && this.isAuthRefreshable() && this.isAuthExpired()) {
      // Automatically refresh auth using refresh_token, then subsequently
      // perform the actual request:
      return this.refreshAuth().then(exeturePrimaryRequest);
    }
    return exeturePrimaryRequest();
  }
}

['get', 'patch', 'put', 'post', 'delete', 'head'].forEach((method) => {
  Wealthsimple.prototype[method] = function (path, options = {}) {
    return this._fetch(method.toUpperCase(), path, options);
  };
});

module.exports = Wealthsimple;
