
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Error', 'model/TransactionsPaginated'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/TransactionsPaginated'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.TransactionsApi = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.Error, root.Wealthsimple.TransactionsPaginated);
  }
}(this, function(ApiClient, Error, TransactionsPaginated) {
  'use strict';

  /**
   * Transactions service.
   * @module api/TransactionsApi
   * @version 1.0
   */

  /**
   * Constructs a new TransactionsApi. 
   * @alias module:api/TransactionsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the listTransactions operation.
     * @callback module:api/TransactionsApi~listTransactionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TransactionsPaginated} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     *  Lists all Transactions. The number of Transactions can be potentially prohibitively large, the results are paginated.  By default, the API will return the 250 latest transactions in the last 30 days. 
     * @param {String} accountId The &#x60;id&#x60; of the Account entity.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset The zero-based index of the first result to return (default to 0)
     * @param {Number} opts.limit The maximum number of results to return per page. (default to 25)
     * @param {String} opts.sortBy Attribute to sort results by.
     * @param {module:model/String} opts.sortOrder The sort direction of the results. (default to desc)
     * @param {String} opts.effectiveDateStart Limits the results returned to only those with an &#x60;effective_date&#x60; equal or after this date. (default to 30 days ago from today)
     * @param {String} opts.effectiveDateEnd Limits the results returned to only those with an &#x60;effective_date&#x60; not greater than this date. (default to today)
     * @param {String} opts.processDateStart Limits the results returned to only those with an &#x60;process_date&#x60; equal or after this date. (default to 30 days ago from today)
     * @param {String} opts.processDateEnd Limits the results returned to only those with an &#x60;process_date&#x60; not greater than this date. (default to today)
     * @param {module:api/TransactionsApi~listTransactionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TransactionsPaginated}
     */
    this.listTransactions = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling listTransactions");
      }


      var pathParams = {
      };
      var queryParams = {
        'account_id': accountId,
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort_by': opts['sortBy'],
        'sort_order': opts['sortOrder'],
        'effective_date_start': opts['effectiveDateStart'],
        'effective_date_end': opts['effectiveDateEnd'],
        'process_date_start': opts['processDateStart'],
        'process_date_end': opts['processDateEnd'],
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
      var returnType = TransactionsPaginated;

      return this.apiClient.callApi(
        '/transactions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
