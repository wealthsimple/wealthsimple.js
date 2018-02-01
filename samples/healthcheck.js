var Wealthsimple = require('../src/index');

var apiInstance = new Wealthsimple.HealthcheckApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
};
apiInstance.healthcheck(callback);
