// This example shows how to get authenticated user data.
// You must set EMAIL + PASSWORD in `.env` corresponding to a valid staging user.

require('dotenv').config();
const Wealthsimple = require('../src/index');

const wealthsimple = new Wealthsimple({
  env: 'sandbox',
  clientId: '58a99e4862a1b246a7745523ca230e61dd7feff351056fcb22c73a5d7a2fcd69',
  // If available, you can optionally specify a previous auth response so that
  // the user does not have to login again:
  // auth: { ...prior server response... }
});

wealthsimple.get('/healthcheck')
  .then(response => console.log(response.json));

const authPromise = wealthsimple.authenticate({
  grantType: 'password',
  scope: 'read write',
  username: process.env.EMAIL,
  password: process.env.PASSWORD,
});

// Guard authenticated endpoints with the auth promise: Note this will not
// repeat the auth request each time.
authPromise
  .then(() => {
    console.log('Client ID:', wealthsimple.clientCanonicalId());
    console.log('Access token:', wealthsimple.accessToken());
    console.log('Refresh token:', wealthsimple.refreshToken());
    return wealthsimple.get(`/users/${wealthsimple.resourceOwnerId()}`);
  })
  .then(response => console.log('Success: ', response.json))
  .catch(error => console.error('Error:', error));

authPromise
  .then(() => wealthsimple.get('/deposits', { query: { limit: 2, sort_by: 'amount', sort_order: 'desc' } }))
  .then(response => console.log('Success: ', response.json, response.getRateLimit()))
  .catch(error => console.error('Error:', error));
