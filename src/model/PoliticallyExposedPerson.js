
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
    root.Wealthsimple.PoliticallyExposedPerson = factory(root.Wealthsimple.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PoliticallyExposedPerson model module.
   * @module model/PoliticallyExposedPerson
   * @version 1.0
   */

  /**
   * Constructs a new <code>PoliticallyExposedPerson</code>.
   * @alias module:model/PoliticallyExposedPerson
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>PoliticallyExposedPerson</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PoliticallyExposedPerson} obj Optional instance to populate.
   * @return {module:model/PoliticallyExposedPerson} The populated <code>PoliticallyExposedPerson</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

    }
    return obj;
  }




  return exports;
}));


