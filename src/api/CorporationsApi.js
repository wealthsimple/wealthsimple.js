
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Corporation', 'model/CorporationInput', 'model/CorporationUpdate', 'model/CorporationsPaginated', 'model/Error'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Corporation'), require('../model/CorporationInput'), require('../model/CorporationUpdate'), require('../model/CorporationsPaginated'), require('../model/Error'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.CorporationsApi = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.Corporation, root.Wealthsimple.CorporationInput, root.Wealthsimple.CorporationUpdate, root.Wealthsimple.CorporationsPaginated, root.Wealthsimple.Error);
  }
}(this, function(ApiClient, Corporation, CorporationInput, CorporationUpdate, CorporationsPaginated, Error) {
  'use strict';

  /**
   * Corporations service.
   * @module api/CorporationsApi
   * @version 1.0
   */

  /**
   * Constructs a new CorporationsApi. 
   * @alias module:api/CorporationsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createCorporation operation.
     * @callback module:api/CorporationsApi~createCorporationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Corporation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * After creating a Corporation, you can add/remove information to the Corporation entity using the &#x60;PATCH&#x60; &#x60;/corporations/{corporation_id}&#x60; endpoint using application credentials or the Corporation&#39;s authentication credentials. 
     * @param {module:model/CorporationInput} corporation 
     * @param {module:api/CorporationsApi~createCorporationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Corporation}
     */
    this.createCorporation = function(corporation, callback) {
      var postBody = corporation;

      // verify the required parameter 'corporation' is set
      if (corporation === undefined || corporation === null) {
        throw new Error("Missing the required parameter 'corporation' when calling createCorporation");
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
      var returnType = Corporation;

      return this.apiClient.callApi(
        '/corporations', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCorporation operation.
     * @callback module:api/CorporationsApi~getCorporationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Corporation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a Corporation entity if you know the corporations_id and the current credentials have access to the Corporation.
     * @param {String} corporationId 
     * @param {module:api/CorporationsApi~getCorporationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Corporation}
     */
    this.getCorporation = function(corporationId, callback) {
      var postBody = null;

      // verify the required parameter 'corporationId' is set
      if (corporationId === undefined || corporationId === null) {
        throw new Error("Missing the required parameter 'corporationId' when calling getCorporation");
      }


      var pathParams = {
        'corporation_id': corporationId
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
      var returnType = Corporation;

      return this.apiClient.callApi(
        '/corporations/{corporation_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listCorporations operation.
     * @callback module:api/CorporationsApi~listCorporationsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CorporationsPaginated} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     *  This API will return a list of Corporations scoped by the authorization credentials.           As the number of Corporations can be potentially prohibitively large, the results are paginated. 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset The zero-based index of the first result to return (default to 0)
     * @param {Number} opts.limit The maximum number of results to return per page. (default to 25)
     * @param {String} opts.sortBy Attribute to sort results by.
     * @param {module:model/String} opts.sortOrder The sort direction of the results. (default to desc)
     * @param {Array.<String>} opts.corporationIds Limits the results only to those with a &#x60;corporation_id&#x60; in the list.
     * @param {Array.<String>} opts.externalIds Limits the results only to those with a &#x60;external_id&#x60; in the list.
     * @param {String} opts.createdAfter Limits the results returned to only those that were created after this date.
     * @param {String} opts.createdBefore Limits the results returned to only those that were created before this date.
     * @param {String} opts.updatedAfter Limits the results returned to only those that were updated after this date.
     * @param {String} opts.updatedBefore Limits the results returned to only those that were updated before this date.
     * @param {module:api/CorporationsApi~listCorporationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CorporationsPaginated}
     */
    this.listCorporations = function(opts, callback) {
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
        'corporation_ids': {
          value: opts['corporationIds'],
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
      var returnType = CorporationsPaginated;

      return this.apiClient.callApi(
        '/corporations', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCorporation operation.
     * @callback module:api/CorporationsApi~updateCorporationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Corporation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     *  You can add/remove information to the Corporation entity using this API. To remove a previously set attribute, set the value to &#x60;null&#x60;. Attributes that are not mentioned in the request payload will leave the attribute unchanged in the Corporation entity. 
     * @param {String} corporationId 
     * @param {module:model/CorporationUpdate} corporation 
     * @param {module:api/CorporationsApi~updateCorporationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Corporation}
     */
    this.updateCorporation = function(corporationId, corporation, callback) {
      var postBody = corporation;

      // verify the required parameter 'corporationId' is set
      if (corporationId === undefined || corporationId === null) {
        throw new Error("Missing the required parameter 'corporationId' when calling updateCorporation");
      }

      // verify the required parameter 'corporation' is set
      if (corporation === undefined || corporation === null) {
        throw new Error("Missing the required parameter 'corporation' when calling updateCorporation");
      }


      var pathParams = {
        'corporation_id': corporationId
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
      var returnType = Corporation;

      return this.apiClient.callApi(
        '/corporations/{corporation_id}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
