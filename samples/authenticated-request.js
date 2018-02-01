// This example shows how to get authenticated user data.
// You must set EMAIL + PASSWORD in `.env` corresponding to user-221_1ut5ujy on staging.

require('dotenv').config();
const Wealthsimple = require('../src/index');
const util = require('util');

const wealthsimple = Wealthsimple.ApiClient.instance;

// Step 1: Exchange username + password for an OAuth access token.
wealthsimple.auth({
  clientId: '58a99e4862a1b246a7745523ca230e61dd7feff351056fcb22c73a5d7a2fcd69',
  grantType: 'password',
  username: process.env.EMAIL,
  password: process.env.PASSWORD,
  scope: 'read write',
  callback: (error, data, response) => {
    if (error) {
      return console.error('Auth error: ', response.status, response.body);
    }
    // Step 2: Once successfully authenticated, fetch user data.
    const usersApi = new Wealthsimple.UsersApi();
    usersApi.getUser('user-221_1ut5ujy', (error, data, response) => {
      if (error) {
        return console.error('GetUser error: ', response.status, response.body);
      }
      console.log('API called successfully. Returned data: ');
      console.log(util.inspect(data, false, null));
    });
  },
});
