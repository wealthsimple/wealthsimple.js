
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
    root.Wealthsimple.EmploymentStatus = factory(root.Wealthsimple.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class EmploymentStatus.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "employed"
     * @const
     */
    "employed": "employed",
    /**
     * value: "self_employed"
     * @const
     */
    "self_employed": "self_employed",
    /**
     * value: "retired"
     * @const
     */
    "retired": "retired",
    /**
     * value: "unemployed"
     * @const
     */
    "unemployed": "unemployed",
    /**
     * value: "student"
     * @const
     */
    "student": "student"  };

  /**
   * Returns a <code>EmploymentStatus</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/EmploymentStatus} The enum <code>EmploymentStatus</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));


