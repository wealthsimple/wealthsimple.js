'use strict';

require('es6-promise').polyfill();

class Wealthsimple {
  constructor(config) {
    this.clientId = config.clientId;
    this.accessToken = config.accessToken;
    this.refreshToken = config.refreshToken;
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

  login(email, password) {
    const body = {
      clientId: this.clientId,
      grant_type: 'password',
      username: email,
      password: password,
      scope: 'read write',
    };
    return this.post('/oauth/token', { body });
  }

  _request(method, path, { params = {}, body = null, auth = true }) {
    if (params && Object.keys(params).length > 0) {
      path += `?${this._queryString(params)}`;
    }

    if (body && typeof body !== 'string') {
      body = JSON.stringify(body);
    }

    console.log("BODY", body, "PATH", path, "METBHOD",method);
    return fetch(this.urlFor(path), {
      method: method,
      body: body,
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
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
