
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
    root.Wealthsimple.CustomIncrement = factory(root.Wealthsimple.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CustomIncrement model module.
   * @module model/CustomIncrement
   * @version 1.0
   */

  /**
   * Constructs a new <code>CustomIncrement</code>.
   * @alias module:model/CustomIncrement
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>CustomIncrement</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CustomIncrement} obj Optional instance to populate.
   * @return {module:model/CustomIncrement} The populated <code>CustomIncrement</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('min')) {
        obj['min'] = ApiClient.convertToType(data['min'], 'Number');
      }
      if (data.hasOwnProperty('max')) {
        obj['max'] = ApiClient.convertToType(data['max'], 'Number');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} min
   */
  exports.prototype['min'] = undefined;
  /**
   * @member {Number} max
   */
  exports.prototype['max'] = undefined;
  /**
   * @member {Number} value
   */
  exports.prototype['value'] = undefined;



  return exports;
}));


