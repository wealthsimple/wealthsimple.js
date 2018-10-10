const Wealthsimple = require('./index');
const ApiRequest = require('./api-request');

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
});
