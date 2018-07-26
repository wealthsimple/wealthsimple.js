// This example shows how to get authenticated user data.
// You must set EMAIL + PASSWORD in `.env` corresponding to a valid staging user.

require('dotenv').config();
const Wealthsimple = require('../src/index');

const previousWealthsimple = new Wealthsimple({
  env: 'sandbox',
  clientId: '58a99e4862a1b246a7745523ca230e61dd7feff351056fcb22c73a5d7a2fcd69',
  // If available, you can optionally specify a previous auth response so that
  // the user does not have to login again:
  // auth: { ...prior server response... }
});

previousWealthsimple.get('/healthcheck')
  .then(response => console.log(response.json));

const authPromise = previousWealthsimple.authenticate({
  grantType: 'password',
  scope: 'read write',
  username: process.env.EMAIL,
  password: process.env.PASSWORD,
});

let existingAuth;

authPromise
  .then(() => { existingAuth = previousWealthsimple.auth; })
  .catch(error => console.error('Error:', error))
  .then(() => {
    const wealthsimple = new Wealthsimple({
      env: 'sandbox',
      clientId: '58a99e4862a1b246a7745523ca230e61dd7feff351056fcb22c73a5d7a2fcd69',
      auth: existingAuth,
    });
    console.log(existingAuth);
    console.log('Chances are Wealthsimple.auth is null:', wealthsimple.auth);
    console.log('Chances are Wealthsimple.authPromise is pending:', wealthsimple.authPromise);
    wealthsimple.get('/users').then(() => {
      console.log('Wealthsimple.authPromise is resolved by now', wealthsimple.authPromise);
      console.log('Wealthsimple.auth is set by now', wealthsimple.auth);
      console.log('Verified previous access token!', wealthsimple.accessToken());
      console.log('Refresh:', wealthsimple.refreshToken());
    });
  });

const badWealthsimple = new Wealthsimple({
  env: 'sandbox',
  clientId: '58a99e4862a1b246a7745523ca230e61dd7feff351056fcb22c73a5d7a2fcd69',
  auth: { access_token: 'd7feff351056fcb22c73a5d7a2fcd6958a99e4862a1b246a7745523ca230e61d' },
});

console.log('Chances are Wealthsimple.auth is null:', badWealthsimple.auth);
console.log('Chances are Wealthsimple.authPromise is pending:', badWealthsimple.authPromise);

badWealthsimple.get('/oauth/token/info').then(() => {
  console.log('This should never run');
}).catch((error) => {
  console.log('Wealthsimple.authPromise is resolved by now', badWealthsimple.authPromise);
  console.log('Wealthsimple.auth is set by now (should be null)', badWealthsimple.auth);
  console.log('Error is available:', error);
});
