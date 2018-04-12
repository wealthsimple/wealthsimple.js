require('dotenv').config();
const Wealthsimple = require('../src/index');

const wealthsimple = new Wealthsimple({
  env: 'sandbox',
  clientId: '58a99e4862a1b246a7745523ca230e61dd7feff351056fcb22c73a5d7a2fcd69',
  // If available, you can optionally specify a previous auth response so that
  // the user does not have to login again:
  // auth: { ...prior server response... }
});

const authPromise = wealthsimple.authenticate({
  grantType: 'password',
  scope: 'read write',
  username: process.env.EMAIL,
  password: process.env.PASSWORD,
});

// Revoke auth after successful authentication:
authPromise
  .then((data) => {
    console.log('Original auth: ', data);
    return wealthsimple.revokeAuth();
  })
  .then(() => {
    console.log('Revoked auth: ', wealthsimple.auth);

    wealthsimple.revokeAuth()
      .then(() => console.log('Did not fail on multiple revokes.'))
      .catch(error => console.error('Failed on second revoke:', error.json));
  })
  .catch(error => console.error('Error:', error));
