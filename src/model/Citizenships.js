
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Citizenship'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Citizenship'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.Citizenships = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.Citizenship);
  }
}(this, function(ApiClient, Citizenship) {
  'use strict';




  /**
   * The Citizenships model module.
   * @module model/Citizenships
   * @version 1.0
   */

  /**
   * Constructs a new <code>Citizenships</code>.
   * @alias module:model/Citizenships
   * @class
   * @extends Array
   */
  var exports = function() {
    var _this = this;
    _this = new Array();
    Object.setPrototypeOf(_this, exports);

    return _this;
  };

  /**
   * Constructs a <code>Citizenships</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Citizenships} obj Optional instance to populate.
   * @return {module:model/Citizenships} The populated <code>Citizenships</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ApiClient.constructFromObject(data, obj, 'Citizenship');

    }
    return obj;
  }




  return exports;
}));


