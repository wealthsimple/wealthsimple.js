require('es6-promise').polyfill();
const snakeCaseKeys = require('snakecase-keys');
const Request = require('./request');

var _require = require('./errors');

const AuthenticationError = _require.AuthenticationError;

const constants = require('./constants');

class Wealthsimple {
  constructor(_ref) {
    let clientId = _ref.clientId,
        clientSecret = _ref.clientSecret,
        auth = _ref.auth,
        fetchAdapter = _ref.fetchAdapter;
    var _ref$env = _ref.env;
    let env = _ref$env === undefined ? 'sandbox' : _ref$env;
    var _ref$apiVersion = _ref.apiVersion;
    let apiVersion = _ref$apiVersion === undefined ? 'v1' : _ref$apiVersion;
    var _ref$onAuthSuccess = _ref.onAuthSuccess;
    let onAuthSuccess = _ref$onAuthSuccess === undefined ? null : _ref$onAuthSuccess;
    var _ref$onAuthRevoke = _ref.onAuthRevoke;
    let onAuthRevoke = _ref$onAuthRevoke === undefined ? null : _ref$onAuthRevoke;
    var _ref$verbose = _ref.verbose;
    let verbose = _ref$verbose === undefined ? false : _ref$verbose;

    // OAuth client details:
    if (!clientId || typeof clientId !== 'string') {
      throw new Error('Please specify a valid OAuth \'clientId\'.');
    }
    this.clientId = clientId;
    this.clientSecret = clientSecret;

    // API environment (either 'sandbox' or 'production') and version:
    if (!constants.ENVIRONMENTS.includes(env)) {
      throw new Error(`Unrecognized 'env'. Please use one of: ${constants.ENVIRONMENTS.join(', ')}`);
    }
    this.env = env;

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

  authenticate(attributes) {
    const headers = {};
    if (attributes.otp) {
      headers[constants.OTP_HEADER] = attributes.otp;
      delete attributes.otp;
    }

    let checkAuthRefresh = true;
    if (attributes.hasOwnProperty('checkAuthRefresh')) {
      checkAuthRefresh = attributes.checkAuthRefresh;

      delete attributes.checkAuthRefresh;
    }

    const body = snakeCaseKeys(attributes);
    Object.assign(body, {
      client_id: this.clientId,
      client_secret: this.clientSecret
    });

    return this.post('/oauth/token', { headers, body, checkAuthRefresh }).then(json => {
      // Save auth details for use in subsequent requests:
      this.auth = json;

      if (this.onAuthSuccess) {
        this.onAuthSuccess(json);
      }

      return json;
    }).catch(error => {
      throw new AuthenticationError(error.response, error.json);
    });
  }

  refreshAuth() {
    if (!this.isAuthRefreshable()) {
      throw new Error('Must have a refresh_token set in order to refresh auth.');
    }
    return this.authenticate({
      grantType: 'refresh_token',
      refreshToken: this.auth.refresh_token,
      checkAuthRefresh: false
    });
  }

  revokeAuth() {
    return this.post('/oauth/revoke').then(() => {
      this.auth = null;

      if (this.onAuthRevoke) {
        this.onAuthRevoke();
      }
    });
  }

  _fetch(method, path, _ref2) {
    var _ref2$headers = _ref2.headers;
    let headers = _ref2$headers === undefined ? {} : _ref2$headers;
    var _ref2$query = _ref2.query;
    let query = _ref2$query === undefined ? {} : _ref2$query;
    var _ref2$body = _ref2.body;
    let body = _ref2$body === undefined ? null : _ref2$body;
    var _ref2$checkAuthRefres = _ref2.checkAuthRefresh;
    let checkAuthRefresh = _ref2$checkAuthRefres === undefined ? true : _ref2$checkAuthRefres;

    const exeturePrimaryRequest = () => {
      if (!this.isAuthExpired()) {
        headers.Authorization = `Bearer ${this.auth.access_token}`;
      }
      return this.request.fetch({
        method, path, headers, query, body
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

['get', 'patch', 'put', 'post', 'delete', 'head', 'options'].forEach(method => {
  Wealthsimple.prototype[method] = function (path) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return this._fetch(method.toUpperCase(), path, options);
  };
});

module.exports = Wealthsimple;
//# sourceMappingURL=wealthsimple.mjs.map
