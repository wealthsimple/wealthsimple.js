
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
    root.Wealthsimple.VerificationMethod = factory(root.Wealthsimple.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class VerificationMethod.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "bank_screenshot"
     * @const
     */
    "bank_screenshot": "bank_screenshot",
    /**
     * value: "bank_statement"
     * @const
     */
    "bank_statement": "bank_statement",
    /**
     * value: "cleared_cheque"
     * @const
     */
    "cleared_cheque": "cleared_cheque",
    /**
     * value: "direct_deposit"
     * @const
     */
    "direct_deposit": "direct_deposit",
    /**
     * value: "partial_bank_statement"
     * @const
     */
    "partial_bank_statement": "partial_bank_statement",
    /**
     * value: "void_cheque"
     * @const
     */
    "void_cheque": "void_cheque",
    /**
     * value: "third_party"
     * @const
     */
    "third_party": "third_party",
    /**
     * value: "microdeposit"
     * @const
     */
    "microdeposit": "microdeposit"  };

  /**
   * Returns a <code>VerificationMethod</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/VerificationMethod} The enum <code>VerificationMethod</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));


