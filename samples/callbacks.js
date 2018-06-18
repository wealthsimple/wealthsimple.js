require('dotenv').config();
const Wealthsimple = require('../src/index');

const wealthsimple = new Wealthsimple({
  env: 'sandbox',
  clientId: '58a99e4862a1b246a7745523ca230e61dd7feff351056fcb22c73a5d7a2fcd69',
  onAuthSuccess: (data) => { console.log('success!', data); },
  onAuthRevoke: () => { console.log('revoked!'); },
  onAuthInvalid: () => { console.log('invalid/unauthorized!'); },
});

const authPromise = wealthsimple.authenticate({
  grantType: 'password',
  scope: 'read write',
  username: process.env.EMAIL,
  password: process.env.PASSWORD,
});

// Revoke auth after successful authentication:
authPromise
  .then(() => wealthsimple.revokeAuth())
  .catch(error => console.error('Error:', error))
  .finally(() => {
    console.info('Should be an invalid call:')
    // Make the auth invalid callback fire
    return wealthsimple.get('/oauth/token/info')
      .then(response => console.error('should never reach this point', response))
      .catch(apiError => console.info('Sample ApiError: ', apiError.message));
  });
