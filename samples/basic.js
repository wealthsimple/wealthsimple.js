const Wealthsimple = require('../src/index');

const wealthsimple = new Wealthsimple({
  env: 'sandbox',
  clientId: '58a99e4862a1b246a7745523ca230e61dd7feff351056fcb22c73a5d7a2fcd69',
});

wealthsimple.head('/healthcheck')
  .then(response => console.log('HEAD response:', response.status, response.json));

wealthsimple.get('/healthcheck')
  .then(response => console.log('GET response:', response.status, response.json));

wealthsimple.get('/invalid')
  .then(response => console.log('should never reach this point', response))
  .catch(apiError => console.log('Sample ApiError: ', apiError.message));
