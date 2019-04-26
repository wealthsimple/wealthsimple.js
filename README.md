[![Coverage Status](https://coveralls.io/repos/github/wealthsimple/wealthsimple.js/badge.svg?branch=master)](https://coveralls.io/github/wealthsimple/wealthsimple.js?branch=master)
[![CircleCI](https://circleci.com/gh/wealthsimple/wealthsimple.js.svg?style=svg&circle-token=588c9a24bda879ba0199d8ac005a3cc8dc5f39ba)](https://circleci.com/gh/wealthsimple/wealthsimple.js)
# @wealthsimple/wealthsimple

A JavaScript client for the [Wealthsimple API](https://developers.wealthsimple.com/).

### Installation

Run the following to install:

```sh
# TODO: Publish to NPM once code is finalized
npm install --save git+https://git@github.com/wealthsimple/wealthsimple.js.git
```

or if you use yarn:

```sh
yarn add git+https://git@github.com/wealthsimple/wealthsimple.js.git
```

### Example usage

See [samples directory](./samples) for a wide range of samples, or see the basic example below:

```js
const Wealthsimple = require('wealthsimple');

const wealthsimple = new Wealthsimple({
  env: 'sandbox',
  clientId: '<oauth_client_id>',

  // Optional: Depending on grant_type may or may not be needed:
  clientSecret: '<oauth_client_secret>',

  // the Wealthsimple.auth object from a previous session (passed in
  // onAuthSuccess callback) so the user does not have to login again:
  auth: { ... previous auth object ... },
});

wealthsimple.get('/healthcheck')
  .then(data => console.log(data));
```

Making authenticated requests:

```js
const authPromise = wealthsimple.authenticate({
  grantType: 'password',
  scope: 'read write',
  username: "peter@example.com",
  password: "abc123$",
});

// Guard authenticated endpoints with the auth promise: Note this will not
// repeat the auth request each time.
authPromise
  .then(() => wealthsimple.get(`/users/${wealthsimple.resourceOwnerId()}`))
  .then(data => console.log('Success: ', data))
  .catch(error => console.error('Error:', error));

authPromise
  .then(() => wealthsimple.get('/deposits', { query: { limit: 2, sort_by: 'amount', sort_order: 'desc' } }))
  .then(data => console.log('Success: ', data))
  .catch(error => console.error('Error:', error));
```

Loading previously saved token for authenicated requests:

```js
const accessTokenCookie = JSON.parse(document.cookie
  .split(';')
  .map((e) => e.split('='))
  .find((e) =>  e[0] == '_oauth2access' )[1]);

// Constructor async bootsraps auth context
const wealthsimple = new Wealthsimple({
  env: 'sandbox',
  clientId: '<oauth_client_id>',
  auth: accessTokenCookie,
});

// Will wait until auth context is loaded
wealthsimple.get(`/users/${wealthsimple.resourceOwnerId()}`))
  .then(data => console.log('Success: ', data))
  .catch(error => console.error('Error:', error));
```
