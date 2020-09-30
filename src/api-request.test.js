const Wealthsimple = require('./index');
const ApiRequest = require('./api-request');
const ApiError = require('./api-error');

describe('ApiRequest', () => {
  describe('urlFor()', () => {
    it('returns the full API URL', () => {
      let wealthsimple = new Wealthsimple({ clientId: 'clientid', env: 'sandbox', apiVersion: 'v1' });
      let request = new ApiRequest({ client: wealthsimple });
      expect(request.urlFor('/users/123')).toEqual('https://api.sandbox.wealthsimple.com/v1/users/123');

      wealthsimple = new Wealthsimple({ clientId: 'clientid', env: 'production', apiVersion: 'v1' });
      request = new ApiRequest({ client: wealthsimple });
      expect(request.urlFor('healthcheck')).toEqual('https://api.production.wealthsimple.com/v1/healthcheck');

      wealthsimple = new Wealthsimple({
        clientId: 'clientid',
        env: undefined,
        apiVersion: 'v1',
        baseUrl: 'http://localhost:3000',
      });

      request = new ApiRequest({ client: wealthsimple });
      expect(request.urlFor('healthcheck')).toEqual('http://localhost:3000/v1/healthcheck');
    });
  });

  describe('fetch', () => {
    it('returns correctly for get', () => {
      const fetchAdapter = jest.fn().mockReturnValue(
        Promise.resolve({
          ok: true,
          json: jest.fn().mockReturnValue(
            Promise.resolve({
              canonical_id: 'user-123',
            }),
          ),
        }),
      );

      const wealthsimple = new Wealthsimple({
        clientId: 'clientid', env: 'sandbox', apiVersion: 'v1', fetchAdapter,
      });
      const request = new ApiRequest({ client: wealthsimple });
      const method = 'GET';
      const path = '/oauth/token/info';
      return request.fetch({ method, path }).then((response) => {
        expect(response instanceof ApiRequest);
        expect(response.json.canonical_id).toEqual('user-123');
      });
    });

    it('graphQL errors are transformed correctly', () => {
      const fetchAdapter = jest.fn().mockReturnValue(
        Promise.resolve({
          ok: true,
          json: jest.fn().mockReturnValue(
            Promise.resolve({
              errors: [{
                extensions: {
                  response: {
                    status: 401,
                    statusText: 'Unauthorized',
                    body: {
                      error: 'invalid_grant',
                      error_description: 'The provided authorization grant is invalid, expired, revoked, does not match the redirection URI used in the authorization request, or was issued to another client. If this is a \'password\' grant request, either the username or password is incorrect or 2FA is enabled (check headers).',
                    },
                  },
                },
              }],
              data: {
                createToken: null,
              },
            }),
          ),
        }),
      );

      const wealthsimple = new Wealthsimple({
        clientId: 'clientid', env: 'sandbox', apiVersion: 'v1', fetchAdapter,
      });
      const request = new ApiRequest({ client: wealthsimple });
      const method = 'GET';
      const path = '/oauth/token/info';
      return request.fetch({ method, path }).catch((error) => {
        expect(error instanceof ApiError);
        expect(error.response.status).toEqual(401);
      });
    });
  });
});
