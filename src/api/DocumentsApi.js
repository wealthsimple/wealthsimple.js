
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Document', 'model/DocumentInput', 'model/DocumentsPaginated', 'model/Error'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Document'), require('../model/DocumentInput'), require('../model/DocumentsPaginated'), require('../model/Error'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.DocumentsApi = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.Document, root.Wealthsimple.DocumentInput, root.Wealthsimple.DocumentsPaginated, root.Wealthsimple.Error);
  }
}(this, function(ApiClient, Document, DocumentInput, DocumentsPaginated, Error) {
  'use strict';

  /**
   * Documents service.
   * @module api/DocumentsApi
   * @version 1.0
   */

  /**
   * Constructs a new DocumentsApi. 
   * @alias module:api/DocumentsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createDocument operation.
     * @callback module:api/DocumentsApi~createDocumentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Document} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     *  Multi-part upload for Document, this API requires both the Document metadata and the binary file to be uploaded simulatenously. Once the Document file is received, the &#x60;mime_type&#x60; will automatically be determined, if we fail to determine the &#x60;mime_type&#x60; of the uploaded file, an error will be raised. 
     * @param {module:model/DocumentInput} document Document metadata, this is required
     * @param {File} data binary file document
     * @param {module:api/DocumentsApi~createDocumentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Document}
     */
    this.createDocument = function(document, data, callback) {
      var postBody = document;

      // verify the required parameter 'document' is set
      if (document === undefined || document === null) {
        throw new Error("Missing the required parameter 'document' when calling createDocument");
      }

      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling createDocument");
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
        'data': data
      };

      var authNames = ['Bearer'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = Document;

      return this.apiClient.callApi(
        '/documents', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDocument operation.
     * @callback module:api/DocumentsApi~getDocumentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Document} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     *  Retrieves a Document resource 
     * @param {String} documentId The &#x60;id&#x60; of the Document entity.
     * @param {module:api/DocumentsApi~getDocumentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Document}
     */
    this.getDocument = function(documentId, callback) {
      var postBody = null;

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling getDocument");
      }


      var pathParams = {
        'document_id': documentId
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
      var returnType = Document;

      return this.apiClient.callApi(
        '/documents/{document_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDocumentBinary operation.
     * @callback module:api/DocumentsApi~getDocumentBinaryCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     *  Retrieves the file (binary) representation of the Document resource. 
     * @param {String} documentId The &#x60;id&#x60; of the Document entity.
     * @param {module:api/DocumentsApi~getDocumentBinaryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    this.getDocumentBinary = function(documentId, callback) {
      var postBody = null;

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling getDocumentBinary");
      }


      var pathParams = {
        'document_id': documentId
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
      var accepts = ['application/octet-stream'];
      var returnType = File;

      return this.apiClient.callApi(
        '/documents/{document_id}/file', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listDocuments operation.
     * @callback module:api/DocumentsApi~listDocumentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentsPaginated} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     *  As the number of Documents can be potentially prohibitively large, the results are paginated. 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset The zero-based index of the first result to return (default to 0)
     * @param {Number} opts.limit The maximum number of results to return per page. (default to 25)
     * @param {String} opts.sortBy Attribute to sort results by.
     * @param {module:model/String} opts.sortOrder The sort direction of the results. (default to desc)
     * @param {Array.<String>} opts.externalIds Limits the results only to those with a &#x60;external_id&#x60; in the list.
     * @param {Array.<String>} opts.tags Limits the results only to those with a tag in the list.
     * @param {module:api/DocumentsApi~listDocumentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentsPaginated}
     */
    this.listDocuments = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort_by': opts['sortBy'],
        'sort_order': opts['sortOrder'],
      };
      var collectionQueryParams = {
        'external_ids': {
          value: opts['externalIds'],
          collectionFormat: 'csv'
        },
        'tags': {
          value: opts['tags'],
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
      var returnType = DocumentsPaginated;

      return this.apiClient.callApi(
        '/documents', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
