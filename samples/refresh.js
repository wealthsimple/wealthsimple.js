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

authPromise
  .then(() => {
    // Pretend that it expired by setting it to a date from long ago:
    wealthsimple.auth.created_at = 1519775956;
    console.log('Auth expired?', wealthsimple.isAuthExpired());
  })
  .then(() => wealthsimple.get(`/users/${wealthsimple.resourceOwnerId()}`))
  .then(data => console.log('Success: ', data))
  .catch(error => console.error('Error:', error));
