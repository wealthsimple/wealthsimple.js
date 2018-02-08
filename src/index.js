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
    return this._request('POST', '/oauth/token', { body });
  }

  _request(method, path, options = {}) {
    let body = options.body;
    if (options.body && typeof options.body !== 'string') {
      body = JSON.stringify(options.body);
    }
    return fetch(this.urlFor(path), {
      method: method,
      body: body,
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    });
  }
};

module.exports = Wealthsimple;
