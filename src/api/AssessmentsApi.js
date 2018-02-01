
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AssessmentPaginated', 'model/Error'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AssessmentPaginated'), require('../model/Error'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.AssessmentsApi = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.AssessmentPaginated, root.Wealthsimple.Error);
  }
}(this, function(ApiClient, AssessmentPaginated, Error) {
  'use strict';

  /**
   * Assessments service.
   * @module api/AssessmentsApi
   * @version 1.0
   */

  /**
   * Constructs a new AssessmentsApi. 
   * @alias module:api/AssessmentsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the listAccountAssessments operation.
     * @callback module:api/AssessmentsApi~listAccountAssessmentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AssessmentPaginated} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the latest assessments for a given account.
     * @param {Object} opts Optional parameters
     * @param {String} opts.clientId The &#x60;id&#x60; of the Client entity. A &#x60;client_id&#x60; can be a &#x60;person_id&#x60;, &#x60;trust_id&#x60; or &#x60;corporation_id&#x60;
     * @param {String} opts.accountId The &#x60;id&#x60; of the Account entity.
     * @param {Number} opts.offset The zero-based index of the first result to return (default to 0)
     * @param {Number} opts.limit The maximum number of results to return per page. (default to 25)
     * @param {String} opts.sortBy Attribute to sort results by.
     * @param {module:model/String} opts.sortOrder The sort direction of the results. (default to desc)
     * @param {module:api/AssessmentsApi~listAccountAssessmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AssessmentPaginated}
     */
    this.listAccountAssessments = function(opts, callback) {
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
      var returnType = AssessmentPaginated;

      return this.apiClient.callApi(
        '/account_assessments', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listClientAssessments operation.
     * @callback module:api/AssessmentsApi~listClientAssessmentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AssessmentPaginated} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the latest assessment for a given client.
     * @param {Object} opts Optional parameters
     * @param {String} opts.clientId The &#x60;id&#x60; of the Client entity. A &#x60;client_id&#x60; can be a &#x60;person_id&#x60;, &#x60;trust_id&#x60; or &#x60;corporation_id&#x60;
     * @param {Number} opts.offset The zero-based index of the first result to return (default to 0)
     * @param {Number} opts.limit The maximum number of results to return per page. (default to 25)
     * @param {String} opts.sortBy Attribute to sort results by.
     * @param {module:model/String} opts.sortOrder The sort direction of the results. (default to desc)
     * @param {module:api/AssessmentsApi~listClientAssessmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AssessmentPaginated}
     */
    this.listClientAssessments = function(opts, callback) {
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
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AssessmentPaginated;

      return this.apiClient.callApi(
        '/client_assessments', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
