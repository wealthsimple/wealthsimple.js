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

  getOTP() {
    const otpString = this.headers.get(constants.OTP_HEADER);
    if (!otpString) {
      return null;
    }
    const otp = {};

    // Parse out OTP details into a more usable format. It is expected to be
    // in the format like `invalid` or `required; method=sms; digits=1234`
    otpString.split('; ').forEach((otpAttribute) => {
      if (otpAttribute.includes('=')) {
        const [key, value] = otpAttribute.split('=');
        otp[key] = value;
      } else {
        otp[otpAttribute] = true;
      }
    });
    return otp;
  }

  toString() {
    let message = `Response status: ${this.status}`;
    try {
      message += `, body: ${JSON.stringify(this.json).substring(0, 500)}`;
    } catch (e) {
      // Ignore JSON stringify errors.
    }
    return message;
  }
}

module.exports = ApiResponse;
