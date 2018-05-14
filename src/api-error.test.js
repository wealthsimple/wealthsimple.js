const ApiError = require('./api-error');
const ApiResponse = require('./api-response');

describe('ApiError', () => {
  let response;
  beforeEach(() => {
    response = new ApiResponse({
      status: 200,
      headers: {
        get: () => null,
        has: () => false,
      },
      json: { abc: 123 },
    });
  });

  describe('response', () => {
    it('returns the ApiResponse object', () => {
      const error = new ApiError(response);
      expect(error.response).toEqual(response);
    });

    it('sets a descriptive error message', () => {
      const error = new ApiError(response);
      expect(error.message).toEqual('Response status: 200, body: {"abc":123}');
    });
  });
});
