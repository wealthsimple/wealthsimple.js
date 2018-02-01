
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
    root.Wealthsimple.Relation = factory(root.Wealthsimple.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class Relation.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "self"
     * @const
     */
    "self": "self",
    /**
     * value: "spouse"
     * @const
     */
    "spouse": "spouse",
    /**
     * value: "child"
     * @const
     */
    "child": "child",
    /**
     * value: "parent"
     * @const
     */
    "parent": "parent",
    /**
     * value: "parent_in_law"
     * @const
     */
    "parent_in_law": "parent_in_law",
    /**
     * value: "sibling"
     * @const
     */
    "sibling": "sibling",
    /**
     * value: "associate"
     * @const
     */
    "associate": "associate",
    /**
     * value: "other"
     * @const
     */
    "other": "other"  };

  /**
   * Returns a <code>Relation</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/Relation} The enum <code>Relation</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));


