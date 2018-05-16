const queryString = require('query-string');
const ApiError = require('./api-error');
const ApiResponse = require('./api-response');

class ApiRequest {
  constructor({ client }) {
    this.client = client;
  }

  fetch({
    method, headers = {}, path, query = {}, body = null,
  }) {
    let newHeaders = headers;
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

    newHeaders = {
      ...newHeaders,
      ...this._defaultHeaders(),
    };

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
    }).then(this._handleResponse.bind(this));
  }

  urlFor(path) {
    let newPath = path;
    if (!newPath.startsWith('/')) {
      newPath = `/${newPath}`;
    }
    let baseUrl;
    if (this.client.baseUrl) {
      ({ baseUrl } = this.client);
    } else {
      baseUrl = `https://api.${this.client.env}.wealthsimple.com`;
    }
    return `${baseUrl}/${this.client.apiVersion}${newPath}`;
  }

  // Given a Response object ( https://developer.mozilla.org/en-US/docs/Web/API/Response )
  // either parse it and wrap it in our own ApiResponse class, or throw an ApiError.
  _handleResponse(response) {
    const apiResponse = new ApiResponse({
      status: response.status,
      headers: response.headers,
    });
    return response.json()
      .then((json) => {
        apiResponse.json = json;
      }).catch(() => {
        // Fail silently if response body is not present or malformed JSON:
        apiResponse.json = null;
      }).then(() => {
        if (this.client.onResponse) {
          this.client.onResponse(apiResponse);
        }
        if (!response.ok) {
          throw new ApiError(apiResponse);
        }
        return apiResponse;
      });
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

module.exports = ApiRequest;
