// DOES NOT WORK. This is meant to showcase what the ideal usage might look like.

const Wealthsimple = require('wealthsimple');

// Configuration:
const wealthsimple = new Wealthsimple({
  // Required: Your OAuth application's unique client ID.
  clientId: '58a99e4862a1b...',
  // Optional: pass in the request adapter.
  customRequestAdapter: reactNativeFetch,
  // Optional: populate existing oauth tokens from iOS keychain or similar.
  accessToken: fetchFromStorage('accessToken'),
  refreshToken: fetchFromStorage('refreshToken'),
});

// Login with email + password:
wealthsimple.login('peter@example.com', 'my-password')
  .then((auth) => {
    // Make any authenticated calls here..
    wealthsimple.get(`/v1/accounts`)
      .then((data) => console.log(data))

    wealthsimple.get(`/v1/bank_accounts`)
      .then((data) => console.log(data))
  })
