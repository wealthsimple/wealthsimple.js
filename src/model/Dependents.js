
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Dependent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Dependent'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.Dependents = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.Dependent);
  }
}(this, function(ApiClient, Dependent) {
  'use strict';




  /**
   * The Dependents model module.
   * @module model/Dependents
   * @version 1.0
   */

  /**
   * Constructs a new <code>Dependents</code>.
   * @alias module:model/Dependents
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
   * Constructs a <code>Dependents</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Dependents} obj Optional instance to populate.
   * @return {module:model/Dependents} The populated <code>Dependents</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ApiClient.constructFromObject(data, obj, 'Dependent');

    }
    return obj;
  }




  return exports;
}));


