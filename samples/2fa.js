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

const authPromise = wealthsimple.authenticate({
  grantType: 'password',
  scope: 'read write',
  username: process.env.EMAIL,
  password: process.env.PASSWORD,
});

// Guard authenticated endpoints with the auth promise: Note this will not
// repeat the auth request each time.
authPromise
  .then(() => wealthsimple.get(`/users/${wealthsimple.resourceOwnerId()}`))
  .then(data => console.log('Success: ', data))
  .catch((error) => {
    if (error.error === 'otp_required') {
      /// prompt and handle 2fa here
      console.log('TODO: OTP here');
    } else {
      // Report error to Rollbar, etc
      console.error('Error:', error);
    }
  });
