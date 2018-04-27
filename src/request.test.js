const Wealthsimple = require('./index');
const Request = require('./request');

describe('Request', () => {
  let wealthsimple;
  let request;
  beforeEach(() => {
    wealthsimple = new Wealthsimple({ clientId: 'clientid', env: 'sandbox', apiVersion: 'v1' });
    request = new Request({ client: wealthsimple });
  });

  describe('urlFor()', () => {
    it('returns the full API URL', () => {
      expect(request.urlFor('/users/123')).toEqual('https://api.sandbox.wealthsimple.com/v1/users/123');

      wealthsimple.env = 'production';
      expect(request.urlFor('healthcheck')).toEqual('https://api.production.wealthsimple.com/v1/healthcheck');

      wealthsimple.env = undefined;
      wealthsimple.baseUrl = 'http://localhost:3000';
      expect(request.urlFor('healthcheck')).toEqual('http://localhost:3000/v1/healthcheck');
    });
  });
});
