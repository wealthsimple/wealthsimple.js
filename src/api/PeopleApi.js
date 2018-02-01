
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Error', 'model/PeoplePaginated', 'model/Person', 'model/PersonInput', 'model/PersonUpdate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/PeoplePaginated'), require('../model/Person'), require('../model/PersonInput'), require('../model/PersonUpdate'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.PeopleApi = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.Error, root.Wealthsimple.PeoplePaginated, root.Wealthsimple.Person, root.Wealthsimple.PersonInput, root.Wealthsimple.PersonUpdate);
  }
}(this, function(ApiClient, Error, PeoplePaginated, Person, PersonInput, PersonUpdate) {
  'use strict';

  /**
   * People service.
   * @module api/PeopleApi
   * @version 1.0
   */

  /**
   * Constructs a new PeopleApi. 
   * @alias module:api/PeopleApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createPerson operation.
     * @callback module:api/PeopleApi~createPersonCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Person} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * After creating a Person, you always progressively add/remove information to the Person entity as the information         becomes available using the &#x60;PATCH&#x60; &#x60;/people/{person_id}&#x60; endpoint using application credentials or the Client&#39;s authentication credentials.         
     * @param {module:model/PersonInput} person 
     * @param {module:api/PeopleApi~createPersonCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Person}
     */
    this.createPerson = function(person, callback) {
      var postBody = person;

      // verify the required parameter 'person' is set
      if (person === undefined || person === null) {
        throw new Error("Missing the required parameter 'person' when calling createPerson");
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
      var returnType = Person;

      return this.apiClient.callApi(
        '/people', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPerson operation.
     * @callback module:api/PeopleApi~getPersonCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Person} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a Person entity if you know the person_id and the current credentials have access to the Person. 
     * @param {String} personId 
     * @param {module:api/PeopleApi~getPersonCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Person}
     */
    this.getPerson = function(personId, callback) {
      var postBody = null;

      // verify the required parameter 'personId' is set
      if (personId === undefined || personId === null) {
        throw new Error("Missing the required parameter 'personId' when calling getPerson");
      }


      var pathParams = {
        'person_id': personId
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
      var returnType = Person;

      return this.apiClient.callApi(
        '/people/{person_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listPeople operation.
     * @callback module:api/PeopleApi~listPeopleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PeoplePaginated} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This API will return a list of People scoped by the authorization credentials. As the number of People can be potentially prohibitively large, the results are paginated.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset The zero-based index of the first result to return (default to 0)
     * @param {Number} opts.limit The maximum number of results to return per page. (default to 25)
     * @param {String} opts.sortBy Attribute to sort results by.
     * @param {module:model/String} opts.sortOrder The sort direction of the results. (default to desc)
     * @param {Array.<String>} opts.personIds Limits the results only to those with a &#x60;person_id&#x60; in the list.
     * @param {Array.<String>} opts.externalIds Limits the results only to those with a &#x60;external_id&#x60; in the list.
     * @param {String} opts.createdAfter Limits the results returned to only those that were created after this date.
     * @param {String} opts.createdBefore Limits the results returned to only those that were created before this date.
     * @param {String} opts.updatedAfter Limits the results returned to only those that were updated after this date.
     * @param {String} opts.updatedBefore Limits the results returned to only those that were updated before this date.
     * @param {module:api/PeopleApi~listPeopleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PeoplePaginated}
     */
    this.listPeople = function(opts, callback) {
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
        'person_ids': {
          value: opts['personIds'],
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
      var returnType = PeoplePaginated;

      return this.apiClient.callApi(
        '/people', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updatePerson operation.
     * @callback module:api/PeopleApi~updatePersonCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Person} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     *  You can add/remove information to the Person entity as the information becomes available using this API. To remove a previously set attribute, set the value to &#x60;null&#x60;. Attributes that are not mentioned in the request payload will leave the attribute unchanged in the Person entity. 
     * @param {String} personId 
     * @param {module:model/PersonUpdate} person 
     * @param {module:api/PeopleApi~updatePersonCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Person}
     */
    this.updatePerson = function(personId, person, callback) {
      var postBody = person;

      // verify the required parameter 'personId' is set
      if (personId === undefined || personId === null) {
        throw new Error("Missing the required parameter 'personId' when calling updatePerson");
      }

      // verify the required parameter 'person' is set
      if (person === undefined || person === null) {
        throw new Error("Missing the required parameter 'person' when calling updatePerson");
      }


      var pathParams = {
      };
      var queryParams = {
        'person_id': personId,
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
      var returnType = Person;

      return this.apiClient.callApi(
        '/people/{person_id}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
