
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CustomIncrement'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CustomIncrement'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.StepType = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.CustomIncrement);
  }
}(this, function(ApiClient, CustomIncrement) {
  'use strict';




  /**
   * The StepType model module.
   * @module model/StepType
   * @version 1.0
   */

  /**
   * Constructs a new <code>StepType</code>.
   * @alias module:model/StepType
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>StepType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StepType} obj Optional instance to populate.
   * @return {module:model/StepType} The populated <code>StepType</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        var originalValue = data['type'];
        var parsedValue;
        if (typeof originalValue === "object" && String.hasOwnProperty('constructFromObject')) {
          parsedValue = String.constructFromObject(originalValue);
        } else if ('String' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['type'] = parsedValue;
      }
      if (data.hasOwnProperty('increments')) {
        var originalValue = data['increments'];
        var parsedValue;
        if (typeof originalValue === "object" && Array.hasOwnProperty('constructFromObject')) {
          parsedValue = Array.constructFromObject(originalValue);
        } else if ('[CustomIncrement]' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, '[CustomIncrement]');
        }
        obj['increments'] = parsedValue;
      }
    }
    return obj;
  }

  /**
   * `linear` does not have increment breakpoints. A `custom` step have will have an `increments` property.
   * @member {module:model/StepType.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {Array.<module:model/CustomIncrement>} increments
   */
  exports.prototype['increments'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "linear"
     * @const
     */
    "linear": "linear",
    /**
     * value: "custom"
     * @const
     */
    "custom": "custom"  };


  return exports;
}));


