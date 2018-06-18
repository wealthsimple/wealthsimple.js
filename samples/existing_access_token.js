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

let existingAccessToken;

authPromise
  .then(() => existingAccessToken = previousWealthsimple.accessToken())
  .catch(error => console.error('Error:', error))
  .then(async () => {
    const wealthsimple = await new Wealthsimple({
      env: 'sandbox',
      clientId: '58a99e4862a1b246a7745523ca230e61dd7feff351056fcb22c73a5d7a2fcd69',
      authAccessToken: existingAccessToken
    }).then((wealthsimple) => {
      debugger;
      console.log('Verified previous access token!', wealthsimple.accessToken())
      console.log('Refresh:', wealthsimple.refreshToken())
      return wealthsimple;
    });
  });

const badWealthsimple = new Wealthsimple({
  env: 'sandbox',
  clientId: '58a99e4862a1b246a7745523ca230e61dd7feff351056fcb22c73a5d7a2fcd69',
  authAccessToken: 'd7feff351056fcb22c73a5d7a2fcd6958a99e4862a1b246a7745523ca230e61d'
}).then((wealthsimple) => {
  console.log('Previous access token didn\'t work! Ignored:', wealthsimple.accessToken())
  console.log('Refresh should be empty:', wealthsimple.refreshToken())
  return wealthsimple;
});
