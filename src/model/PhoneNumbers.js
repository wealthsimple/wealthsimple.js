
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/PhoneNumber'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PhoneNumber'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.PhoneNumbers = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.PhoneNumber);
  }
}(this, function(ApiClient, PhoneNumber) {
  'use strict';




  /**
   * The PhoneNumbers model module.
   * @module model/PhoneNumbers
   * @version 1.0
   */

  /**
   * Constructs a new <code>PhoneNumbers</code>.
   * @alias module:model/PhoneNumbers
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
   * Constructs a <code>PhoneNumbers</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PhoneNumbers} obj Optional instance to populate.
   * @return {module:model/PhoneNumbers} The populated <code>PhoneNumbers</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ApiClient.constructFromObject(data, obj, 'PhoneNumber');

    }
    return obj;
  }




  return exports;
}));


