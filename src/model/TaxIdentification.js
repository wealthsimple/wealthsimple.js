
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
    root.Wealthsimple.TaxIdentification = factory(root.Wealthsimple.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TaxIdentification model module.
   * @module model/TaxIdentification
   * @version 1.0
   */

  /**
   * Constructs a new <code>TaxIdentification</code>.
   * @alias module:model/TaxIdentification
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>TaxIdentification</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaxIdentification} obj Optional instance to populate.
   * @return {module:model/TaxIdentification} The populated <code>TaxIdentification</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        var originalValue = data['type'];
        var parsedValue;
        if (typeof originalValue === "object" && String.hasOwnProperty('constructFromObject')) {
          parsedValue = String.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['type'] = parsedValue;
      }
      if (data.hasOwnProperty('number')) {
        var originalValue = data['number'];
        var parsedValue;
        if (typeof originalValue === "object" && String.hasOwnProperty('constructFromObject')) {
          parsedValue = String.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['number'] = parsedValue;
      }
    }
    return obj;
  }

  /**
   * The type of tax identification number
   * @member {module:model/TaxIdentification.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} number
   */
  exports.prototype['number'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "ca_sin_itn"
     * @const
     */
    "ca_sin_itn": "ca_sin_itn",
    /**
     * value: "ca_bn"
     * @const
     */
    "ca_bn": "ca_bn",
    /**
     * value: "us_ssn"
     * @const
     */
    "us_ssn": "us_ssn",
    /**
     * value: "gb_nin"
     * @const
     */
    "gb_nin": "gb_nin"  };


  return exports;
}));


