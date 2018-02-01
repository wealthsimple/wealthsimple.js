
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
    root.Wealthsimple.VerificationId = factory(root.Wealthsimple.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The VerificationId model module.
   * @module model/VerificationId
   * @version 1.0
   */

  /**
   * Constructs a new <code>VerificationId</code>.
   * The unique &#x60;id&#x60; of the Verification
   * @alias module:model/VerificationId
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>VerificationId</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VerificationId} obj Optional instance to populate.
   * @return {module:model/VerificationId} The populated <code>VerificationId</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

    }
    return obj;
  }




  return exports;
}));


