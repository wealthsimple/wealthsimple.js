'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _Object$assign = _interopDefault(require('babel-runtime/core-js/object/assign'));
var _classCallCheck = _interopDefault(require('babel-runtime/helpers/classCallCheck'));
var _createClass = _interopDefault(require('babel-runtime/helpers/createClass'));

require('es6-promise').polyfill();
var snakeCaseKeys = require('snakecase-keys');
var Request = require('./request');

var _require = require('./errors');
var AuthenticationError = _require.AuthenticationError;

var constants = require('./constants');

var Wealthsimple = function () {
  function Wealthsimple(_ref) {
    var clientId = _ref.clientId,
        clientSecret = _ref.clientSecret,
        auth = _ref.auth,
        fetchAdapter = _ref.fetchAdapter,
        _ref$env = _ref.env,
        env = _ref$env === undefined ? 'sandbox' : _ref$env,
        _ref$apiVersion = _ref.apiVersion,
        apiVersion = _ref$apiVersion === undefined ? 'v1' : _ref$apiVersion,
        _ref$onAuthSuccess = _ref.onAuthSuccess,
        onAuthSuccess = _ref$onAuthSuccess === undefined ? null : _ref$onAuthSuccess,
        _ref$onAuthRevoke = _ref.onAuthRevoke,
        onAuthRevoke = _ref$onAuthRevoke === undefined ? null : _ref$onAuthRevoke,
        _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose;

    _classCallCheck(this, Wealthsimple);

    // OAuth client details:
    if (!clientId || typeof clientId !== 'string') {
      throw new Error('Please specify a valid OAuth \'clientId\'.');
    }
    this.clientId = clientId;
    this.clientSecret = clientSecret;

    // API environment (either 'sandbox' or 'production') and version:
    if (!constants.ENVIRONMENTS.includes(env)) {
      throw new Error('Unrecognized \'env\'. Please use one of: ' + constants.ENVIRONMENTS.join(', '));
    }
    this.env = env;

    // Setting to `true` will add request logging.
    this.verbose = verbose;

    if (!constants.API_VERSIONS.includes(apiVersion)) {
      throw new Error('Unrecognized \'apiVersion\'. Please use one of: ' + constants.API_VERSIONS.join(', '));
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

  _createClass(Wealthsimple, [{
    key: 'resourceOwnerId',
    value: function resourceOwnerId() {
      return this.auth && this.auth.resource_owner_id;
    }
  }, {
    key: 'authExpiresAt',
    value: function authExpiresAt() {
      if (this.auth) {
        var expiresAtTimestamp = this.auth.created_at + this.auth.expires_in;
        return new Date(expiresAtTimestamp * 1000);
      }
      return undefined;
    }
  }, {
    key: 'isAuthExpired',
    value: function isAuthExpired() {
      var expiresAt = this.authExpiresAt();
      return !expiresAt || expiresAt <= new Date();
    }
  }, {
    key: 'isAuthRefreshable',
    value: function isAuthRefreshable() {
      return !!(this.auth && typeof this.auth.refresh_token === 'string');
    }
  }, {
    key: 'authenticate',
    value: function authenticate(attributes) {
      var _this = this;

      var headers = {};
      if (attributes.otp) {
        headers[constants.OTP_HEADER] = attributes.otp;
        delete attributes.otp;
      }

      var checkAuthRefresh = true;
      if (attributes.hasOwnProperty('checkAuthRefresh')) {
        checkAuthRefresh = attributes.checkAuthRefresh;

        delete attributes.checkAuthRefresh;
      }

      var body = snakeCaseKeys(attributes);
      _Object$assign(body, {
        client_id: this.clientId,
        client_secret: this.clientSecret
      });

      return this.post('/oauth/token', { headers: headers, body: body, checkAuthRefresh: checkAuthRefresh }).then(function (json) {
        // Save auth details for use in subsequent requests:
        _this.auth = json;

        if (_this.onAuthSuccess) {
          _this.onAuthSuccess(json);
        }

        return json;
      }).catch(function (error) {
        throw new AuthenticationError(error.response, error.json);
      });
    }
  }, {
    key: 'refreshAuth',
    value: function refreshAuth() {
      if (!this.isAuthRefreshable()) {
        throw new Error('Must have a refresh_token set in order to refresh auth.');
      }
      return this.authenticate({
        grantType: 'refresh_token',
        refreshToken: this.auth.refresh_token,
        checkAuthRefresh: false
      });
    }
  }, {
    key: 'revokeAuth',
    value: function revokeAuth() {
      var _this2 = this;

      return this.post('/oauth/revoke').then(function () {
        _this2.auth = null;

        if (_this2.onAuthRevoke) {
          _this2.onAuthRevoke();
        }
      });
    }
  }, {
    key: '_fetch',
    value: function _fetch(method, path, _ref2) {
      var _this3 = this;

      var _ref2$headers = _ref2.headers,
          headers = _ref2$headers === undefined ? {} : _ref2$headers,
          _ref2$query = _ref2.query,
          query = _ref2$query === undefined ? {} : _ref2$query,
          _ref2$body = _ref2.body,
          body = _ref2$body === undefined ? null : _ref2$body,
          _ref2$checkAuthRefres = _ref2.checkAuthRefresh,
          checkAuthRefresh = _ref2$checkAuthRefres === undefined ? true : _ref2$checkAuthRefres;

      var exeturePrimaryRequest = function exeturePrimaryRequest() {
        if (!_this3.isAuthExpired()) {
          headers.Authorization = 'Bearer ' + _this3.auth.access_token;
        }
        return _this3.request.fetch({
          method: method, path: path, headers: headers, query: query, body: body
        });
      };

      if (checkAuthRefresh && this.isAuthRefreshable() && this.isAuthExpired()) {
        // Automatically refresh auth using refresh_token, then subsequently
        // perform the actual request:
        return this.refreshAuth().then(exeturePrimaryRequest);
      }
      return exeturePrimaryRequest();
    }
  }]);

  return Wealthsimple;
}();

['get', 'patch', 'put', 'post', 'delete', 'head', 'options'].forEach(function (method) {
  Wealthsimple.prototype[method] = function (path) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return this._fetch(method.toUpperCase(), path, options);
  };
});

module.exports = Wealthsimple;
//# sourceMappingURL=index.js.map
