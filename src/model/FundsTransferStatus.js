
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
    root.Wealthsimple.FundsTransferStatus = factory(root.Wealthsimple.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class FundsTransferStatus.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "pending"
     * @const
     */
    "pending": "pending",
    /**
     * value: "posted"
     * @const
     */
    "posted": "posted",
    /**
     * value: "accepted"
     * @const
     */
    "accepted": "accepted",
    /**
     * value: "rejected"
     * @const
     */
    "rejected": "rejected",
    /**
     * value: "deleted"
     * @const
     */
    "deleted": "deleted"  };

  /**
   * Returns a <code>FundsTransferStatus</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/FundsTransferStatus} The enum <code>FundsTransferStatus</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));


