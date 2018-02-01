
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
        obj['method'] = VerificationMethod.constructFromObject(data['method']);
      }
      if (data.hasOwnProperty('document_id')) {
        obj['document_id'] = DocumentId.constructFromObject(data['document_id']);
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


