// This example shows how to get authenticated user data.
// You must set EMAIL + PASSWORD in `.env` corresponding to a valid staging user.

require('dotenv').config();
const prompt = require('prompt-sync')();
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

const handleOtp = () => {
  const otp = prompt('What is your 2FA code? ');

  return wealthsimple.authenticate({
    grantType: 'password',
    scope: 'read write',
    username: process.env.EMAIL,
    password: process.env.PASSWORD,
    otp,
  });
};

authPromise
  .catch((error) => {
    if (error.isOTPRequired()) {
      handleOtp()
        .then(response => console.log('2FA success!', response.json))
        .catch(otpError => console.log('2FA error:', otpError));
    } else {
      console.error('Username/password incorrect:', error);
    }
  });
