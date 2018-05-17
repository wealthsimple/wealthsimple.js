const constants = require('./constants');

class ApiResponse {
  constructor({ headers, status, json }) {
    this.headers = headers;
    this.status = status;
    this.json = json;
  }

  hasHeaders(...headerKeys) {
    return headerKeys.every(headerKey => this.headers.has(headerKey));
  }

  getRateLimit() {
    if (this.hasHeaders('x-ratelimit-limit', 'x-ratelimit-remaining', 'x-ratelimit-reset')) {
      return {
        limit: parseInt(this.headers.get('x-ratelimit-limit'), 10),
        remaining: parseInt(this.headers.get('x-ratelimit-remaining'), 10),
        reset: new Date(Date.parse(this.headers.get('x-ratelimit-reset'))),
      };
    }
    return null;
  }

  getOTP() {
    const otpString = this.headers.get(constants.OTP_HEADER);
    if (!otpString) {
      return null;
    }
    const otp = {};

    if (otpString.match(/^[a-z]{16}$/i)) {
      otp.recovery_code = otpString;
      return otp;
    }

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
