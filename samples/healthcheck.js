const Wealthsimple = require('../src/index');

const wealthsimple = new Wealthsimple({env: 'sandbox'});

wealthsimple.get('/healthcheck')
  .then((res) => console.log(res));
