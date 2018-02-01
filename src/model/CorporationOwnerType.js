
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
    root.Wealthsimple.CorporationOwnerType = factory(root.Wealthsimple.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class CorporationOwnerType.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "person"
     * @const
     */
    "person": "person",
    /**
     * value: "corporation"
     * @const
     */
    "corporation": "corporation",
    /**
     * value: "trust"
     * @const
     */
    "trust": "trust"  };

  /**
   * Returns a <code>CorporationOwnerType</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/CorporationOwnerType} The enum <code>CorporationOwnerType</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));


