
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
    root.Wealthsimple.Province = factory(root.Wealthsimple.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class Province.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "AB"
     * @const
     */
    "AB": "AB",
    /**
     * value: "BC"
     * @const
     */
    "BC": "BC",
    /**
     * value: "MB"
     * @const
     */
    "MB": "MB",
    /**
     * value: "NB"
     * @const
     */
    "NB": "NB",
    /**
     * value: "NL"
     * @const
     */
    "NL": "NL",
    /**
     * value: "NF"
     * @const
     */
    "NF": "NF",
    /**
     * value: "LB"
     * @const
     */
    "LB": "LB",
    /**
     * value: "NT"
     * @const
     */
    "NT": "NT",
    /**
     * value: "NS"
     * @const
     */
    "NS": "NS",
    /**
     * value: "NU"
     * @const
     */
    "NU": "NU",
    /**
     * value: "ON"
     * @const
     */
    "ON": "ON",
    /**
     * value: "PE"
     * @const
     */
    "PE": "PE",
    /**
     * value: "QC"
     * @const
     */
    "QC": "QC",
    /**
     * value: "SK"
     * @const
     */
    "SK": "SK",
    /**
     * value: "YT"
     * @const
     */
    "YT": "YT"  };

  /**
   * Returns a <code>Province</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/Province} The enum <code>Province</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));


