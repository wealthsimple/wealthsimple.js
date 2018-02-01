/**
 * Wealthsimple API
 * # Introduction  Welcome to the Wealthsimple API reference! Wealthsimple API provides the basic building blocks for creating and funding investment accounts, as well as retrieving account values and transaction data.  The API is built around REST conventions and is designed to have predictable, resource-oriented endpoints. Keep reading below for more information on each specific call.  *Note:*  - *The API is currently in the **Request For Comments (RFC)** phase and is not yet ready for public consumption. Many endpoints have not yet been implemented and will return 501 Not Yet Implemented status code.* - *The API is currently focused on **read-only operations**. We will eventually expand it to allow for creating/updating/deleting resources.*  # API hosts  ``` https://api.sandbox.wealthsimple.com (Sandbox) https://api.production.wealthsimple.com (Production) ```  The Sandbox environment is unrestricted and should be used for all testing. When you’re getting ready to launch into Production, please request Production API access by reaching out to <a href=\"mailto:api-support@wealthsimple.com\">API support</a>.  # Authentication  All resources within the API require authentication via standard OAuth 2 grant flows.  The Wealthsimple API supports `client_credentials`, `authorization_code`, and `password` grant types. Using `password` *is strongly discouraged* and should be reserved for special circumstances such as creating a new user & immediately authenticating as them.  More information about OAuth 2 grant flows can be found in [Section 4 of the OAuth 2 RFC](https://tools.ietf.org/html/rfc6749#section-4).  ## Userless/Application-only Authentication  For all non-resource owner specific endpoints, where you do not need to act on user's behalf, you can choose to authenticate only using your application credentials.  ### Request an access token  ```json POST https://api.sandbox.wealthsimple.com/v1/oauth/token {   \"client_id\": \"YOUR-CLIENT-ID\",   \"client_secret\": \"YOUR-CLIENT-SECRET\",   \"grant_type\": \"client_credentials\" } ``` We also support client application authentication via the Authorization header. The format is HTTP Basic authentication, with the value being a base64 encoding of YOUR-CLIENT-ID:YOUR-CLIENT-SECRET.  ``` POST https://api.sandbox.wealthsimple.com/v1/oauth/token Authorization: Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW Content-Type: application/x-www-form-urlencoded ```  ### Example response  ```json {   \"access_token\": \"de6780bc506a0446309bd9362820ba8aed28aa506c71eedbe1c5c4f9dd350e54\",   \"token_type\": \"bearer\",   \"expires_in\": 7200,   \"created_at\": 1500123132 } ```   ### Using the token You can now access protected, anonymous/userless level API endpoints by passing the token in the headers like so:  ```json Headers: Authroization: Bearer ACCESS-TOKEN  ```  ## Authenticating as a User in your Application (Resource Owner)  For any action where you need to act on a user's behalf you can go through the `authorization_code` or `password` grant flow to obtain an access token associated with a resource owner. Most of our endpoints are designed to be called by a user.  While the password grant flow is supported, it is recommended you authenticate using `authorization_code`. If you must use password **we strongly discourage you storing the user's password, even if encrypted.** There are severe security implications by doing so.  ### Access Token via User Authorization  #### Obtain User Authorization Approval  Your OAuth application must redirect the user to the authorization endpoint. It will inform the user your application wishes to gain access to their account. If they approve access, the user will be redirected to your application's `YOUR-CALLBACK-URI` with the authorization code.  The `YOUR-CALLBACK-URI` for your application is defined ahead of time when your credentials were issued and the request's `redirect_uri` must match what's been configured.  *Note: If a user has previously authorized your application, the prompt will be skipped and the user is redirected with the code automatically.*  Below is the URL your application must direct the user to:  ``` GET https://staging.wealthsimple.com/authorize?client_id=YOUR-CLIENT-ID     &redirect_uri=YOUR-CALLBACK-URI     &state=YOUR-CSRF-TOKEN     &response_type=code ```  *Note: For production, the URL is `https://my.wealthsimple.com/authorize`*  The `state` parameter is optional but recommended to guard against CSRF attacks. It is a random value chosen by your application to maintain state between the request and callback. It ensures the callback the application receives is the one initiated by your request.  ##### Example Response  User is presented our authorization page for approval. Since we use a single-page application, it will redirect to where the app lives:  ``` HTTP/1.1 302 Found Location: https://staging.wealthsimple.com/app/authorize?client_id=YOUR-CLIENT-ID     &redirect_uri=YOUR-CALLBACK-URI     &state=YOUR-CSRF-TOKEN     &response_type=code ```  If they have an active Wealthsimple session, they'll be displayed the prompt otherwise they'll be presented with our login page first.  Once they approve access they will be redirected back to your app:  ``` HTTP/1.1 302 Found Location: YOUR-CALLBACK-URI?code=6309bd71eedaa59362820babc506a0448aed28678006cdebe1c5c4f9dd350e54&state=YOUR-CSRF-TOKEN ```  ##### Example Response (Previously Approved)  User is immediately redirected back to your app, no prompt required, no single-page application loading.  ``` HTTP/1.1 302 Found Location: YOUR-CALLBACK-URI?code=6309bd71eedaa59362820babc506a0448aed28678006cdebe1c5c4f9dd350e54&state=YOUR-CSRF-TOKEN ```  ##### Example Response (User Denies Access)  The API will still redirect to your application, but with `error` set. You can use this to gracefully inform the user why you need authorization:  ``` HTTP/1.1 302 Found Location: YOUR-CALLBACK-URI?error=access_denied&error_description=The+resource+owner+or+authorization+server+denied+the+request.&state=1234 ```  #### Exchange Authorization Code for Access Token  The application, upon receiving the authorization code from the callback in the authorization step, should post to the token endpoint to exchange it for a long-lived access token:  ``` POST https://api.sandbox.wealthsimple.com/v1/oauth/token {   \"grant_type\": \"authorization_code\",   \"client_id\": \"YOUR-CLIENT-ID\",   \"client_secret\": \"YOUR-CLIENT-SECRET\",   \"redirect_uri\": \" YOUR-CALLBACK-URI\",   \"code\": \"6309bd71eedaa59362820babc506a0448aed28678006cdebe1c5c4f9dd350e54\" } ```  The application must authenticate itself with its client secret and pass the `code` parameter received prior.  ##### Example response  ```json {   \"access_token\": \"de6780bc506a0446309bd9362820ba8aed28aa506c71eedbe1c5c4f9dd350e54\",   \"token_type\": \"bearer\",   \"expires_in\": 7200,   \"created_at\": 1500123132 } ```  ### Access Token via User Credentials  ```json POST https://api.sandbox.wealthsimple.com/v1/oauth/token {   \"grant_type\": \"password\",   \"client_id\": \"YOUR-CLIENT-ID\",   \"client_secret\": \"YOUR-CLIENT-SECRET\",   \"username\": \"USERNAME-OF-USER\",   \"password\": \"PASSWORD-OF-USER\" } ```  Or, alternatively you can use HTTP Basic to authenticate your application client as described in the application authentication section:  ```json POST https://api.sandbox.wealthsimple.com/v1/oauth/token Authorization: Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW {   \"grant_type\": \"password\",   \"username\": \"USERNAME-OF-USER\",   \"password\": \"PASSWORD-OF-USER\" } ``` We expect you identify your client application during the password grant flow so we properly enforce which users can authenticate through your application.  #### Example response  ```json {   \"access_token\": \"de6780bc506a0446309bd9362820ba8aed28aa506c71eedbe1c5c4f9dd350e54\",   \"token_type\": \"bearer\",   \"expires_in\": 7200,   \"created_at\": 1500123132 } ```  #### Users with Two-Factor Authentication  Some users may have enabled [Two-Factor Authentication](https://en.wikipedia.org/wiki/Multi-factor_authentication) (2FA) for additional security. We currently support two methods of 2FA: mobile SMS codes and mobile authenticator apps like [Google Authenticator](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en). When authenticating with `password` for a user with 2FA enabled, the endpoint will fail with a *401 Unauthorized* even if you provided the correct username & password. At first glance this appears indistinguishable from a response when an invalid username or password is provided.  In order to maintain OAuth 2 spec, we set the `X-Wealthsimple-OTP` response header so your application can determine if a 2FA code (OTP) is required or if it's just bad credentials. In this scenario your application should prompt the user for their OTP code and replay your original `password` request with the header `X-Wealthsimple-OTP` set to the value of the OTP given by the user.  The structure of the response `X-Wealthsimple-OTP` header is semicolon delimited and is comprised of 3 parts: the message, the 2FA method the user is using, and the last 4 digits of their phone (if applicable). The method can be either `app` or `sms` currently, and you can use this to gracefully tell the user what do to get their OTP code:  ``` X-Wealthsimple-OTP: MESSAGE; method=METHOD; digits=DIGITS ```  * `MESSAGE` will either be `required` if you don't send the OTP code or `invalid` if the OTP provided is bad. * `METHOD` currently will either be `app` for Google Authenticator or `sms` if they're using a mobile device * `DIGITS` will be the user's last 4 digits of their 2FA phone number on file. This field may not be present if user is using `app`.  *__Note:__ If the user is using `sms`, they will automatically receive a text message from us every time your application attempts to authenticate without providing an OTP code.*  #### Authentication Example with Two-Factor Authentication  Request:  ```json POST https://api.sandbox.wealthsimple.com/v1/oauth/token Authorization: Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW {   \"grant_type\": \"password\",   \"username\": \"USERNAME-OF-USER\",   \"password\": \"PASSWORD-OF-USER\" } ```  Response:  ``` HTTP/1.0 401 Unauthorized X-Wealthsimple-OTP: required; method=sms; digits=7375 {     \"error\": \"invalid_grant\",     \"error_description\": \"The provided authorization grant is invalid, expired, revoked, does not match the redirection URI used in the authorization request, or was issued to another client.\" } ```  At this point the user will have received an OTP code on their mobile device which they provide to the application.  Subsequent Request:  ```json POST https://api.sandbox.wealthsimple.com/v1/oauth/token Authorization: Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW X-Wealthsimple-OTP: 682932 {   \"grant_type\": \"password\",   \"username\": \"USERNAME-OF-USER\",   \"password\": \"PASSWORD-OF-USER\" } ```  Subsequent Response:  ```json {   \"access_token\": \"de6780bc506a0446309bd9362820ba8aed28aa506c71eedbe1c5c4f9dd350e54\",   \"token_type\": \"bearer\",   \"expires_in\": 7200,   \"created_at\": 1500123132 } ```  ### Using the Access Token  You can now access protected, \"user-centric\" API endpoints by passing the token in the Authorization header:  ``` Authorization: Bearer ACCESS-TOKEN ```  ### Viewing your Authentication Info  We have an endpoint you can call should your application need more information about the authentication its been granted. This can especially be the case for when authenticated as a resource owner, as they have a unique identifier you can use.  ``` GET https://api.sandbox.wealthsimple.com/v1/oauth/token/info Authorization: Bearer ACCESS-TOKEN ```  If you authenticated as your application, and not as a user, then `resource_owner_id` will be set to null.  #### Example response  ```json {     \"token\": {         \"id\": 4655,         \"resource_owner_id\": \"user-n5vhwz7ti9q\",         \"application_id\": 24,         \"token\": \"de6780bc506a0446309bd9362820ba8aed28aa506c71eedbe1c5c4f9dd350e54\",         \"refresh_token\": null,         \"expires_in\": 7200,         \"revoked_at\": null,         \"created_at\": \"2017-08-17T21:33:51.884Z\",         \"scopes\": \"\",         \"previous_refresh_token\": \"\",         \"application_family_id\": \"dunder-mifflin\"     } } ```  # Pagination  Many of the `GET` APIs that return a collection of results are paginated because the size of result-set can be prohibitively large.  These APIs take a `first_result` and `max_results` as query parameters.  The `first_result` is an index offset and the `max_results` determines the upper limit on how many results will be returned per call.  If the API has additional query parameters it is important to resend them on subsequent page requests otherwise the result set will differ.  That being said, some queries are inherently unstable.  For example, if you query for Clients and the sort order is descending, if the `creation_date` parameter is not fixed as new Clients are added to the system, it will push older clients into subsequent pages.  # Errors  Wealthsimple uses conventional HTTP response codes to indicate the success or failure of an API request. In general, codes in the 2xx range indicate success, codes in the 4xx range indicate an error that failed given the information provided (e.g., a required parameter was omitted, missing additional information, etc.), and codes in the 5xx range indicate an error with Wealthsimple's servers.  Not all errors map cleanly onto HTTP response codes, however. When a request is valid but does not complete successfully, we return a 402 error code and will include a code in the error for you to understand why.  Refer to the list of codes in the documentation. 
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BankAccountInput', 'model/BankAccountWithFundableAccounts', 'model/BankAccountsPaginated', 'model/Deposit', 'model/DepositRequest', 'model/DepositWithEvents', 'model/DepositsPaginated', 'model/Error', 'model/Withdrawal', 'model/WithdrawalRequest', 'model/WithdrawalsPaginated'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BankAccountInput'), require('../model/BankAccountWithFundableAccounts'), require('../model/BankAccountsPaginated'), require('../model/Deposit'), require('../model/DepositRequest'), require('../model/DepositWithEvents'), require('../model/DepositsPaginated'), require('../model/Error'), require('../model/Withdrawal'), require('../model/WithdrawalRequest'), require('../model/WithdrawalsPaginated'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.FundingApi = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.BankAccountInput, root.Wealthsimple.BankAccountWithFundableAccounts, root.Wealthsimple.BankAccountsPaginated, root.Wealthsimple.Deposit, root.Wealthsimple.DepositRequest, root.Wealthsimple.DepositWithEvents, root.Wealthsimple.DepositsPaginated, root.Wealthsimple.Error, root.Wealthsimple.Withdrawal, root.Wealthsimple.WithdrawalRequest, root.Wealthsimple.WithdrawalsPaginated);
  }
}(this, function(ApiClient, BankAccountInput, BankAccountWithFundableAccounts, BankAccountsPaginated, Deposit, DepositRequest, DepositWithEvents, DepositsPaginated, Error, Withdrawal, WithdrawalRequest, WithdrawalsPaginated) {
  'use strict';

  /**
   * Funding service.
   * @module api/FundingApi
   * @version 1.0
   */

  /**
   * Constructs a new FundingApi. 
   * @alias module:api/FundingApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createABankAccount operation.
     * @callback module:api/FundingApi~createABankAccountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BankAccountWithFundableAccounts} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new Bank Account in the system.  Adding a **Bank Account** and getting it to become usable in funding operations (deposits/withdrawals) is a multi-step process.  Generally, the steps are as follows:  1. &#x60;[POST] /bank_accounts&#x60; 2. &#x60;[POST] /documents/&#x60; 3. &#x60;[POST] /bank_accounts/{bank_account_id}/verifications&#x60;  After step (1) the Bank Account is not yet usable. At step (2), a Document is uploaded that proves that the client has **ownership and control** over the Bank Account. At step (3), the Bank Account is updated with a Verification object referencing the uploaded Document. As long as the Bank Account has at least one Verification that is &#x60;accepted&#x60;, it will be usable for funding operations. 
     * @param {module:model/BankAccountInput} bankAccount 
     * @param {module:api/FundingApi~createABankAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BankAccountWithFundableAccounts}
     */
    this.createABankAccount = function(bankAccount, callback) {
      var postBody = bankAccount;

      // verify the required parameter 'bankAccount' is set
      if (bankAccount === undefined || bankAccount === null) {
        throw new Error("Missing the required parameter 'bankAccount' when calling createABankAccount");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = BankAccountWithFundableAccounts;

      return this.apiClient.callApi(
        '/bank_accounts', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createDeposit operation.
     * @callback module:api/FundingApi~createDepositCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Deposit} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     *  Initiates an electronic funds transfer to deposit funds to an Account from a Bank Account 
     * @param {module:model/DepositRequest} deposit 
     * @param {module:api/FundingApi~createDepositCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Deposit}
     */
    this.createDeposit = function(deposit, callback) {
      var postBody = deposit;

      // verify the required parameter 'deposit' is set
      if (deposit === undefined || deposit === null) {
        throw new Error("Missing the required parameter 'deposit' when calling createDeposit");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Deposit;

      return this.apiClient.callApi(
        '/deposits', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createWithdrawal operation.
     * @callback module:api/FundingApi~createWithdrawalCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Withdrawal} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     *  Initiates a request to withdraw funds from an Account to a Bank Account. Withdrawing funds may require that we sell off positions to generate the necessary funds to complete the withdrawal. 
     * @param {module:model/WithdrawalRequest} withdrawal 
     * @param {module:api/FundingApi~createWithdrawalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Withdrawal}
     */
    this.createWithdrawal = function(withdrawal, callback) {
      var postBody = withdrawal;

      // verify the required parameter 'withdrawal' is set
      if (withdrawal === undefined || withdrawal === null) {
        throw new Error("Missing the required parameter 'withdrawal' when calling createWithdrawal");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Withdrawal;

      return this.apiClient.callApi(
        '/withdrawals', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBankAccount operation.
     * @callback module:api/FundingApi~getBankAccountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BankAccountWithFundableAccounts} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     *  Returns a single Bank Account. 
     * @param {String} bankAccountId The &#x60;id&#x60; of the Bank Account entity.
     * @param {module:api/FundingApi~getBankAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BankAccountWithFundableAccounts}
     */
    this.getBankAccount = function(bankAccountId, callback) {
      var postBody = null;

      // verify the required parameter 'bankAccountId' is set
      if (bankAccountId === undefined || bankAccountId === null) {
        throw new Error("Missing the required parameter 'bankAccountId' when calling getBankAccount");
      }


      var pathParams = {
        'bank_account_id': bankAccountId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = BankAccountWithFundableAccounts;

      return this.apiClient.callApi(
        '/bank_accounts/{bank_account_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDeposit operation.
     * @callback module:api/FundingApi~getDepositCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DepositWithEvents} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a Deposit entity.
     * @param {String} fundsTransferId The &#x60;id&#x60; of the Funds Transfer entity.
     * @param {module:api/FundingApi~getDepositCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DepositWithEvents}
     */
    this.getDeposit = function(fundsTransferId, callback) {
      var postBody = null;

      // verify the required parameter 'fundsTransferId' is set
      if (fundsTransferId === undefined || fundsTransferId === null) {
        throw new Error("Missing the required parameter 'fundsTransferId' when calling getDeposit");
      }


      var pathParams = {
        'funds_transfer_id': fundsTransferId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = DepositWithEvents;

      return this.apiClient.callApi(
        '/deposits/{deposit_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWithdrawal operation.
     * @callback module:api/FundingApi~getWithdrawalCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Withdrawal} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a withdrawal
     * @param {String} fundsTransferId The &#x60;id&#x60; of the Funds Transfer entity.
     * @param {module:api/FundingApi~getWithdrawalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Withdrawal}
     */
    this.getWithdrawal = function(fundsTransferId, callback) {
      var postBody = null;

      // verify the required parameter 'fundsTransferId' is set
      if (fundsTransferId === undefined || fundsTransferId === null) {
        throw new Error("Missing the required parameter 'fundsTransferId' when calling getWithdrawal");
      }


      var pathParams = {
        'funds_transfer_id': fundsTransferId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Withdrawal;

      return this.apiClient.callApi(
        '/withdrawals/{withdrawal_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listBankAccounts operation.
     * @callback module:api/FundingApi~listBankAccountsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BankAccountsPaginated} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     *  Returns Bank accounts. As the number of Bank Accounts in the system can be potentially prohibitively large, the results are paginated. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.clientId The &#x60;id&#x60; of the Client entity. A &#x60;client_id&#x60; can be a &#x60;person_id&#x60;, &#x60;trust_id&#x60; or &#x60;corporation_id&#x60;
     * @param {Number} opts.offset The zero-based index of the first result to return (default to 0)
     * @param {Number} opts.limit The maximum number of results to return per page. (default to 25)
     * @param {String} opts.sortBy Attribute to sort results by.
     * @param {module:model/String} opts.sortOrder The sort direction of the results. (default to desc)
     * @param {Array.<String>} opts.externalIds Limits the results only to those with a &#x60;external_id&#x60; in the list.
     * @param {module:api/FundingApi~listBankAccountsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BankAccountsPaginated}
     */
    this.listBankAccounts = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'client_id': opts['clientId'],
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort_by': opts['sortBy'],
        'sort_order': opts['sortOrder'],
      };
      var collectionQueryParams = {
        'external_ids': {
          value: opts['externalIds'],
          collectionFormat: 'csv'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = BankAccountsPaginated;

      return this.apiClient.callApi(
        '/bank_accounts', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listDeposits operation.
     * @callback module:api/FundingApi~listDepositsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DepositsPaginated} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return all deposits. As the number of deposits can be potentially prohibitively large, the results are paginated. By default, the API will return the 25 latest Funds Transfers made in the last 2 weeks.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset The zero-based index of the first result to return (default to 0)
     * @param {Number} opts.limit The maximum number of results to return per page. (default to 25)
     * @param {String} opts.sortBy Attribute to sort results by.
     * @param {module:model/String} opts.sortOrder The sort direction of the results. (default to desc)
     * @param {String} opts.accountId The &#x60;id&#x60; of the Account entity.
     * @param {String} opts.startDate Limits the results returned to only those with a date equal or after this date. (default to 30 days ago)
     * @param {String} opts.endDate Limits the results returned to only those with a date not greater than this date. (default to today)
     * @param {module:api/FundingApi~listDepositsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DepositsPaginated}
     */
    this.listDeposits = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort_by': opts['sortBy'],
        'sort_order': opts['sortOrder'],
        'account_id': opts['accountId'],
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = DepositsPaginated;

      return this.apiClient.callApi(
        '/deposits', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listWithdrawals operation.
     * @callback module:api/FundingApi~listWithdrawalsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WithdrawalsPaginated} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all withdrawals
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset The zero-based index of the first result to return (default to 0)
     * @param {Number} opts.limit The maximum number of results to return per page. (default to 25)
     * @param {String} opts.sortBy Attribute to sort results by.
     * @param {module:model/String} opts.sortOrder The sort direction of the results. (default to desc)
     * @param {String} opts.accountId The &#x60;id&#x60; of the Account entity.
     * @param {String} opts.startDate Limits the results returned to only those with a date equal or after this date. (default to 30 days ago)
     * @param {String} opts.endDate Limits the results returned to only those with a date not greater than this date. (default to today)
     * @param {module:api/FundingApi~listWithdrawalsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WithdrawalsPaginated}
     */
    this.listWithdrawals = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort_by': opts['sortBy'],
        'sort_order': opts['sortOrder'],
        'account_id': opts['accountId'],
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = WithdrawalsPaginated;

      return this.apiClient.callApi(
        '/withdrawals', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
