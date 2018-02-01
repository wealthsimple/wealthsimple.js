
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
    root.Wealthsimple.Citizenship = factory(root.Wealthsimple.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Citizenship model module.
   * @module model/Citizenship
   * @version 1.0
   */

  /**
   * Constructs a new <code>Citizenship</code>.
   * A [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) country code.
   * @alias module:model/Citizenship
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Citizenship</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Citizenship} obj Optional instance to populate.
   * @return {module:model/Citizenship} The populated <code>Citizenship</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

    }
    return obj;
  }




  return exports;
}));


