# @wealthsimple/wealthsimple [![CircleCI](https://circleci.com/gh/wealthsimple/wealthsimple.js.svg?style=svg&circle-token=588c9a24bda879ba0199d8ac005a3cc8dc5f39ba)](https://circleci.com/gh/wealthsimple/wealthsimple.js)

A JavaScript client for the [Wealthsimple API](https://developers.wealthsimple.com/).

```js
const Wealthsimple = require('wealthsimple');

const wealthsimple = new Wealthsimple({
  env: 'sandbox',
  clientId: '<oauth_client_id>',

  // Optional: Depending on grant_type may or may not be needed:
  clientSecret: '<oauth_client_secret>',

  // Optional: If available, you can optionally specify a previous auth response
  // so that the user does not have to login again:
  auth: { ...prior server response... },
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
