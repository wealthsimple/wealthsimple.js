
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
    root.Wealthsimple.Locale = factory(root.Wealthsimple.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class Locale.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "en-CA"
     * @const
     */
    "en-CA": "en-CA",
    /**
     * value: "en-US"
     * @const
     */
    "en-US": "en-US",
    /**
     * value: "en-GB"
     * @const
     */
    "en-GB": "en-GB",
    /**
     * value: "fr-CA"
     * @const
     */
    "fr-CA": "fr-CA"  };

  /**
   * Returns a <code>Locale</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/Locale} The enum <code>Locale</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));


