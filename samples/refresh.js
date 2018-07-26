require('dotenv').config();
const Wealthsimple = require('../src/index');

const wealthsimple = new Wealthsimple({
  env: 'sandbox',
  clientId: '58a99e4862a1b246a7745523ca230e61dd7feff351056fcb22c73a5d7a2fcd69',
  verbose: true,
});

const authPromise = wealthsimple.authenticate({
  grantType: 'password',
  scope: 'read write',
  username: process.env.EMAIL,
  password: process.env.PASSWORD,
});

authPromise
  .then(() => {
    // Pretend that it expired by setting it to a date from long ago:
    console.log('Existing Token:', wealthsimple.accessToken());
    wealthsimple.auth.expired = function () { return true; };
  })
  .then(() => wealthsimple.get(`/users/${wealthsimple.resourceOwnerId()}`))
  .then(response => console.log('Success: ', response.json, 'New Token:', wealthsimple.accessToken()))
  .catch(error => console.error('Error:', error));
