
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Error', 'model/Trust', 'model/TrustInput', 'model/TrustUpdate', 'model/TrustsPaginated'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/Trust'), require('../model/TrustInput'), require('../model/TrustUpdate'), require('../model/TrustsPaginated'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.TrustsApi = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.Error, root.Wealthsimple.Trust, root.Wealthsimple.TrustInput, root.Wealthsimple.TrustUpdate, root.Wealthsimple.TrustsPaginated);
  }
}(this, function(ApiClient, Error, Trust, TrustInput, TrustUpdate, TrustsPaginated) {
  'use strict';

  /**
   * Trusts service.
   * @module api/TrustsApi
   * @version 1.0
   */

  /**
   * Constructs a new TrustsApi. 
   * @alias module:api/TrustsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createTrust operation.
     * @callback module:api/TrustsApi~createTrustCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Trust} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * After creating a Trust, you can add/remove information to the Trust entity as the information becomes available using the &#x60;PATCH&#x60; &#x60;/trusts/{trust_id}&#x60; endpoint using application credentials or the Trust&#39;s authentication credentials. 
     * @param {module:model/TrustInput} trust 
     * @param {module:api/TrustsApi~createTrustCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Trust}
     */
    this.createTrust = function(trust, callback) {
      var postBody = trust;

      // verify the required parameter 'trust' is set
      if (trust === undefined || trust === null) {
        throw new Error("Missing the required parameter 'trust' when calling createTrust");
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
      var returnType = Trust;

      return this.apiClient.callApi(
        '/trusts', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTrust operation.
     * @callback module:api/TrustsApi~getTrustCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Trust} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a Trust entity if you know the trust_id and the current credentials have access to the Trust. 
     * @param {String} trustId 
     * @param {module:api/TrustsApi~getTrustCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Trust}
     */
    this.getTrust = function(trustId, callback) {
      var postBody = null;

      // verify the required parameter 'trustId' is set
      if (trustId === undefined || trustId === null) {
        throw new Error("Missing the required parameter 'trustId' when calling getTrust");
      }


      var pathParams = {
        'trust_id': trustId
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
      var returnType = Trust;

      return this.apiClient.callApi(
        '/trusts/{trust_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listTrusts operation.
     * @callback module:api/TrustsApi~listTrustsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TrustsPaginated} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     *  This API will return a list of Trusts scoped by the authorization credentials.           As the number of Trusts can be potentially prohibitively large, the results are paginated. 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset The zero-based index of the first result to return (default to 0)
     * @param {Number} opts.limit The maximum number of results to return per page. (default to 25)
     * @param {String} opts.sortBy Attribute to sort results by.
     * @param {module:model/String} opts.sortOrder The sort direction of the results. (default to desc)
     * @param {Array.<String>} opts.trustIds Limits the results only to those with a &#x60;trust_id&#x60; in the list.
     * @param {Array.<String>} opts.externalIds Limits the results only to those with a &#x60;external_id&#x60; in the list.
     * @param {String} opts.createdAfter Limits the results returned to only those that were created after this date.
     * @param {String} opts.createdBefore Limits the results returned to only those that were created before this date.
     * @param {String} opts.updatedAfter Limits the results returned to only those that were updated after this date.
     * @param {String} opts.updatedBefore Limits the results returned to only those that were updated before this date.
     * @param {module:api/TrustsApi~listTrustsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TrustsPaginated}
     */
    this.listTrusts = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort_by': opts['sortBy'],
        'sort_order': opts['sortOrder'],
        'created_after': opts['createdAfter'],
        'created_before': opts['createdBefore'],
        'updated_after': opts['updatedAfter'],
        'updated_before': opts['updatedBefore'],
      };
      var collectionQueryParams = {
        'trust_ids': {
          value: opts['trustIds'],
          collectionFormat: 'csv'
        },
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
      var returnType = TrustsPaginated;

      return this.apiClient.callApi(
        '/trusts', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateTrust operation.
     * @callback module:api/TrustsApi~updateTrustCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Trust} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     *  You can at any point add/remove information to the Trust entity using this API. To remove a previously set attribute, set the value to &#x60;null&#x60;. Attributes that are not mentioned in the request payload will leave the attribute unchanged in the Trust entity. 
     * @param {String} trustId 
     * @param {module:model/TrustUpdate} trust 
     * @param {module:api/TrustsApi~updateTrustCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Trust}
     */
    this.updateTrust = function(trustId, trust, callback) {
      var postBody = trust;

      // verify the required parameter 'trustId' is set
      if (trustId === undefined || trustId === null) {
        throw new Error("Missing the required parameter 'trustId' when calling updateTrust");
      }

      // verify the required parameter 'trust' is set
      if (trust === undefined || trust === null) {
        throw new Error("Missing the required parameter 'trust' when calling updateTrust");
      }


      var pathParams = {
        'trust_id': trustId
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
      var returnType = Trust;

      return this.apiClient.callApi(
        '/trusts/{trust_id}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
