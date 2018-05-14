const ApiResponse = require('./api-response');

describe('ApiResponse', () => {
  let response;
  const headers = {};
  beforeEach(() => {
    response = new ApiResponse({
      status: 200,
      headers: {
        get: key => headers[key],
        has: key => !!headers[key],
      },
      json: { abc: 123 },
    });
  });

  it('exposes status, headers, and json', () => {
    expect(response.status).toEqual(200);
    expect(typeof response.headers).toEqual('object');
    expect(response.json).toEqual({ abc: 123 });
  });

  describe('toString', () => {
    it('returns a readable summary of response', () => {
      expect(response.toString()).toEqual('Response status: 200, body: {"abc":123}');
    });
  });

  describe('rate limit methods', () => {
    describe('without rate limit headers', () => {
      it('return null if no rate limit details present', () => {
        expect(response.getRateLimitRemaining()).toBe(null);
        expect(response.getRateLimitLimit()).toBe(null);
        expect(response.getRateLimitReset()).toBe(null);
      });
    });

    describe('with rate limit headers', () => {
      beforeEach(() => {
        headers['x-ratelimit-remaining'] = '987';
        headers['x-ratelimit-limit'] = '1000';
        headers['x-ratelimit-reset'] = '2018-05-14T19:00:00Z';
      });

      it('returns the integer limit remaining', () => {
        expect(response.getRateLimitRemaining()).toEqual(987);
        expect(response.getRateLimitLimit()).toEqual(1000);
        expect(response.getRateLimitReset()).toBeInstanceOf(Date);
      });
    });
  });

  describe('getOTP', () => {
    describe('without OTP details', () => {
      it('returns null', () => {
        expect(response.getOTP()).toBe(null);
      });
    });

    describe('with OTP required (app)', () => {
      beforeEach(() => {
        headers['x-wealthsimple-otp'] = 'required; method=app';
      });

      it('returns OTP details', () => {
        expect(response.getOTP()).toEqual({ required: true, method: 'app' });
      });
    });

    describe('with OTP required (sms)', () => {
      beforeEach(() => {
        headers['x-wealthsimple-otp'] = 'required; method=sms; digits=4567';
      });

      it('returns OTP details', () => {
        expect(response.getOTP()).toEqual({ required: true, method: 'sms', digits: '4567' });
      });
    });

    describe('with OTP invalid', () => {
      beforeEach(() => {
        headers['x-wealthsimple-otp'] = 'invalid';
      });

      it('returns OTP details', () => {
        expect(response.getOTP()).toEqual({ invalid: true });
      });
    });
  });
});
