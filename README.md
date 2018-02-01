# wealthsimple_api

WealthsimpleApi - JavaScript client for wealthsimple_api
# Introduction  Welcome to the Wealthsimple API reference! Wealthsimple API provides the basic building blocks for creating and funding investment accounts, as well as retrieving account values and transaction data.  The API is built around REST conventions and is designed to have predictable, resource-oriented endpoints. Keep reading below for more information on each specific call.  *Note:*  - *The API is currently in the **Request For Comments (RFC)** phase and is not yet ready for public consumption. Many endpoints have not yet been implemented and will return 501 Not Yet Implemented status code.* - *The API is currently focused on **read-only operations**. We will eventually expand it to allow for creating/updating/deleting resources.*  # API hosts  ``` https://api.sandbox.wealthsimple.com (Sandbox) https://api.production.wealthsimple.com (Production) ```  The Sandbox environment is unrestricted and should be used for all testing. When you’re getting ready to launch into Production, please request Production API access by reaching out to <a href=\"mailto:api-support@wealthsimple.com\">API support</a>.  # Authentication  All resources within the API require authentication via standard OAuth 2 grant flows.  The Wealthsimple API supports `client_credentials`, `authorization_code`, and `password` grant types. Using `password` *is strongly discouraged* and should be reserved for special circumstances such as creating a new user & immediately authenticating as them.  More information about OAuth 2 grant flows can be found in [Section 4 of the OAuth 2 RFC](https://tools.ietf.org/html/rfc6749#section-4).  ## Userless/Application-only Authentication  For all non-resource owner specific endpoints, where you do not need to act on user's behalf, you can choose to authenticate only using your application credentials.  ### Request an access token  ```json POST https://api.sandbox.wealthsimple.com/v1/oauth/token {   \"client_id\": \"YOUR-CLIENT-ID\",   \"client_secret\": \"YOUR-CLIENT-SECRET\",   \"grant_type\": \"client_credentials\" } ``` We also support client application authentication via the Authorization header. The format is HTTP Basic authentication, with the value being a base64 encoding of YOUR-CLIENT-ID:YOUR-CLIENT-SECRET.  ``` POST https://api.sandbox.wealthsimple.com/v1/oauth/token Authorization: Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW Content-Type: application/x-www-form-urlencoded ```  ### Example response  ```json {   \"access_token\": \"de6780bc506a0446309bd9362820ba8aed28aa506c71eedbe1c5c4f9dd350e54\",   \"token_type\": \"bearer\",   \"expires_in\": 7200,   \"created_at\": 1500123132 } ```   ### Using the token You can now access protected, anonymous/userless level API endpoints by passing the token in the headers like so:  ```json Headers: Authroization: Bearer ACCESS-TOKEN  ```  ## Authenticating as a User in your Application (Resource Owner)  For any action where you need to act on a user's behalf you can go through the `authorization_code` or `password` grant flow to obtain an access token associated with a resource owner. Most of our endpoints are designed to be called by a user.  While the password grant flow is supported, it is recommended you authenticate using `authorization_code`. If you must use password **we strongly discourage you storing the user's password, even if encrypted.** There are severe security implications by doing so.  ### Access Token via User Authorization  #### Obtain User Authorization Approval  Your OAuth application must redirect the user to the authorization endpoint. It will inform the user your application wishes to gain access to their account. If they approve access, the user will be redirected to your application's `YOUR-CALLBACK-URI` with the authorization code.  The `YOUR-CALLBACK-URI` for your application is defined ahead of time when your credentials were issued and the request's `redirect_uri` must match what's been configured.  *Note: If a user has previously authorized your application, the prompt will be skipped and the user is redirected with the code automatically.*  Below is the URL your application must direct the user to:  ``` GET https://staging.wealthsimple.com/authorize?client_id=YOUR-CLIENT-ID     &redirect_uri=YOUR-CALLBACK-URI     &state=YOUR-CSRF-TOKEN     &response_type=code ```  *Note: For production, the URL is `https://my.wealthsimple.com/authorize`*  The `state` parameter is optional but recommended to guard against CSRF attacks. It is a random value chosen by your application to maintain state between the request and callback. It ensures the callback the application receives is the one initiated by your request.  ##### Example Response  User is presented our authorization page for approval. Since we use a single-page application, it will redirect to where the app lives:  ``` HTTP/1.1 302 Found Location: https://staging.wealthsimple.com/app/authorize?client_id=YOUR-CLIENT-ID     &redirect_uri=YOUR-CALLBACK-URI     &state=YOUR-CSRF-TOKEN     &response_type=code ```  If they have an active Wealthsimple session, they'll be displayed the prompt otherwise they'll be presented with our login page first.  Once they approve access they will be redirected back to your app:  ``` HTTP/1.1 302 Found Location: YOUR-CALLBACK-URI?code=6309bd71eedaa59362820babc506a0448aed28678006cdebe1c5c4f9dd350e54&state=YOUR-CSRF-TOKEN ```  ##### Example Response (Previously Approved)  User is immediately redirected back to your app, no prompt required, no single-page application loading.  ``` HTTP/1.1 302 Found Location: YOUR-CALLBACK-URI?code=6309bd71eedaa59362820babc506a0448aed28678006cdebe1c5c4f9dd350e54&state=YOUR-CSRF-TOKEN ```  ##### Example Response (User Denies Access)  The API will still redirect to your application, but with `error` set. You can use this to gracefully inform the user why you need authorization:  ``` HTTP/1.1 302 Found Location: YOUR-CALLBACK-URI?error=access_denied&error_description=The+resource+owner+or+authorization+server+denied+the+request.&state=1234 ```  #### Exchange Authorization Code for Access Token  The application, upon receiving the authorization code from the callback in the authorization step, should post to the token endpoint to exchange it for a long-lived access token:  ``` POST https://api.sandbox.wealthsimple.com/v1/oauth/token {   \"grant_type\": \"authorization_code\",   \"client_id\": \"YOUR-CLIENT-ID\",   \"client_secret\": \"YOUR-CLIENT-SECRET\",   \"redirect_uri\": \" YOUR-CALLBACK-URI\",   \"code\": \"6309bd71eedaa59362820babc506a0448aed28678006cdebe1c5c4f9dd350e54\" } ```  The application must authenticate itself with its client secret and pass the `code` parameter received prior.  ##### Example response  ```json {   \"access_token\": \"de6780bc506a0446309bd9362820ba8aed28aa506c71eedbe1c5c4f9dd350e54\",   \"token_type\": \"bearer\",   \"expires_in\": 7200,   \"created_at\": 1500123132 } ```  ### Access Token via User Credentials  ```json POST https://api.sandbox.wealthsimple.com/v1/oauth/token {   \"grant_type\": \"password\",   \"client_id\": \"YOUR-CLIENT-ID\",   \"client_secret\": \"YOUR-CLIENT-SECRET\",   \"username\": \"USERNAME-OF-USER\",   \"password\": \"PASSWORD-OF-USER\" } ```  Or, alternatively you can use HTTP Basic to authenticate your application client as described in the application authentication section:  ```json POST https://api.sandbox.wealthsimple.com/v1/oauth/token Authorization: Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW {   \"grant_type\": \"password\",   \"username\": \"USERNAME-OF-USER\",   \"password\": \"PASSWORD-OF-USER\" } ``` We expect you identify your client application during the password grant flow so we properly enforce which users can authenticate through your application.  #### Example response  ```json {   \"access_token\": \"de6780bc506a0446309bd9362820ba8aed28aa506c71eedbe1c5c4f9dd350e54\",   \"token_type\": \"bearer\",   \"expires_in\": 7200,   \"created_at\": 1500123132 } ```  #### Users with Two-Factor Authentication  Some users may have enabled [Two-Factor Authentication](https://en.wikipedia.org/wiki/Multi-factor_authentication) (2FA) for additional security. We currently support two methods of 2FA: mobile SMS codes and mobile authenticator apps like [Google Authenticator](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en). When authenticating with `password` for a user with 2FA enabled, the endpoint will fail with a *401 Unauthorized* even if you provided the correct username & password. At first glance this appears indistinguishable from a response when an invalid username or password is provided.  In order to maintain OAuth 2 spec, we set the `X-Wealthsimple-OTP` response header so your application can determine if a 2FA code (OTP) is required or if it's just bad credentials. In this scenario your application should prompt the user for their OTP code and replay your original `password` request with the header `X-Wealthsimple-OTP` set to the value of the OTP given by the user.  The structure of the response `X-Wealthsimple-OTP` header is semicolon delimited and is comprised of 3 parts: the message, the 2FA method the user is using, and the last 4 digits of their phone (if applicable). The method can be either `app` or `sms` currently, and you can use this to gracefully tell the user what do to get their OTP code:  ``` X-Wealthsimple-OTP: MESSAGE; method=METHOD; digits=DIGITS ```  * `MESSAGE` will either be `required` if you don't send the OTP code or `invalid` if the OTP provided is bad. * `METHOD` currently will either be `app` for Google Authenticator or `sms` if they're using a mobile device * `DIGITS` will be the user's last 4 digits of their 2FA phone number on file. This field may not be present if user is using `app`.  *__Note:__ If the user is using `sms`, they will automatically receive a text message from us every time your application attempts to authenticate without providing an OTP code.*  #### Authentication Example with Two-Factor Authentication  Request:  ```json POST https://api.sandbox.wealthsimple.com/v1/oauth/token Authorization: Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW {   \"grant_type\": \"password\",   \"username\": \"USERNAME-OF-USER\",   \"password\": \"PASSWORD-OF-USER\" } ```  Response:  ``` HTTP/1.0 401 Unauthorized X-Wealthsimple-OTP: required; method=sms; digits=7375 {     \"error\": \"invalid_grant\",     \"error_description\": \"The provided authorization grant is invalid, expired, revoked, does not match the redirection URI used in the authorization request, or was issued to another client.\" } ```  At this point the user will have received an OTP code on their mobile device which they provide to the application.  Subsequent Request:  ```json POST https://api.sandbox.wealthsimple.com/v1/oauth/token Authorization: Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW X-Wealthsimple-OTP: 682932 {   \"grant_type\": \"password\",   \"username\": \"USERNAME-OF-USER\",   \"password\": \"PASSWORD-OF-USER\" } ```  Subsequent Response:  ```json {   \"access_token\": \"de6780bc506a0446309bd9362820ba8aed28aa506c71eedbe1c5c4f9dd350e54\",   \"token_type\": \"bearer\",   \"expires_in\": 7200,   \"created_at\": 1500123132 } ```  ### Using the Access Token  You can now access protected, \"user-centric\" API endpoints by passing the token in the Authorization header:  ``` Authorization: Bearer ACCESS-TOKEN ```  ### Viewing your Authentication Info  We have an endpoint you can call should your application need more information about the authentication its been granted. This can especially be the case for when authenticated as a resource owner, as they have a unique identifier you can use.  ``` GET https://api.sandbox.wealthsimple.com/v1/oauth/token/info Authorization: Bearer ACCESS-TOKEN ```  If you authenticated as your application, and not as a user, then `resource_owner_id` will be set to null.  #### Example response  ```json {     \"token\": {         \"id\": 4655,         \"resource_owner_id\": \"user-n5vhwz7ti9q\",         \"application_id\": 24,         \"token\": \"de6780bc506a0446309bd9362820ba8aed28aa506c71eedbe1c5c4f9dd350e54\",         \"refresh_token\": null,         \"expires_in\": 7200,         \"revoked_at\": null,         \"created_at\": \"2017-08-17T21:33:51.884Z\",         \"scopes\": \"\",         \"previous_refresh_token\": \"\",         \"application_family_id\": \"dunder-mifflin\"     } } ```  # Pagination  Many of the `GET` APIs that return a collection of results are paginated because the size of result-set can be prohibitively large.  These APIs take a `first_result` and `max_results` as query parameters.  The `first_result` is an index offset and the `max_results` determines the upper limit on how many results will be returned per call.  If the API has additional query parameters it is important to resend them on subsequent page requests otherwise the result set will differ.  That being said, some queries are inherently unstable.  For example, if you query for Clients and the sort order is descending, if the `creation_date` parameter is not fixed as new Clients are added to the system, it will push older clients into subsequent pages.  # Errors  Wealthsimple uses conventional HTTP response codes to indicate the success or failure of an API request. In general, codes in the 2xx range indicate success, codes in the 4xx range indicate an error that failed given the information provided (e.g., a required parameter was omitted, missing additional information, etc.), and codes in the 5xx range indicate an error with Wealthsimple's servers.  Not all errors map cleanly onto HTTP response codes, however. When a request is valid but does not complete successfully, we return a 402 error code and will include a code in the error for you to understand why.  Refer to the list of codes in the documentation. 
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0
- Package version: 1.0
- Build date: 2018-01-31T21:34:46.033-05:00
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install wealthsimple_api --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your wealthsimple_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('wealthsimple_api')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var WealthsimpleApi = require('wealthsimple_api');

var defaultClient = WealthsimpleApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix['Authorization'] = "Token"

var api = new WealthsimpleApi.AccountsApi()

var account = new WealthsimpleApi.AccountInput(); // {AccountInput} 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createAccount(account, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.sandbox.wealthsimple.com/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*WealthsimpleApi.AccountsApi* | [**createAccount**](docs/AccountsApi.md#createAccount) | **POST** /accounts | 
*WealthsimpleApi.AccountsApi* | [**getAccount**](docs/AccountsApi.md#getAccount) | **GET** /accounts/{account_id} | 
*WealthsimpleApi.AccountsApi* | [**listAccounts**](docs/AccountsApi.md#listAccounts) | **GET** /accounts | 
*WealthsimpleApi.AssessmentsApi* | [**listAccountAssessments**](docs/AssessmentsApi.md#listAccountAssessments) | **GET** /account_assessments | 
*WealthsimpleApi.AssessmentsApi* | [**listClientAssessments**](docs/AssessmentsApi.md#listClientAssessments) | **GET** /client_assessments | 
*WealthsimpleApi.CorporationsApi* | [**createCorporation**](docs/CorporationsApi.md#createCorporation) | **POST** /corporations | 
*WealthsimpleApi.CorporationsApi* | [**getCorporation**](docs/CorporationsApi.md#getCorporation) | **GET** /corporations/{corporation_id} | 
*WealthsimpleApi.CorporationsApi* | [**listCorporations**](docs/CorporationsApi.md#listCorporations) | **GET** /corporations | 
*WealthsimpleApi.CorporationsApi* | [**updateCorporation**](docs/CorporationsApi.md#updateCorporation) | **PATCH** /corporations/{corporation_id} | 
*WealthsimpleApi.DailyValuesApi* | [**listDailyValues**](docs/DailyValuesApi.md#listDailyValues) | **GET** /daily_values | 
*WealthsimpleApi.DocumentsApi* | [**createDocument**](docs/DocumentsApi.md#createDocument) | **POST** /documents | 
*WealthsimpleApi.DocumentsApi* | [**getDocument**](docs/DocumentsApi.md#getDocument) | **GET** /documents/{document_id} | 
*WealthsimpleApi.DocumentsApi* | [**getDocumentBinary**](docs/DocumentsApi.md#getDocumentBinary) | **GET** /documents/{document_id}/file | 
*WealthsimpleApi.DocumentsApi* | [**listDocuments**](docs/DocumentsApi.md#listDocuments) | **GET** /documents | 
*WealthsimpleApi.FundingApi* | [**createABankAccount**](docs/FundingApi.md#createABankAccount) | **POST** /bank_accounts | 
*WealthsimpleApi.FundingApi* | [**createDeposit**](docs/FundingApi.md#createDeposit) | **POST** /deposits | 
*WealthsimpleApi.FundingApi* | [**createWithdrawal**](docs/FundingApi.md#createWithdrawal) | **POST** /withdrawals | 
*WealthsimpleApi.FundingApi* | [**getBankAccount**](docs/FundingApi.md#getBankAccount) | **GET** /bank_accounts/{bank_account_id} | 
*WealthsimpleApi.FundingApi* | [**getDeposit**](docs/FundingApi.md#getDeposit) | **GET** /deposits/{deposit_id} | 
*WealthsimpleApi.FundingApi* | [**getWithdrawal**](docs/FundingApi.md#getWithdrawal) | **GET** /withdrawals/{withdrawal_id} | 
*WealthsimpleApi.FundingApi* | [**listBankAccounts**](docs/FundingApi.md#listBankAccounts) | **GET** /bank_accounts | 
*WealthsimpleApi.FundingApi* | [**listDeposits**](docs/FundingApi.md#listDeposits) | **GET** /deposits | 
*WealthsimpleApi.FundingApi* | [**listWithdrawals**](docs/FundingApi.md#listWithdrawals) | **GET** /withdrawals | 
*WealthsimpleApi.HealthcheckApi* | [**healthcheck**](docs/HealthcheckApi.md#healthcheck) | **GET** /healthcheck | 
*WealthsimpleApi.InstitutionalTransfersApi* | [**getAccountTransfer**](docs/InstitutionalTransfersApi.md#getAccountTransfer) | **GET** /institutional_transfers/{institutional_transfer_id} | 
*WealthsimpleApi.InstitutionalTransfersApi* | [**listAccountTransfers**](docs/InstitutionalTransfersApi.md#listAccountTransfers) | **GET** /institutional_transfers | 
*WealthsimpleApi.InstitutionalTransfersApi* | [**listFinancialInstitutions**](docs/InstitutionalTransfersApi.md#listFinancialInstitutions) | **GET** /financial_institutions | 
*WealthsimpleApi.PeopleApi* | [**createPerson**](docs/PeopleApi.md#createPerson) | **POST** /people | 
*WealthsimpleApi.PeopleApi* | [**getPerson**](docs/PeopleApi.md#getPerson) | **GET** /people/{person_id} | 
*WealthsimpleApi.PeopleApi* | [**listPeople**](docs/PeopleApi.md#listPeople) | **GET** /people | 
*WealthsimpleApi.PeopleApi* | [**updatePerson**](docs/PeopleApi.md#updatePerson) | **PATCH** /people/{person_id} | 
*WealthsimpleApi.PositionsApi* | [**listPositions**](docs/PositionsApi.md#listPositions) | **GET** /positions | 
*WealthsimpleApi.SurveysApi* | [**getSurvey**](docs/SurveysApi.md#getSurvey) | **GET** /surveys/{survey_id} | 
*WealthsimpleApi.SurveysApi* | [**listSurveys**](docs/SurveysApi.md#listSurveys) | **GET** /surveys | 
*WealthsimpleApi.TransactionsApi* | [**listTransactions**](docs/TransactionsApi.md#listTransactions) | **GET** /transactions | 
*WealthsimpleApi.TrustsApi* | [**createTrust**](docs/TrustsApi.md#createTrust) | **POST** /trusts | 
*WealthsimpleApi.TrustsApi* | [**getTrust**](docs/TrustsApi.md#getTrust) | **GET** /trusts/{trust_id} | 
*WealthsimpleApi.TrustsApi* | [**listTrusts**](docs/TrustsApi.md#listTrusts) | **GET** /trusts | 
*WealthsimpleApi.TrustsApi* | [**updateTrust**](docs/TrustsApi.md#updateTrust) | **PATCH** /trusts/{trust_id} | 
*WealthsimpleApi.UsersApi* | [**createUser**](docs/UsersApi.md#createUser) | **POST** /users | 
*WealthsimpleApi.UsersApi* | [**getUser**](docs/UsersApi.md#getUser) | **GET** /users/{user_id} | 
*WealthsimpleApi.UsersApi* | [**listUsers**](docs/UsersApi.md#listUsers) | **GET** /users | 


## Documentation for Models

 - [WealthsimpleApi.AccountBase](docs/AccountBase.md)
 - [WealthsimpleApi.AccountCreatedAt](docs/AccountCreatedAt.md)
 - [WealthsimpleApi.AccountId](docs/AccountId.md)
 - [WealthsimpleApi.AccountNumber](docs/AccountNumber.md)
 - [WealthsimpleApi.AccountOwner](docs/AccountOwner.md)
 - [WealthsimpleApi.AccountOwners](docs/AccountOwners.md)
 - [WealthsimpleApi.AccountTransfer](docs/AccountTransfer.md)
 - [WealthsimpleApi.AccountTransferEvent](docs/AccountTransferEvent.md)
 - [WealthsimpleApi.AccountTransferId](docs/AccountTransferId.md)
 - [WealthsimpleApi.AccountType](docs/AccountType.md)
 - [WealthsimpleApi.AccountUpdatedAt](docs/AccountUpdatedAt.md)
 - [WealthsimpleApi.Address](docs/Address.md)
 - [WealthsimpleApi.Answer](docs/Answer.md)
 - [WealthsimpleApi.AnswerHint](docs/AnswerHint.md)
 - [WealthsimpleApi.AnswerId](docs/AnswerId.md)
 - [WealthsimpleApi.AnswerOptions](docs/AnswerOptions.md)
 - [WealthsimpleApi.AnswerUpdates](docs/AnswerUpdates.md)
 - [WealthsimpleApi.Answers](docs/Answers.md)
 - [WealthsimpleApi.Assessment](docs/Assessment.md)
 - [WealthsimpleApi.Asset](docs/Asset.md)
 - [WealthsimpleApi.BankAccountBase](docs/BankAccountBase.md)
 - [WealthsimpleApi.BankAccountCreatedAt](docs/BankAccountCreatedAt.md)
 - [WealthsimpleApi.BankAccountId](docs/BankAccountId.md)
 - [WealthsimpleApi.BankAccountType](docs/BankAccountType.md)
 - [WealthsimpleApi.BankAccountUpdatedAt](docs/BankAccountUpdatedAt.md)
 - [WealthsimpleApi.Citizenship](docs/Citizenship.md)
 - [WealthsimpleApi.Citizenships](docs/Citizenships.md)
 - [WealthsimpleApi.ClientBase](docs/ClientBase.md)
 - [WealthsimpleApi.ClientId](docs/ClientId.md)
 - [WealthsimpleApi.ClientStatus](docs/ClientStatus.md)
 - [WealthsimpleApi.ClientType](docs/ClientType.md)
 - [WealthsimpleApi.CorporationDirectors](docs/CorporationDirectors.md)
 - [WealthsimpleApi.CorporationId](docs/CorporationId.md)
 - [WealthsimpleApi.CorporationName](docs/CorporationName.md)
 - [WealthsimpleApi.CorporationOwner](docs/CorporationOwner.md)
 - [WealthsimpleApi.CorporationOwnerType](docs/CorporationOwnerType.md)
 - [WealthsimpleApi.CorporationOwners](docs/CorporationOwners.md)
 - [WealthsimpleApi.CountryCode](docs/CountryCode.md)
 - [WealthsimpleApi.CreatedAt](docs/CreatedAt.md)
 - [WealthsimpleApi.CreatedUpdatedAt](docs/CreatedUpdatedAt.md)
 - [WealthsimpleApi.Currency](docs/Currency.md)
 - [WealthsimpleApi.CustomIncrement](docs/CustomIncrement.md)
 - [WealthsimpleApi.DailyValue](docs/DailyValue.md)
 - [WealthsimpleApi.DateTime](docs/DateTime.md)
 - [WealthsimpleApi.DebitAccountId](docs/DebitAccountId.md)
 - [WealthsimpleApi.Dependent](docs/Dependent.md)
 - [WealthsimpleApi.Dependents](docs/Dependents.md)
 - [WealthsimpleApi.DocumentBase](docs/DocumentBase.md)
 - [WealthsimpleApi.DocumentId](docs/DocumentId.md)
 - [WealthsimpleApi.EffectiveDate](docs/EffectiveDate.md)
 - [WealthsimpleApi.Email](docs/Email.md)
 - [WealthsimpleApi.EmailPreferences](docs/EmailPreferences.md)
 - [WealthsimpleApi.Employment](docs/Employment.md)
 - [WealthsimpleApi.EmploymentEmployerInfo](docs/EmploymentEmployerInfo.md)
 - [WealthsimpleApi.EmploymentStatus](docs/EmploymentStatus.md)
 - [WealthsimpleApi.Error](docs/Error.md)
 - [WealthsimpleApi.ExternalId](docs/ExternalId.md)
 - [WealthsimpleApi.FinancialInstitution](docs/FinancialInstitution.md)
 - [WealthsimpleApi.FinancialInstitutionId](docs/FinancialInstitutionId.md)
 - [WealthsimpleApi.FinancialInstitutions](docs/FinancialInstitutions.md)
 - [WealthsimpleApi.FirstName](docs/FirstName.md)
 - [WealthsimpleApi.FullLegalName](docs/FullLegalName.md)
 - [WealthsimpleApi.FundsTransferBase](docs/FundsTransferBase.md)
 - [WealthsimpleApi.FundsTransferEvent](docs/FundsTransferEvent.md)
 - [WealthsimpleApi.FundsTransferId](docs/FundsTransferId.md)
 - [WealthsimpleApi.FundsTransferRejectReason](docs/FundsTransferRejectReason.md)
 - [WealthsimpleApi.FundsTransferScheduleId](docs/FundsTransferScheduleId.md)
 - [WealthsimpleApi.FundsTransferStatus](docs/FundsTransferStatus.md)
 - [WealthsimpleApi.FundsTransferType](docs/FundsTransferType.md)
 - [WealthsimpleApi.Gender](docs/Gender.md)
 - [WealthsimpleApi.Healthcheck](docs/Healthcheck.md)
 - [WealthsimpleApi.Insider](docs/Insider.md)
 - [WealthsimpleApi.Insiders](docs/Insiders.md)
 - [WealthsimpleApi.Institution](docs/Institution.md)
 - [WealthsimpleApi.InstitutionId](docs/InstitutionId.md)
 - [WealthsimpleApi.InstitutionNumber](docs/InstitutionNumber.md)
 - [WealthsimpleApi.LastName](docs/LastName.md)
 - [WealthsimpleApi.Locale](docs/Locale.md)
 - [WealthsimpleApi.MaritalStatus](docs/MaritalStatus.md)
 - [WealthsimpleApi.MaskedAccountNumber](docs/MaskedAccountNumber.md)
 - [WealthsimpleApi.MiddleNames](docs/MiddleNames.md)
 - [WealthsimpleApi.MimeType](docs/MimeType.md)
 - [WealthsimpleApi.ModelDate](docs/ModelDate.md)
 - [WealthsimpleApi.Money](docs/Money.md)
 - [WealthsimpleApi.Name](docs/Name.md)
 - [WealthsimpleApi.Paginated](docs/Paginated.md)
 - [WealthsimpleApi.Password](docs/Password.md)
 - [WealthsimpleApi.Percent](docs/Percent.md)
 - [WealthsimpleApi.PersonId](docs/PersonId.md)
 - [WealthsimpleApi.PhoneNumber](docs/PhoneNumber.md)
 - [WealthsimpleApi.PhoneNumbers](docs/PhoneNumbers.md)
 - [WealthsimpleApi.PoliticallyExposedPeople](docs/PoliticallyExposedPeople.md)
 - [WealthsimpleApi.PoliticallyExposedPerson](docs/PoliticallyExposedPerson.md)
 - [WealthsimpleApi.Position](docs/Position.md)
 - [WealthsimpleApi.PositionId](docs/PositionId.md)
 - [WealthsimpleApi.PreferredFirstName](docs/PreferredFirstName.md)
 - [WealthsimpleApi.ProcessDate](docs/ProcessDate.md)
 - [WealthsimpleApi.Province](docs/Province.md)
 - [WealthsimpleApi.QuestionId](docs/QuestionId.md)
 - [WealthsimpleApi.RangeLimits](docs/RangeLimits.md)
 - [WealthsimpleApi.RegulatedPeople](docs/RegulatedPeople.md)
 - [WealthsimpleApi.RegulatedPerson](docs/RegulatedPerson.md)
 - [WealthsimpleApi.Relation](docs/Relation.md)
 - [WealthsimpleApi.SpouseOrCommonLaw](docs/SpouseOrCommonLaw.md)
 - [WealthsimpleApi.StepType](docs/StepType.md)
 - [WealthsimpleApi.SurveyBase](docs/SurveyBase.md)
 - [WealthsimpleApi.SurveyDefinitionId](docs/SurveyDefinitionId.md)
 - [WealthsimpleApi.SurveyId](docs/SurveyId.md)
 - [WealthsimpleApi.SurveyQuestion](docs/SurveyQuestion.md)
 - [WealthsimpleApi.SurveyState](docs/SurveyState.md)
 - [WealthsimpleApi.SurveyUpdate](docs/SurveyUpdate.md)
 - [WealthsimpleApi.Tag](docs/Tag.md)
 - [WealthsimpleApi.Tags](docs/Tags.md)
 - [WealthsimpleApi.TargetPortfolio](docs/TargetPortfolio.md)
 - [WealthsimpleApi.TargetPortfolioId](docs/TargetPortfolioId.md)
 - [WealthsimpleApi.TaxDetail](docs/TaxDetail.md)
 - [WealthsimpleApi.TaxDetailId](docs/TaxDetailId.md)
 - [WealthsimpleApi.TaxIdentification](docs/TaxIdentification.md)
 - [WealthsimpleApi.TaxIdentificationNumbers](docs/TaxIdentificationNumbers.md)
 - [WealthsimpleApi.Transaction](docs/Transaction.md)
 - [WealthsimpleApi.TransactionId](docs/TransactionId.md)
 - [WealthsimpleApi.TransactionType](docs/TransactionType.md)
 - [WealthsimpleApi.TransitNumber](docs/TransitNumber.md)
 - [WealthsimpleApi.TrustId](docs/TrustId.md)
 - [WealthsimpleApi.TrustName](docs/TrustName.md)
 - [WealthsimpleApi.UpdatedAt](docs/UpdatedAt.md)
 - [WealthsimpleApi.UserBase](docs/UserBase.md)
 - [WealthsimpleApi.UserId](docs/UserId.md)
 - [WealthsimpleApi.VerificationBase](docs/VerificationBase.md)
 - [WealthsimpleApi.VerificationId](docs/VerificationId.md)
 - [WealthsimpleApi.VerificationMethod](docs/VerificationMethod.md)
 - [WealthsimpleApi.VerificationStatus](docs/VerificationStatus.md)
 - [WealthsimpleApi.WithdrawalReason](docs/WithdrawalReason.md)
 - [WealthsimpleApi.WithdrawalType](docs/WithdrawalType.md)
 - [WealthsimpleApi.Account](docs/Account.md)
 - [WealthsimpleApi.AccountCreatedResponse](docs/AccountCreatedResponse.md)
 - [WealthsimpleApi.AccountInput](docs/AccountInput.md)
 - [WealthsimpleApi.AccountTransferWithEvents](docs/AccountTransferWithEvents.md)
 - [WealthsimpleApi.AccountTransfersPaginated](docs/AccountTransfersPaginated.md)
 - [WealthsimpleApi.AccountValue](docs/AccountValue.md)
 - [WealthsimpleApi.AccountsPaginated](docs/AccountsPaginated.md)
 - [WealthsimpleApi.AdjustedBookValue](docs/AdjustedBookValue.md)
 - [WealthsimpleApi.AnswerOption](docs/AnswerOption.md)
 - [WealthsimpleApi.AssessmentPaginated](docs/AssessmentPaginated.md)
 - [WealthsimpleApi.AveragePrice](docs/AveragePrice.md)
 - [WealthsimpleApi.BankAccountInput](docs/BankAccountInput.md)
 - [WealthsimpleApi.BankAccountWithFundableAccounts](docs/BankAccountWithFundableAccounts.md)
 - [WealthsimpleApi.BankAccountsPaginated](docs/BankAccountsPaginated.md)
 - [WealthsimpleApi.BookValue](docs/BookValue.md)
 - [WealthsimpleApi.CompletedAt](docs/CompletedAt.md)
 - [WealthsimpleApi.ContributionValue](docs/ContributionValue.md)
 - [WealthsimpleApi.CorporationBase](docs/CorporationBase.md)
 - [WealthsimpleApi.CorporationsPaginated](docs/CorporationsPaginated.md)
 - [WealthsimpleApi.DailyValuesPaginated](docs/DailyValuesPaginated.md)
 - [WealthsimpleApi.DebitAccount](docs/DebitAccount.md)
 - [WealthsimpleApi.DebitBankAccountsPaginated](docs/DebitBankAccountsPaginated.md)
 - [WealthsimpleApi.Deposit](docs/Deposit.md)
 - [WealthsimpleApi.DepositRequest](docs/DepositRequest.md)
 - [WealthsimpleApi.Deposits](docs/Deposits.md)
 - [WealthsimpleApi.DepositsPaginated](docs/DepositsPaginated.md)
 - [WealthsimpleApi.DividendsEarned](docs/DividendsEarned.md)
 - [WealthsimpleApi.Document](docs/Document.md)
 - [WealthsimpleApi.DocumentInput](docs/DocumentInput.md)
 - [WealthsimpleApi.DocumentsPaginated](docs/DocumentsPaginated.md)
 - [WealthsimpleApi.EquityValue](docs/EquityValue.md)
 - [WealthsimpleApi.FeesPaid](docs/FeesPaid.md)
 - [WealthsimpleApi.GrossPosition](docs/GrossPosition.md)
 - [WealthsimpleApi.MarketPrice](docs/MarketPrice.md)
 - [WealthsimpleApi.MarketValue](docs/MarketValue.md)
 - [WealthsimpleApi.NetCash](docs/NetCash.md)
 - [WealthsimpleApi.NetEarnings](docs/NetEarnings.md)
 - [WealthsimpleApi.NetLiquidation](docs/NetLiquidation.md)
 - [WealthsimpleApi.NetLiquidationValue](docs/NetLiquidationValue.md)
 - [WealthsimpleApi.PeoplePaginated](docs/PeoplePaginated.md)
 - [WealthsimpleApi.PersonBase](docs/PersonBase.md)
 - [WealthsimpleApi.PositionMarketPrice](docs/PositionMarketPrice.md)
 - [WealthsimpleApi.PositionMarketValue](docs/PositionMarketValue.md)
 - [WealthsimpleApi.PositionsPaginated](docs/PositionsPaginated.md)
 - [WealthsimpleApi.Survey](docs/Survey.md)
 - [WealthsimpleApi.SurveyInput](docs/SurveyInput.md)
 - [WealthsimpleApi.SurveysPaginated](docs/SurveysPaginated.md)
 - [WealthsimpleApi.TargetPortfolioAllocation](docs/TargetPortfolioAllocation.md)
 - [WealthsimpleApi.TotalDeposits](docs/TotalDeposits.md)
 - [WealthsimpleApi.TotalDividends](docs/TotalDividends.md)
 - [WealthsimpleApi.TotalWithdrawals](docs/TotalWithdrawals.md)
 - [WealthsimpleApi.TransactionsPaginated](docs/TransactionsPaginated.md)
 - [WealthsimpleApi.TrustBase](docs/TrustBase.md)
 - [WealthsimpleApi.TrustsPaginated](docs/TrustsPaginated.md)
 - [WealthsimpleApi.User](docs/User.md)
 - [WealthsimpleApi.UserInput](docs/UserInput.md)
 - [WealthsimpleApi.UserPaginated](docs/UserPaginated.md)
 - [WealthsimpleApi.Verification](docs/Verification.md)
 - [WealthsimpleApi.VerificationInput](docs/VerificationInput.md)
 - [WealthsimpleApi.Withdrawal](docs/Withdrawal.md)
 - [WealthsimpleApi.WithdrawalRequest](docs/WithdrawalRequest.md)
 - [WealthsimpleApi.Withdrawals](docs/Withdrawals.md)
 - [WealthsimpleApi.WithdrawalsPaginated](docs/WithdrawalsPaginated.md)
 - [WealthsimpleApi.Corporation](docs/Corporation.md)
 - [WealthsimpleApi.CorporationInput](docs/CorporationInput.md)
 - [WealthsimpleApi.CorporationUpdate](docs/CorporationUpdate.md)
 - [WealthsimpleApi.DepositWithEvents](docs/DepositWithEvents.md)
 - [WealthsimpleApi.Person](docs/Person.md)
 - [WealthsimpleApi.PersonInput](docs/PersonInput.md)
 - [WealthsimpleApi.PersonUpdate](docs/PersonUpdate.md)
 - [WealthsimpleApi.Trust](docs/Trust.md)
 - [WealthsimpleApi.TrustInput](docs/TrustInput.md)
 - [WealthsimpleApi.TrustUpdate](docs/TrustUpdate.md)


## Documentation for Authorization


### Bearer

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

