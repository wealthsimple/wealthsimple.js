'use strict';

require('es6-promise').polyfill();

class Wealthsimple {
  constructor(config) {
    this.clientId = config.clientId;
    this.clientSecret = config.clientSecret;
    this.auth = config.auth;
    this.env = config.env;
    this.apiVersion = config.apiVersion || 'v1';
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
    return this.auth.resource_owner_id;
  }

  setAuth(authObject) {
    this.auth = authObject;
  }

  login(email, password) {
    const body = {
      client_id: this.clientId,
      client_secret: this.clientSecret,
      grant_type: 'password',
      username: email,
      password: password,
      scope: 'read write',
    };
    return this.post('/oauth/token', { body , auth: false })
      .then((json) => {
        // Save auth details for use in subsequent requests:
        this.setAuth(json);
        return json;
      });
  }

  _request(method, path, { params = {}, body = null, auth = true }) {
    if (params && Object.keys(params).length > 0) {
      path += `?${this._queryString(params)}`;
    }

    if (body && typeof body !== 'string') {
      body = JSON.stringify(body);
    }

    let headers = new Headers({
      'Content-Type': 'application/json',
    });
    if (auth && this.auth) {
      headers.set('Authorization', `Bearer ${this.auth.access_token}`);
    }

    return fetch(this.urlFor(path), {
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
