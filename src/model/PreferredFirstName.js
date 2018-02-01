
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
    root.Wealthsimple.PreferredFirstName = factory(root.Wealthsimple.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PreferredFirstName model module.
   * @module model/PreferredFirstName
   * @version 1.0
   */

  /**
   * Constructs a new <code>PreferredFirstName</code>.
   * The preferred first name is the name commonly used that is different from the legal first name.
   * @alias module:model/PreferredFirstName
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>PreferredFirstName</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PreferredFirstName} obj Optional instance to populate.
   * @return {module:model/PreferredFirstName} The populated <code>PreferredFirstName</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

    }
    return obj;
  }




  return exports;
}));


