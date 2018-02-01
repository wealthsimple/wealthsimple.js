
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Insider'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Insider'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.Insiders = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.Insider);
  }
}(this, function(ApiClient, Insider) {
  'use strict';




  /**
   * The Insiders model module.
   * @module model/Insiders
   * @version 1.0
   */

  /**
   * Constructs a new <code>Insiders</code>.
   * @alias module:model/Insiders
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
   * Constructs a <code>Insiders</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Insiders} obj Optional instance to populate.
   * @return {module:model/Insiders} The populated <code>Insiders</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ApiClient.constructFromObject(data, obj, 'Insider');

    }
    return obj;
  }




  return exports;
}));


