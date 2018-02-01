const Wealthsimple = require('../src/index');
const util = require('util');

const healthcheckApi = new Wealthsimple.HealthcheckApi();

healthcheckApi.healthcheck((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ');
    console.log(util.inspect(data, false, null));
  }
});
