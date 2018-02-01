
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/StepType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./StepType'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.RangeLimits = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.StepType);
  }
}(this, function(ApiClient, StepType) {
  'use strict';




  /**
   * The RangeLimits model module.
   * @module model/RangeLimits
   * @version 1.0
   */

  /**
   * Constructs a new <code>RangeLimits</code>.
   * @alias module:model/RangeLimits
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>RangeLimits</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RangeLimits} obj Optional instance to populate.
   * @return {module:model/RangeLimits} The populated <code>RangeLimits</code> instance.
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
      if (data.hasOwnProperty('step')) {
        obj['step'] = StepType.constructFromObject(data['step']);
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
   * @member {module:model/StepType} step
   */
  exports.prototype['step'] = undefined;



  return exports;
}));


