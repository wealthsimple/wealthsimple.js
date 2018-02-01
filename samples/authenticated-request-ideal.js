// DOES NOT WORK. This is meant to showcase what the ideal usage might look like.

const Wealthsimple = require('wealthsimple');

// Configuration:
const wealthsimple = new Wealthsimple({
  clientId: '...oauth client id...',
  // OPTIONAL: populate existing oauth tokens from iOS keychain or something similar.
  accessToken: fetchFromStorage('accessToken'),
  refreshToken: fetchFromStorage('refreshToken'),
  // OPTIONAL: pass in the request adapter function
  customRequestAdapter: reactNativeFetch,
});

// Login with email + password:
wealthsimple.login('peter@example.com', 'my-password')
  .then(() => {
    // Make any authenticated calls here..
    wealthsimple.get('/v1/users/user-221_1ut5ujy')
      .then((data) => console.log(data))
  })
