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

  describe('isSuccess', () => {
    describe('response status is 2XX', () => {
      it('returns true', () => {
        response.status = 200;
        expect(response.isSuccess()).toBe(true);
      });
    });

    describe('response status is not 2XX', () => {
      it('returns true', () => {
        response.status = 400;
        expect(response.isSuccess()).toBe(false);
      });
    });
  });

  describe('getRateLimit', () => {
    describe('without rate limit headers', () => {
      it('return null if no rate limit details present', () => {
        expect(response.getRateLimit()).toBe(null);
      });
    });

    describe('with rate limit headers', () => {
      beforeEach(() => {
        headers['x-ratelimit-remaining'] = '987';
        headers['x-ratelimit-limit'] = '1000';
        headers['x-ratelimit-reset'] = '2018-05-14T19:00:00Z';
      });

      it('returns rate limit details', () => {
        expect(response.getRateLimit()).toEqual({
          limit: 1000,
          remaining: 987,
          reset: new Date(Date.parse('2018-05-14T19:00:00Z')),
        });
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

    describe('with OTP recovery code', () => {
      beforeEach(() => {
        headers['x-wealthsimple-otp'] = 'YUTXHURQMPDSVTZQ';
      });

      it('returns OTP details', () => {
        expect(response.getOTP()).toEqual({ recovery_code: 'YUTXHURQMPDSVTZQ' });
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

  describe('getOTPOptions', () => {
    describe('without otp options header', () => {
      it('returns null', () => {
        expect(response.getOTPOptions()).toBe(null);
      });
    })

    describe('with otp options header', () => {
      beforeEach(() => {
        headers['x-wealthsimple-otp-options'] = 'eyJhbGciOiJIUzI1NiJ9.eyJtZXRob2RzIjpbeyJkZXZpY2VfdHlwZSI6ImVtYWlsIiwiaGludCI6bnVsbH0seyJkZXZpY2VfdHlwZSI6InJlY292ZXJ5X3NtcyIsImhpbnQiOiIzMyJ9XX0.XmWAvXBDi3avKqtDV1OVQpkABwKxlkeoFyfy06EkO1A'
      })

      it('returns the options object', () => {
        expect(response.getOTPOptions()).toEqual(
          {
            methods: [
              {
                device_type: 'email',
                hint: null,
              },
              {
                device_type: 'recovery_sms',
                hint: '33'
              }
            ]
          }
        )
      })
    })
  })
});
