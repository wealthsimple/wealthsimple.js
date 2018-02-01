
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
    root.Wealthsimple.MaritalStatus = factory(root.Wealthsimple.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class MaritalStatus.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "single"
     * @const
     */
    "single": "single",
    /**
     * value: "married"
     * @const
     */
    "married": "married",
    /**
     * value: "common_law"
     * @const
     */
    "common_law": "common_law",
    /**
     * value: "separated"
     * @const
     */
    "separated": "separated",
    /**
     * value: "widowed"
     * @const
     */
    "widowed": "widowed",
    /**
     * value: "divorced"
     * @const
     */
    "divorced": "divorced"  };

  /**
   * Returns a <code>MaritalStatus</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/MaritalStatus} The enum <code>MaritalStatus</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));


