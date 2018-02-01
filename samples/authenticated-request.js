require('dotenv').config();
const Wealthsimple = require('../src/index');
const util = require('util');

const defaultClient = Wealthsimple.ApiClient.instance;

let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
Bearer.apiKeyPrefix = 'Bearer';

const apiInstance = new Wealthsimple.UsersApi();

const callback = (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUser("user-221_1ut5ujy", callback);
