
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/DocumentId', 'model/VerificationBase', 'model/VerificationMethod'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DocumentId'), require('./VerificationBase'), require('./VerificationMethod'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.VerificationInput = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.DocumentId, root.Wealthsimple.VerificationBase, root.Wealthsimple.VerificationMethod);
  }
}(this, function(ApiClient, DocumentId, VerificationBase, VerificationMethod) {
  'use strict';




  /**
   * The VerificationInput model module.
   * @module model/VerificationInput
   * @version 1.0
   */

  /**
   * Constructs a new <code>VerificationInput</code>.
   * @alias module:model/VerificationInput
   * @class
   * @implements module:model/VerificationBase
   */
  var exports = function() {
    var _this = this;

    VerificationBase.call(_this);
  };

  /**
   * Constructs a <code>VerificationInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VerificationInput} obj Optional instance to populate.
   * @return {module:model/VerificationInput} The populated <code>VerificationInput</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      VerificationBase.constructFromObject(data, obj);
    }
    return obj;
  }


  // Implement VerificationBase interface:
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


