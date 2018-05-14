const constants = require('./constants');

class ApiError extends Error {
  constructor(response) {
    super(response.json);

    this.response = response;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError);
    }
  }
}

class AuthenticationError extends ApiError {
  isOTP() {
    return this.response.headers.has(constants.OTP_HEADER);
  }

  isOTPRequired() {
    return this.response.headers.get(constants.OTP_HEADER).startsWith('required');
  }
}

module.exports = {
  ApiError,
  AuthenticationError,
};
