
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
    root.Wealthsimple.AccountType = factory(root.Wealthsimple.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class AccountType.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "ca_tfsa"
     * @const
     */
    "ca_tfsa": "ca_tfsa",
    /**
     * value: "ca_rrsp"
     * @const
     */
    "ca_rrsp": "ca_rrsp",
    /**
     * value: "ca_non_registered"
     * @const
     */
    "ca_non_registered": "ca_non_registered",
    /**
     * value: "us_individual"
     * @const
     */
    "us_individual": "us_individual",
    /**
     * value: "us_roth_ira"
     * @const
     */
    "us_roth_ira": "us_roth_ira",
    /**
     * value: "us_traditional_ira"
     * @const
     */
    "us_traditional_ira": "us_traditional_ira",
    /**
     * value: "gb_individual"
     * @const
     */
    "gb_individual": "gb_individual",
    /**
     * value: "gb_isa"
     * @const
     */
    "gb_isa": "gb_isa"  };

  /**
   * Returns a <code>AccountType</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/AccountType} The enum <code>AccountType</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));


