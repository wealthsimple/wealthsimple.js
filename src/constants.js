const constants = {
  API_VERSIONS: ['v1'],
  ENVIRONMENTS: ['development', 'sandbox', 'production'],
  OTP_HEADER: 'x-wealthsimple-otp',
};

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Request-Headers
constants.ACCESS_CONTROL_REQUEST_HEADERS = [
  'x-ratelimit-limit',
  'x-ratelimit-remaining',
  'x-ratelimit-reset',
  'x-request-id',
  constants.OTP_HEADER,
];

module.exports = constants;
