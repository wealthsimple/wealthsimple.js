
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
    root.Wealthsimple.FundsTransferType = factory(root.Wealthsimple.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class FundsTransferType.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "deposit"
     * @const
     */
    "deposit": "deposit",
    /**
     * value: "withdrawal"
     * @const
     */
    "withdrawal": "withdrawal"  };

  /**
   * Returns a <code>FundsTransferType</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/FundsTransferType} The enum <code>FundsTransferType</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));


