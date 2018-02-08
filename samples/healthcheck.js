const Wealthsimple = require('../src/index');

const wealthsimple = new Wealthsimple({env: 'sandbox'});

wealthsimple.get('/healthcheck', {auth: false})
  .then((res) => console.log(res));
