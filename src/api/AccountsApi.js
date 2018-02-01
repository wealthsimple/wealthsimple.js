
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Account', 'model/AccountCreatedResponse', 'model/AccountInput', 'model/AccountsPaginated', 'model/Error'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Account'), require('../model/AccountCreatedResponse'), require('../model/AccountInput'), require('../model/AccountsPaginated'), require('../model/Error'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.AccountsApi = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.Account, root.Wealthsimple.AccountCreatedResponse, root.Wealthsimple.AccountInput, root.Wealthsimple.AccountsPaginated, root.Wealthsimple.Error);
  }
}(this, function(ApiClient, Account, AccountCreatedResponse, AccountInput, AccountsPaginated, Error) {
  'use strict';

  /**
   * Accounts service.
   * @module api/AccountsApi
   * @version 1.0
   */

  /**
   * Constructs a new AccountsApi. 
   * @alias module:api/AccountsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createAccount operation.
     * @callback module:api/AccountsApi~createAccountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccountCreatedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Open a new account for a client
     * @param {module:model/AccountInput} account 
     * @param {module:api/AccountsApi~createAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccountCreatedResponse}
     */
    this.createAccount = function(account, callback) {
      var postBody = account;

      // verify the required parameter 'account' is set
      if (account === undefined || account === null) {
        throw new Error("Missing the required parameter 'account' when calling createAccount");
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
      var returnType = AccountCreatedResponse;

      return this.apiClient.callApi(
        '/accounts', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAccount operation.
     * @callback module:api/AccountsApi~getAccountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Account} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns an Account by &#x60;account_id&#x60;
     * @param {String} accountId The &#x60;id&#x60; of the Account entity.
     * @param {module:api/AccountsApi~getAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Account}
     */
    this.getAccount = function(accountId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getAccount");
      }


      var pathParams = {
        'account_id': accountId
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
      var returnType = Account;

      return this.apiClient.callApi(
        '/accounts/{account_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listAccounts operation.
     * @callback module:api/AccountsApi~listAccountsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccountsPaginated} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     *  As the number of Accounts can be potentially prohibitively large, the results are paginated. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.clientId The &#x60;id&#x60; of the Client entity. A &#x60;client_id&#x60; can be a &#x60;person_id&#x60;, &#x60;trust_id&#x60; or &#x60;corporation_id&#x60;
     * @param {Number} opts.offset The zero-based index of the first result to return (default to 0)
     * @param {Number} opts.limit The maximum number of results to return per page. (default to 25)
     * @param {String} opts.sortBy Attribute to sort results by.
     * @param {module:model/String} opts.sortOrder The sort direction of the results. (default to desc)
     * @param {Array.<module:model/String>} opts.accountTypes Limit the results to certain account types
     * @param {module:api/AccountsApi~listAccountsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccountsPaginated}
     */
    this.listAccounts = function(opts, callback) {
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
        'account_types': {
          value: opts['accountTypes'],
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
      var returnType = AccountsPaginated;

      return this.apiClient.callApi(
        '/accounts', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
