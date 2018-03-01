const queryString = require('query-string');
const { ApiError } = require('./errors');

class Request {
  constructor({ client }) {
    this.client = client;
  }

  fetch({
    method, headers = {}, path, query = {}, body = null,
  }) {
    const newHeaders = headers;
    let newPath = path;
    let newBody = body;

    if (query && Object.keys(query).length > 0) {
      newPath += `?${queryString.stringify(query)}`;
    }
    const url = this.urlFor(newPath);

    // All request bodies (for now) are JSON:
    if (newBody && typeof newBody !== 'string') {
      newBody = JSON.stringify(newBody);
    }

    Object.assign(newHeaders, this._defaultHeaders());

    if (this.client.verbose) {
      const logs = [`${method}: ${url}`];
      if (newBody) {
        logs.push(newBody);
      }
      console.info(`${logs.join('\n')}\n`);
    }

    return this.client.fetchAdapter(url, {
      headers: newHeaders,
      method,
      body: newBody,
    }).then((response) => {
      const parsedResponsePromise = response.json().then((json) => {
        if (!response.ok) {
          throw new ApiError(response, json);
        }
        return json;
      });
      return parsedResponsePromise;
    });
  }

  urlFor(path) {
    let newPath = path;
    if (!newPath.startsWith('/')) {
      newPath = `/${newPath}`;
    }
    return `https://api.${this.client.env}.wealthsimple.com/${this.client.apiVersion}${newPath}`;
  }

  _defaultHeaders() {
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Date: new Date().toUTCString(),
      'X-Wealthsimple-Client': 'wealthsimple.js',
    };
  }
}

module.exports = Request;
