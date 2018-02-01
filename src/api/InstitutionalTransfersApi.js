
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AccountTransferWithEvents', 'model/AccountTransfersPaginated', 'model/Error', 'model/FinancialInstitutions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AccountTransferWithEvents'), require('../model/AccountTransfersPaginated'), require('../model/Error'), require('../model/FinancialInstitutions'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.InstitutionalTransfersApi = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.AccountTransferWithEvents, root.Wealthsimple.AccountTransfersPaginated, root.Wealthsimple.Error, root.Wealthsimple.FinancialInstitutions);
  }
}(this, function(ApiClient, AccountTransferWithEvents, AccountTransfersPaginated, Error, FinancialInstitutions) {
  'use strict';

  /**
   * InstitutionalTransfers service.
   * @module api/InstitutionalTransfersApi
   * @version 1.0
   */

  /**
   * Constructs a new InstitutionalTransfersApi. 
   * @alias module:api/InstitutionalTransfersApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getAccountTransfer operation.
     * @callback module:api/InstitutionalTransfersApi~getAccountTransferCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccountTransferWithEvents} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     *  Returns a single funds transfer. This API will also return all the associated events related to the Account Transfer. 
     * @param {String} accountTransferId ID of account transfer to fetch
     * @param {module:api/InstitutionalTransfersApi~getAccountTransferCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccountTransferWithEvents}
     */
    this.getAccountTransfer = function(accountTransferId, callback) {
      var postBody = null;

      // verify the required parameter 'accountTransferId' is set
      if (accountTransferId === undefined || accountTransferId === null) {
        throw new Error("Missing the required parameter 'accountTransferId' when calling getAccountTransfer");
      }


      var pathParams = {
        'account_transfer_id': accountTransferId
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
      var returnType = AccountTransferWithEvents;

      return this.apiClient.callApi(
        '/institutional_transfers/{institutional_transfer_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listAccountTransfers operation.
     * @callback module:api/InstitutionalTransfersApi~listAccountTransfersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AccountTransfersPaginated>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     *  Lists Account (Institutional) Transfers. As the number of Accounts Transfers for your application family can potentially be prohibitively large, the results are paginated.  By default, the API will return the 50 latest Account Transfers made in the last 30 days.
     * @param {Object} opts Optional parameters
     * @param {String} opts.clientId The &#x60;id&#x60; of the Client entity. A &#x60;client_id&#x60; can be a &#x60;person_id&#x60;, &#x60;trust_id&#x60; or &#x60;corporation_id&#x60;
     * @param {String} opts.accountId The &#x60;id&#x60; of the Account entity.
     * @param {Number} opts.offset The zero-based index of the first result to return (default to 0)
     * @param {Number} opts.limit The maximum number of results to return per page. (default to 25)
     * @param {String} opts.sortBy Attribute to sort results by.
     * @param {module:model/String} opts.sortOrder The sort direction of the results. (default to desc)
     * @param {String} opts.startDate Limits the results returned to only those with a date equal or after this date. (default to 30 days ago)
     * @param {String} opts.endDate Limits the results returned to only those with a date not greater than this date. (default to today)
     * @param {module:api/InstitutionalTransfersApi~listAccountTransfersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/AccountTransfersPaginated>}
     */
    this.listAccountTransfers = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'client_id': opts['clientId'],
        'account_id': opts['accountId'],
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort_by': opts['sortBy'],
        'sort_order': opts['sortOrder'],
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
      var returnType = [AccountTransfersPaginated];

      return this.apiClient.callApi(
        '/institutional_transfers', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listFinancialInstitutions operation.
     * @callback module:api/InstitutionalTransfersApi~listFinancialInstitutionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FinancialInstitutions} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     *  Returns Financial Institution Information. These financial instituation are need to be referenced when creating Bank Accounts or Account Transfers 
     * @param {module:api/InstitutionalTransfersApi~listFinancialInstitutionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FinancialInstitutions}
     */
    this.listFinancialInstitutions = function(callback) {
      var postBody = null;


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
      var returnType = FinancialInstitutions;

      return this.apiClient.callApi(
        '/financial_institutions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
