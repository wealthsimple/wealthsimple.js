require('dotenv').config();
const Wealthsimple = require('../src/index');

const wealthsimple = new Wealthsimple({
  env: 'sandbox',
  clientId: '58a99e4862a1b246a7745523ca230e61dd7feff351056fcb22c73a5d7a2fcd69',
  onAuthSuccess: (data) => { console.log('success!', data); },
  onAuthRevoke: () => { console.log('revoked!'); },
});

const authPromise = wealthsimple.authenticate({
  grantType: 'password',
  scope: 'read write',
  username: process.env.EMAIL,
  password: process.env.PASSWORD,
});

// Refresh auth when it expires:
authPromise
  .then(() => { wealthsimple.revokeAuth(); })
  .catch(error => console.error('Error:', error));
