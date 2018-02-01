const Wealthsimple = require('../src/index');
const util = require('util');

const apiInstance = new Wealthsimple.HealthcheckApi();

const callback = (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ');
    console.log(util.inspect(data, false, null));
  }
};
apiInstance.healthcheck(callback);
