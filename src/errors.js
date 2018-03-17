const constants = require('./constants');

class ApiError extends Error {
  constructor(response, json) {
    super(json);

    this.response = response;
    this.json = json;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError);
    }
  }

  isHeaderPresent(key) {
    return !!this.header(key);
  }

  header(key) {
    return this.response.headers.get(key);
  }
}

class AuthenticationError extends ApiError {
  isOTP() {
    return this.isHeaderPresent(constants.OTP_HEADER);
  }

  isOTPRequired() {
    return this.header(constants.OTP_HEADER).startsWith('required');
  }
}

module.exports = {
  ApiError,
  AuthenticationError,
};
