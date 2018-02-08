// This example shows how to get authenticated user data.
// You must set EMAIL + PASSWORD in `.env` corresponding to a valid staging user.

require('dotenv').config();
const Wealthsimple = require('../src/index');

const wealthsimple = new Wealthsimple({
  env: 'sandbox',
  clientId: '58a99e4862a1b246a7745523ca230e61dd7feff351056fcb22c73a5d7a2fcd69',
});

const authPromise = wealthsimple.login(process.env.EMAIL, process.env.PASSWORD);

authPromise.then(() => wealthsimple.get(`/users/${wealthsimple.resourceOwnerId()}`))
  .then((data) => console.log('Success: ', data))
  .catch(error => console.error('Error:', error));
