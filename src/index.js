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
      grantType: 'password',
      username: email,
      password: password,
      scope: 'read write',
    };
    console.log(this.urlFor('/oauth/token'), JSON.stringify(body));
    return fetch(this.urlFor('/oauth/token'), {
      method: 'POST',
      body: JSON.stringify(body),
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      })
    });
  }
};

module.exports = Wealthsimple;
