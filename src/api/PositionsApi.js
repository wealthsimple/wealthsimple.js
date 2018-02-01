
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Error', 'model/PositionsPaginated'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/PositionsPaginated'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.PositionsApi = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.Error, root.Wealthsimple.PositionsPaginated);
  }
}(this, function(ApiClient, Error, PositionsPaginated) {
  'use strict';

  /**
   * Positions service.
   * @module api/PositionsApi
   * @version 1.0
   */

  /**
   * Constructs a new PositionsApi. 
   * @alias module:api/PositionsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the listPositions operation.
     * @callback module:api/PositionsApi~listPositionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PositionsPaginated} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns positions for a given account. This API will also allow you to retrieve historical Positions held on a given date.
     * @param {String} accountId The &#x60;id&#x60; of the Account entity.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset The zero-based index of the first result to return (default to 0)
     * @param {Number} opts.limit The maximum number of results to return per page. (default to 25)
     * @param {Date} opts._date Specify a date if you wish to retrieve a historical position for this account. If not provided, the current (latest) positions are returned.
     * @param {module:api/PositionsApi~listPositionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PositionsPaginated}
     */
    this.listPositions = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling listPositions");
      }


      var pathParams = {
      };
      var queryParams = {
        'account_id': accountId,
        'offset': opts['offset'],
        'limit': opts['limit'],
        'date': opts['_date'],
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
      var returnType = PositionsPaginated;

      return this.apiClient.callApi(
        '/positions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
