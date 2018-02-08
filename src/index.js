'use strict';

require('es6-promise').polyfill();

class Wealthsimple {
  constructor(config) {
    // OAuth client details:
    this.clientId = config.clientId;
    this.clientSecret = config.clientSecret;

    // API environment (either 'sandbox' or 'production') and version:
    this.env = config.env;
    this.apiVersion = config.apiVersion || 'v1';

    // Optionally pass in existing OAuth details (access_token + refresh_token)
    // so that the user does not have to be prompted to log in again:
    this.auth = config.auth;

    // Optionally allow a custom request adapter to be specified (e.g. for
    // react-native):
    if (config.requestAdapter) {
      this.fetch = config.requestAdapter;
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
    if (this.auth && this.auth.created_at && this.auth.expires_in) {
      const expiresAtTimestamp = this.auth.created_at + this.auth.expires_in;
      return new Date(expiresAtTimestamp * 1000);
    }
  }

  isAuthValid() {
    const expiresAt = this.authExpiresAt();
    return expiresAt && expiresAt > new Date();
  }

  authenticate({ grantType, username, password, scope = 'read write' }) {
    const body = {
      client_id: this.clientId,
      client_secret: this.clientSecret,
      grant_type: grantType,
      username: username,
      password: password,
      scope: scope,
    };
    return this.post('/oauth/token', { body })
      .then((json) => {
        // Save auth details for use in subsequent requests:
        this.auth = json;
        return json;
      });
  }

  _request(method, path, { query = {}, body = null }) {
    if (query && Object.keys(query).length > 0) {
      path += `?${this._queryString(query)}`;
    }

    if (body && typeof body !== 'string') {
      body = JSON.stringify(body);
    }

    let headers = new Headers({
      'Content-Type': 'application/json',
    });
    if (this.isAuthValid()) {
      headers.set('Authorization', `Bearer ${this.auth.access_token}`);
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
