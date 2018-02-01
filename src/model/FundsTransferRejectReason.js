
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
    root.Wealthsimple.FundsTransferRejectReason = factory(root.Wealthsimple.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class FundsTransferRejectReason.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "bank_no_match"
     * @const
     */
    "bank_no_match": "bank_no_match",
    /**
     * value: "funds_not_cleared"
     * @const
     */
    "funds_not_cleared": "funds_not_cleared",
    /**
     * value: "invalid_bank"
     * @const
     */
    "invalid_bank": "invalid_bank",
    /**
     * value: "nsf"
     * @const
     */
    "nsf": "nsf",
    /**
     * value: "cannot_trace"
     * @const
     */
    "cannot_trace": "cannot_trace",
    /**
     * value: "stop_payment"
     * @const
     */
    "stop_payment": "stop_payment"  };

  /**
   * Returns a <code>FundsTransferRejectReason</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/FundsTransferRejectReason} The enum <code>FundsTransferRejectReason</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));


