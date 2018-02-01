
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Healthcheck'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Healthcheck'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.HealthcheckApi = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.Healthcheck);
  }
}(this, function(ApiClient, Healthcheck) {
  'use strict';

  /**
   * Healthcheck service.
   * @module api/HealthcheckApi
   * @version 1.0
   */

  /**
   * Constructs a new HealthcheckApi. 
   * @alias module:api/HealthcheckApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the healthcheck operation.
     * @callback module:api/HealthcheckApi~healthcheckCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Healthcheck} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get current health of the API.
     * @param {module:api/HealthcheckApi~healthcheckCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Healthcheck}
     */
    this.healthcheck = function(callback) {
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Healthcheck;

      return this.apiClient.callApi(
        '/healthcheck', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
