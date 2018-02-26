'use strict';

require('es6-promise').polyfill();
const snakeCaseKeys = require('snakecase-keys');
const Request = require('./request');

const ENVIRONMENTS = ['sandbox', 'production'];
const API_VERSIONS = ['v1'];

class Wealthsimple {
  constructor({
    clientId, clientSecret, auth, fetchAdapter, env = 'sandbox', apiVersion = 'v1',
  }) {
    // OAuth client details:
    if (!clientId || typeof clientId !== 'string') {
      throw new Error('Please specify a valid OAuth \'clientId\'.');
    }
    this.clientId = clientId;
    this.clientSecret = clientSecret;

    // API environment (either 'sandbox' or 'production') and version:
    if (!ENVIRONMENTS.includes(env)) {
      throw new Error(`Unrecognized 'env'. Please use one of: ${ENVIRONMENTS.join(', ')}`);
    }
    this.env = env;

    if (!API_VERSIONS.includes(apiVersion)) {
      throw new Error(`Unrecognized 'apiVersion'. Please use one of: ${API_VERSIONS.join(', ')}`);
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

    this.request = new Request({ client: this });
  }

  resourceOwnerId() {
    return this.auth && this.auth.resource_owner_id;
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

  authenticate(body) {
    if (!this._authenticatePromise) {
      const newBody = snakeCaseKeys(body);
      Object.assign(newBody, {
        client_id: this.clientId,
        client_secret: this.clientSecret,
      });
      this._authenticatePromise = this.post('/oauth/token', { body: newBody })
        .then((json) => {
          // Save auth details for use in subsequent requests:
          this.auth = json;
          return json;
        });
    }
    return this._authenticatePromise;
  }

  refreshAuth() {
    if (!this.isAuthRefreshable()) {
      throw new Error('Must have a refresh_token set in order to refresh auth.');
    }
    this.clear();
    return this.authenticate({
      grantType: 'refresh_token',
      refreshToken: this.auth.refresh_token,
    });
  }

  revokeAuth() {
    return this.post('/oauth/revoke');
  }

  // Clears any cached references to promises:
  clear() {
    this._authenticatePromise = null;
  }

  _fetch(method, path, { headers = {}, query = {}, body = null }) {
    const exeturePrimaryRequest = () => {
      if (!this.isAuthExpired()) {
        headers.Authorization = `Bearer ${this.auth.access_token}`;
      }
      return this.request.fetch({
        method, path, headers, query, body,
      });
    };

    if (this.isAuthRefreshable() && this.isAuthExpired()) {
      // Automatically refresh auth using refresh_token, then subsequently
      // perform the actual request:
      return this.refreshAuth().then(exeturePrimaryRequest);
    }
    return exeturePrimaryRequest();
  }
}

['get', 'patch', 'put', 'post', 'delete', 'head', 'options'].forEach((method) => {
  Wealthsimple.prototype[method] = function (path, options = {}) {
    return this._fetch(method.toUpperCase(), path, options);
  };
});

module.exports = Wealthsimple;
