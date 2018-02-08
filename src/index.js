'use strict';

require('es6-promise').polyfill();
const snakeCaseKeys = require('snakecase-keys');

const ENVIRONMENTS = ['sandbox', 'production'];
const API_VERSIONS = ['v1'];

class Wealthsimple {
  constructor({clientId, clientSecret, auth, fetchAdapter, env = 'sandbox', apiVersion = 'v1'}) {
    // OAuth client details:
    if (!clientId || typeof clientId !== 'string') {
      throw new Error(`Please specify a valid OAuth 'clientId'.`);
    }
    this.clientId = clientId;
    this.clientSecret = clientSecret;

    // API environment (either 'sandbox' or 'production') and version:
    if (!ENVIRONMENTS.includes(env)) {
      throw new Error(`Unrecognized 'env'. Please use one of: ${ENVIRONMENTS.join(', ')}`)
    }
    this.env = env;
    if (!API_VERSIONS.includes(apiVersion)) {
      throw new Error(`Unrecognized 'apiVersion'. Please use one of: ${API_VERSIONS.join(', ')}`)
    }
    this.apiVersion = apiVersion;

    // Optionally pass in existing OAuth details (access_token + refresh_token)
    // so that the user does not have to be prompted to log in again:
    this.auth = auth;

    // Optionally allow a custom request adapter to be specified (e.g. for
    // react-native) which must implement the `fetch` interface:
    if (fetchAdapter) {
      this.fetch = fetchAdapter;
    } else {
      require('isomorphic-fetch');
      this.fetch = fetch;
    }
  }

  urlFor(path) {
    if (!path.startsWith('/')) {
      path = `/${path}`;
    }
    return `https://api.${this.env}.wealthsimple.com/${this.apiVersion}${path}`;
  }

  resourceOwnerId() {
    return this.auth && this.auth.resource_owner_id;
  }

  authExpiresAt() {
    if (this.auth) {
      const expiresAtTimestamp = this.auth.created_at + this.auth.expires_in;
      return new Date(expiresAtTimestamp * 1000);
    }
  }

  isAuthExpired() {
    const expiresAt = this.authExpiresAt();
    return !expiresAt || expiresAt <= new Date();
  }

  authenticate(body) {
    if (!this._authenticatePromise) {
      body = snakeCaseKeys(body);
      Object.assign(body, {
        client_id: this.clientId,
        client_secret: this.clientSecret,
        scope: 'read write',
      });
      this._authenticatePromise = this.post('/oauth/token', { body })
        .then((json) => {
          // Save auth details for use in subsequent requests:
          this.auth = json;
          return json;
        });
    }
    return this._authenticatePromise;
  }

  // Clears any cached references to promises:
  clear() {
    this._authenticatePromise = null;
  }

  _request(method, path, { query = {}, body = null }) {
    if (query && Object.keys(query).length > 0) {
      path += `?${this._queryString(query)}`;
    }

    if (body && typeof body !== 'string') {
      body = JSON.stringify(body);
    }

    const headers = new Headers({'Content-Type': 'application/json'});
    if (!this.isAuthExpired()) {
      headers.set('Authorization', `Bearer ${this.auth.access_token}`);
    } else {
      // TODO: Use `this.auth.refresh_token` to automatically refresh OAuth
      //       credentials here (waiting on AuthService backend implementation).
    }

    return this.fetch(this.urlFor(path), {
      method: method,
      body: body,
      headers: headers,
    }).then((response) => {
      return response.json().then((json) => {
        if (!response.ok) {
          throw json;
        }
        return json;
      });
    });
  }

  _queryString(params) {
    return Object.keys(params).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`).join('&');
  }
};

['GET', 'PATCH', 'PUT', 'POST', 'DELETE'].forEach((method) => {
  Wealthsimple.prototype[method.toLowerCase()] = function (path, options = {}) {
    return this._request(method, path, options);
  };
});

module.exports = Wealthsimple;
