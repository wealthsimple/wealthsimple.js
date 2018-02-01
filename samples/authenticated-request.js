// This example shows how to get authenticated user data.
// You must set OAUTH_USERNAME + OAUTH_PASSWORD in `.env` corresponding to user-221_1ut5ujy 

require('dotenv').config();
const Wealthsimple = require('../src/index');
const util = require('util');

const defaultClient = Wealthsimple.ApiClient.instance;

var postBody = {
 "client_id": "58a99e4862a1b246a7745523ca230e61dd7feff351056fcb22c73a5d7a2fcd69",
 "grant_type": "password",
 "username": process.env.OAUTH_USERNAME,
 "password": process.env.OAUTH_PASSWORD,
 "scope": "read"
};
var authNames = ['Bearer'];
var contentTypes = ['application/json'];
var accepts = ['application/json'];
var returnType = 'String';

const authCallback = (error, data, response) => {
  if (error) {
    console.log("Auth error: ", error);
  } else {
    const responseJSON = JSON.parse(data);
    let Bearer = defaultClient.authentications['Bearer'];
    Bearer.apiKey = responseJSON.access_token;
    Bearer.apiKeyPrefix = 'Bearer';

    const apiInstance = new Wealthsimple.UsersApi();

    const getUserCallback = (error, data, response) => {
      if (error) {
        console.error(error);
      } else {
        console.log('API called successfully. Returned data: ');
        console.log(util.inspect(data, false, null));
      }
    };
    apiInstance.getUser("user-221_1ut5ujy", getUserCallback);
  }
};

defaultClient.callApi("/oauth/token", "POST", {}, {}, {}, {}, {}, postBody, authNames, contentTypes, accepts, returnType, authCallback);
