
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/DailyValuesPaginated', 'model/Error'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DailyValuesPaginated'), require('../model/Error'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.DailyValuesApi = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.DailyValuesPaginated, root.Wealthsimple.Error);
  }
}(this, function(ApiClient, DailyValuesPaginated, Error) {
  'use strict';

  /**
   * DailyValues service.
   * @module api/DailyValuesApi
   * @version 1.0
   */

  /**
   * Constructs a new DailyValuesApi. 
   * @alias module:api/DailyValuesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the listDailyValues operation.
     * @callback module:api/DailyValuesApi~listDailyValuesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DailyValuesPaginated} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     *  Returns historical daily values for a given account. This API will only return a maximum of 365 days worth of daily values from a given start date.  By default, it will return historical values for the last 30-days. The &#x60;start&#x60; date must occur before the &#x60;end&#x60; date if provided.  If the difference between the &#x60;start&#x60; date and the &#x60;end&#x60; date exceeds 365 days, an error will be thrown. The number of Daily Values can be potentially prohibitively large, the results are paginated. 
     * @param {String} accountId The &#x60;id&#x60; of the Account entity.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset The zero-based index of the first result to return (default to 0)
     * @param {Number} opts.limit The maximum number of results to return per page. (default to 25)
     * @param {Number} opts.offset2 The zero-based index of the first result to return (default to 0)
     * @param {Number} opts.limit2 The maximum number of results to return per page. (default to 25)
     * @param {Date} opts.summaryDateStart The date of the first daily_value in [ISO_8601](https://en.wikipedia.org/wiki/ISO_8601) format (i.e. YYYY-MM-DD), if not provided, defaults to 30-days ago.
     * @param {Date} opts.summaryDateEnd The date of the last daily_value in [ISO_8601](https://en.wikipedia.org/wiki/ISO_8601) format (i.e. YYYY-MM-DD), if not provided, defaults to today.
     * @param {module:api/DailyValuesApi~listDailyValuesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DailyValuesPaginated}
     */
    this.listDailyValues = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling listDailyValues");
      }


      var pathParams = {
      };
      var queryParams = {
        'account_id': accountId,
        'offset': opts['offset'],
        'limit': opts['limit'],
        'offset': opts['offset2'],
        'limit': opts['limit2'],
        'summary_date_start': opts['summaryDateStart'],
        'summary_date_end': opts['summaryDateEnd'],
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
      var returnType = DailyValuesPaginated;

      return this.apiClient.callApi(
        '/daily_values', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
