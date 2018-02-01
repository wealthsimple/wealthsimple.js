
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.Error = factory(root.Wealthsimple.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Error model module.
   * @module model/Error
   * @version 1.0
   */

  /**
   * Constructs a new <code>Error</code>.
   * @alias module:model/Error
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>Error</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Error} obj Optional instance to populate.
   * @return {module:model/Error} The populated <code>Error</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        var originalValue = data['status'];
        var parsedValue;
        if (typeof originalValue === "object" && String.hasOwnProperty('constructFromObject')) {
          parsedValue = String.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['status'] = parsedValue;
      }
      if (data.hasOwnProperty('code')) {
        var originalValue = data['code'];
        var parsedValue;
        if (typeof originalValue === "object" && Number.hasOwnProperty('constructFromObject')) {
          parsedValue = Number.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['code'] = parsedValue;
      }
      if (data.hasOwnProperty('message')) {
        var originalValue = data['message'];
        var parsedValue;
        if (typeof originalValue === "object" && String.hasOwnProperty('constructFromObject')) {
          parsedValue = String.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['message'] = parsedValue;
      }
      if (data.hasOwnProperty('reference_id')) {
        var originalValue = data['reference_id'];
        var parsedValue;
        if (typeof originalValue === "object" && String.hasOwnProperty('constructFromObject')) {
          parsedValue = String.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['reference_id'] = parsedValue;
      }
      if (data.hasOwnProperty('errors')) {
        var originalValue = data['errors'];
        var parsedValue;
        if (typeof originalValue === "object" && Object.hasOwnProperty('constructFromObject')) {
          parsedValue = Object.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['errors'] = parsedValue;
      }
    }
    return obj;
  }

  /**
   * The type of error returned.
   * @member {module:model/Error.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * An HTTP error code. Codes in the `4xx` range indicate an error that failed given the information provided, codes in the `5xx` range indicate an error with Wealthsimple's servers.
   * @member {Number} code
   */
  exports.prototype['code'] = undefined;
  /**
   * A message that briefly describes the error encountered.
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * A globally unique reference_id for this error that occurred.
   * @member {String} reference_id
   */
  exports.prototype['reference_id'] = undefined;
  /**
   * Validation errors come with a breakdown the validation problems
   * @member {Object} errors
   */
  exports.prototype['errors'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "bad_request"
     * @const
     */
    "bad_request": "bad_request",
    /**
     * value: "conflict"
     * @const
     */
    "conflict": "conflict",
    /**
     * value: "internal_server_error"
     * @const
     */
    "internal_server_error": "internal_server_error",
    /**
     * value: "method_not_allowed"
     * @const
     */
    "method_not_allowed": "method_not_allowed",
    /**
     * value: "not_acceptable"
     * @const
     */
    "not_acceptable": "not_acceptable",
    /**
     * value: "not_found"
     * @const
     */
    "not_found": "not_found",
    /**
     * value: "service_unavailable"
     * @const
     */
    "service_unavailable": "service_unavailable",
    /**
     * value: "unprocessable_entity"
     * @const
     */
    "unprocessable_entity": "unprocessable_entity"  };


  return exports;
}));


