// This example shows how to get authenticated user data.
// You must set EMAIL + PASSWORD in `.env` corresponding to a valid staging user.

require('dotenv').config();
const Wealthsimple = require('../src/index');

const wealthsimple = new Wealthsimple({
  env: 'sandbox',
  clientId: '58a99e4862a1b246a7745523ca230e61dd7feff351056fcb22c73a5d7a2fcd69',
});

const authPromise = wealthsimple.authenticate({
  grantType: 'password',
  scope: 'read write',
  username: process.env.EMAIL,
  password: process.env.PASSWORD,
});

// Guard authenticated endpoints with the auth promise: Note this will not
// repeat the auth request each time.
authPromise
  .then(() => console.log(wealthsimple.auth))
  .catch(error => console.error('Error:', error));
