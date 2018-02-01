
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/DocumentId', 'model/VerificationMethod'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DocumentId'), require('./VerificationMethod'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.VerificationBase = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.DocumentId, root.Wealthsimple.VerificationMethod);
  }
}(this, function(ApiClient, DocumentId, VerificationMethod) {
  'use strict';




  /**
   * The VerificationBase model module.
   * @module model/VerificationBase
   * @version 1.0
   */

  /**
   * Constructs a new <code>VerificationBase</code>.
   * @alias module:model/VerificationBase
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>VerificationBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VerificationBase} obj Optional instance to populate.
   * @return {module:model/VerificationBase} The populated <code>VerificationBase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('method')) {
        var originalValue = data['method'];
        var parsedValue;
        if (typeof originalValue === "object" && VerificationMethod.hasOwnProperty('constructFromObject')) {
          parsedValue = VerificationMethod.constructFromObject(originalValue);
        } else if ('VerificationMethod' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'VerificationMethod');
        }
        obj['method'] = parsedValue;
      }
      if (data.hasOwnProperty('document_id')) {
        var originalValue = data['document_id'];
        var parsedValue;
        if (typeof originalValue === "object" && DocumentId.hasOwnProperty('constructFromObject')) {
          parsedValue = DocumentId.constructFromObject(originalValue);
        } else if ('DocumentId' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'DocumentId');
        }
        obj['document_id'] = parsedValue;
      }
    }
    return obj;
  }

  /**
   * @member {module:model/VerificationMethod} method
   */
  exports.prototype['method'] = undefined;
  /**
   * @member {module:model/DocumentId} document_id
   */
  exports.prototype['document_id'] = undefined;



  return exports;
}));


