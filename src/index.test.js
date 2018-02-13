const Wealthsimple = require('./index');

describe('Wealthsimple', () => {
  let wealthsimple;
  beforeEach(() => {
    wealthsimple = new Wealthsimple({ clientId: 'clientid', env: 'sandbox', apiVersion: 'v1' });
  });

  describe('isAuthExpired()', () => {
    describe('auth is present and not expired', () => {
      it('returns false', () => {
        wealthsimple.auth = { expires_in: 7200, created_at: new Date() / 1000 };
        expect(wealthsimple.isAuthExpired()).toBe(false);
      });
    });

    describe('auth is present but expired', () => {
      it('returns true', () => {
        wealthsimple.auth = { expires_in: 7200, created_at: new Date(2017, 4, 1) / 1000 };
        expect(wealthsimple.isAuthExpired()).toBe(true);
      });
    });

    describe('auth is not present', () => {
      it('returns true', () => {
        expect(wealthsimple.isAuthExpired()).toBe(true);
      });
    });
  });

  describe('authExpiresAt()', () => {
    describe('auth is present', () => {
      it('returns false', () => {
        wealthsimple.auth = { expires_in: 7200, created_at: Date.parse('2018-02-01T04:20:12Z') / 1000 };
        expect(wealthsimple.authExpiresAt()).toEqual(new Date(Date.parse('2018-02-01T06:20:12Z')));
      });
    });

    describe('auth is not present', () => {
      it('returns falsy', () => {
        expect(wealthsimple.authExpiresAt()).toBeFalsy();
      });
    });
  });
});
