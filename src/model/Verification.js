
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/DateTime', 'model/DocumentId', 'model/VerificationBase', 'model/VerificationMethod', 'model/VerificationStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DateTime'), require('./DocumentId'), require('./VerificationBase'), require('./VerificationMethod'), require('./VerificationStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.Verification = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.DateTime, root.Wealthsimple.DocumentId, root.Wealthsimple.VerificationBase, root.Wealthsimple.VerificationMethod, root.Wealthsimple.VerificationStatus);
  }
}(this, function(ApiClient, DateTime, DocumentId, VerificationBase, VerificationMethod, VerificationStatus) {
  'use strict';




  /**
   * The Verification model module.
   * @module model/Verification
   * @version 1.0
   */

  /**
   * Constructs a new <code>Verification</code>.
   * @alias module:model/Verification
   * @class
   * @implements module:model/VerificationBase
   */
  var exports = function() {
    var _this = this;

    VerificationBase.call(_this);


  };

  /**
   * Constructs a <code>Verification</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Verification} obj Optional instance to populate.
   * @return {module:model/Verification} The populated <code>Verification</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      VerificationBase.constructFromObject(data, obj);
      if (data.hasOwnProperty('status')) {
        obj['status'] = VerificationStatus.constructFromObject(data['status']);
      }
      if (data.hasOwnProperty('accepted_at')) {
        obj['accepted_at'] = 'Date'.constructFromObject(data['accepted_at']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/VerificationStatus} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/Date} accepted_at
   */
  exports.prototype['accepted_at'] = undefined;

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


