const constants = require('./constants');

class ApiResponse {
  constructor({ headers, status, json }) {
    this.headers = headers;
    this.status = status;
    this.json = json;
  }

  getRateLimitReset() {
    if (this.headers.has('x-ratelimit-reset')) {
      return new Date(Date.parse(this.headers.get('x-ratelimit-reset')));
    }
    return null;
  }

  getRateLimitLimit() {
    if (this.headers.has('x-ratelimit-limit')) {
      return parseInt(this.headers.get('x-ratelimit-limit'), 10);
    }
    return null;
  }

  getRateLimitRemaining() {
    if (this.headers.has('x-ratelimit-remaining')) {
      return parseInt(this.headers.get('x-ratelimit-remaining'), 10);
    }
    return null;
  }

  isOTPRequired() {
    return this.headers.has(constants.OTP_HEADER);
  }

  toString() {
    let message = `Response status: ${this.status}`;
    try {
      message += `, body: ${JSON.stringify(this.json)}`;
    } catch (e) {
      // Ignore JSON stringify errors.
    }
    return message;
  }
}

module.exports = ApiResponse;
