
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Error', 'model/Survey', 'model/SurveysPaginated'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/Survey'), require('../model/SurveysPaginated'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.SurveysApi = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.Error, root.Wealthsimple.Survey, root.Wealthsimple.SurveysPaginated);
  }
}(this, function(ApiClient, Error, Survey, SurveysPaginated) {
  'use strict';

  /**
   * Surveys service.
   * @module api/SurveysApi
   * @version 1.0
   */

  /**
   * Constructs a new SurveysApi. 
   * @alias module:api/SurveysApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getSurvey operation.
     * @callback module:api/SurveysApi~getSurveyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Survey} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a Survey entity
     * @param {String} surveyId The &#x60;id&#x60; of the Survey entity.
     * @param {Object} opts Optional parameters
     * @param {String} opts.clientId The &#x60;id&#x60; of the Client entity. A &#x60;client_id&#x60; can be a &#x60;person_id&#x60;, &#x60;trust_id&#x60; or &#x60;corporation_id&#x60;
     * @param {Number} opts.offset The zero-based index of the first result to return (default to 0)
     * @param {Number} opts.limit The maximum number of results to return per page. (default to 25)
     * @param {String} opts.sortBy Attribute to sort results by.
     * @param {module:model/String} opts.sortOrder The sort direction of the results. (default to desc)
     * @param {module:api/SurveysApi~getSurveyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Survey}
     */
    this.getSurvey = function(surveyId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'surveyId' is set
      if (surveyId === undefined || surveyId === null) {
        throw new Error("Missing the required parameter 'surveyId' when calling getSurvey");
      }


      var pathParams = {
        'survey_id': surveyId
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
      var returnType = Survey;

      return this.apiClient.callApi(
        '/surveys/{survey_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listSurveys operation.
     * @callback module:api/SurveysApi~listSurveysCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SurveysPaginated} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     *  As the number of Surveys can be potentially large, the results are paginated. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.clientId The &#x60;id&#x60; of the Client entity. A &#x60;client_id&#x60; can be a &#x60;person_id&#x60;, &#x60;trust_id&#x60; or &#x60;corporation_id&#x60;
     * @param {Number} opts.offset The zero-based index of the first result to return (default to 0)
     * @param {Number} opts.limit The maximum number of results to return per page. (default to 25)
     * @param {String} opts.sortBy Attribute to sort results by.
     * @param {module:model/String} opts.sortOrder The sort direction of the results. (default to desc)
     * @param {module:api/SurveysApi~listSurveysCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SurveysPaginated}
     */
    this.listSurveys = function(opts, callback) {
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
      var returnType = SurveysPaginated;

      return this.apiClient.callApi(
        '/surveys', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
