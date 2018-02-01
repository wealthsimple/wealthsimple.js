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
const authPromise = wealthsimple.login('peter@example.com', 'my-password');

// BASIC PROMISE USAGE

// Guard authenticated endpoints with the auth promise: Note this will not repeat
// the auth request each time.
authPromise.then(() => wealthsimple.get(`/v1/accounts`))
  .then((data) => console.log(data));

authPromise.then(() => wealthsimple.get(`/v1/bank_accounts`))
  .then((data => console.log(data));

// Or even:
        
authPromise.then(Promise.all([
  wealthsimple.get(`/v1/accounts`),
  wealthsimple.get(`/v1/bank_accounts`),
])
  .then(([accounts, bankAccounts] => {
    // do something.
  });

// ASYNC/AWAIT

// If you're set up for async/await:
const getPetersStuff = async () => {
  await wealthsimple.login('peter@example.com', 'my-password');
  const accounts = await wealthsimple.get(`/v1/accounts`);
  const bankAccounts = await  wealthsimple.get(`/v1/bank_accounts`);
  return {
    accounts,
    bankAccounts,
  };
}

try {
  getPetersStuff();
} catch (error) {
  console.log('Oh noes');
}
