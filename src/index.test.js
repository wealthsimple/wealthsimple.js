const Wealthsimple = require('./index');

describe('Wealthsimple', () => {
  let wealthsimple;
  beforeEach(() => {
    wealthsimple = new Wealthsimple({ clientId: 'clientid', env: 'sandbox', apiVersion: 'v1' });
  });

  describe('isAuthExpired()', () => {
    describe('auth is present and not expired', () => {
      it('returns false', () => {
        const date = new Date();
        date.setSeconds(1000000);
        wealthsimple.auth = { expires_at: date };
        expect(wealthsimple.isAuthExpired()).toBe(false);
      });
    });

    describe('auth is present but expired', () => {
      it('returns true', () => {
        wealthsimple.auth = { expires_at: Date.parse('2018-02-01T04:20:12Z') };
        expect(wealthsimple.isAuthExpired()).toBe(true);
      });
    });

    describe('auth is not present', () => {
      it('returns false', () => {
        expect(wealthsimple.isAuthExpired()).toBe(false);
      });
    });
  });

  describe('isAuthRefreshable()', () => {
    describe('auth is present and refreshable', () => {
      it('returns true', () => {
        wealthsimple.auth = { refresh_token: 'refresh' };
        expect(wealthsimple.isAuthRefreshable()).toBe(true);
      });
    });

    describe('auth is present but not refreshable', () => {
      it('returns false', () => {
        wealthsimple.auth = { refresh_token: null };
        expect(wealthsimple.isAuthRefreshable()).toBe(false);
      });
    });

    describe('auth is not present', () => {
      it('returns false', () => {
        expect(wealthsimple.isAuthRefreshable()).toBe(false);
      });
    });
  });

  describe('authExpiresAt()', () => {
    describe('auth is present', () => {
      it('returns date', () => {
        wealthsimple.auth = { expires_at: Date.parse('2018-02-01T04:20:12Z') };
        expect(wealthsimple.authExpiresAt()).toEqual(expect.any(Date));
      });
    });

    describe('auth is not present', () => {
      it('returns falsy', () => {
        expect(wealthsimple.authExpiresAt()).toBeFalsy();
      });
    });
  });

  describe('resourceOwnerId and clientCanonicalId', () => {
    describe('auth is not present', () => {
      beforeEach(() => {
        wealthsimple.auth = null;
      });

      it('returns falsy', () => {
        expect(wealthsimple.resourceOwnerId()).toBeFalsy();
        expect(wealthsimple.clientCanonicalId()).toBeFalsy();
      });
    });

    describe('auth is present', () => {
      beforeEach(() => {
        wealthsimple.auth = {
          resource_owner_id: 'user-abc123',
          client_canonical_id: 'person-def345',
        };
      });

      it('returns the IDs', () => {
        expect(wealthsimple.resourceOwnerId()).toEqual('user-abc123');
        expect(wealthsimple.clientCanonicalId()).toEqual('person-def345');
      });

      describe('co-browsing', () => {
        // const fetchAdapter = jest.fn().mockResolvedValue({});
        // const fetchAdapter = { get };
        const context =
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJhaWQiOiJ1c2VyLWZhMXB6Z3hhMnpvIiwidGlkIjoidXNlci04dy1nbHIyeHh1dyJ9.F8jeRkTnWyOYadoNbh3Tt100OLQlEBmtklK0vEGmrAuZkVjUTUMNzbNXk8MpHd9ahVMMRdvL9KxnX--9gdC3Pw';
        const publicKey = `-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEefUNZ8T+aVKookOPdmkkeQRdJFW8
6th4+Fe2NeJFbb1F5Gwi9JW64K8g/zWPE77ttwuB1VZrSFqj7tPBFJErDA==
-----END PUBLIC KEY-----`;

        beforeEach(() => {
          wealthsimple = new Wealthsimple({
            clientId: 'clientid',
            env: 'sandbox',
            apiVersion: 'v1',
            // fetchAdapter,
            cobrowsing: {
              context,
              publicKey,
              placeholder: '[USER_CANONICAL_ID]',
            },
          });
        });

        describe('_replacePath', () => {
          it('replaces the placeholder with the target user canonical id from the co-browsing context', () => {
            expect(wealthsimple._replacePath('/api/sessions/[USER_CANONICAL_ID]'))
              .toEqual('/api/sessions/user-8w-glr2xxuw');
          });
        });

        // TODO: Test that fetch methods are called with the right path
        /* it('replaces the placeholder path with the target user canonical id', () => {
          wealthsimple.get('/api/sessions/[USER_CANONICAL_ID]');

          expect(fetchAdapter).toHaveBeenCalled();
        }); */
      });
    });
  });
  describe('', () => {});
});
