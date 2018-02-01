
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CountryCode'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CountryCode'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.Address = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.CountryCode);
  }
}(this, function(ApiClient, CountryCode) {
  'use strict';




  /**
   * The Address model module.
   * @module model/Address
   * @version 1.0
   */

  /**
   * Constructs a new <code>Address</code>.
   * @alias module:model/Address
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>Address</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Address} obj Optional instance to populate.
   * @return {module:model/Address} The populated <code>Address</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('unit')) {
        var originalValue = data['unit'];
        var parsedValue;
        if (typeof originalValue === "object" && String.hasOwnProperty('constructFromObject')) {
          parsedValue = String.constructFromObject(originalValue);
        } else if ('String' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['unit'] = parsedValue;
      }
      if (data.hasOwnProperty('street_number')) {
        var originalValue = data['street_number'];
        var parsedValue;
        if (typeof originalValue === "object" && String.hasOwnProperty('constructFromObject')) {
          parsedValue = String.constructFromObject(originalValue);
        } else if ('String' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['street_number'] = parsedValue;
      }
      if (data.hasOwnProperty('street_name')) {
        var originalValue = data['street_name'];
        var parsedValue;
        if (typeof originalValue === "object" && String.hasOwnProperty('constructFromObject')) {
          parsedValue = String.constructFromObject(originalValue);
        } else if ('String' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['street_name'] = parsedValue;
      }
      if (data.hasOwnProperty('city')) {
        var originalValue = data['city'];
        var parsedValue;
        if (typeof originalValue === "object" && String.hasOwnProperty('constructFromObject')) {
          parsedValue = String.constructFromObject(originalValue);
        } else if ('String' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['city'] = parsedValue;
      }
      if (data.hasOwnProperty('province_state_region')) {
        var originalValue = data['province_state_region'];
        var parsedValue;
        if (typeof originalValue === "object" && String.hasOwnProperty('constructFromObject')) {
          parsedValue = String.constructFromObject(originalValue);
        } else if ('String' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['province_state_region'] = parsedValue;
      }
      if (data.hasOwnProperty('postal_code')) {
        var originalValue = data['postal_code'];
        var parsedValue;
        if (typeof originalValue === "object" && String.hasOwnProperty('constructFromObject')) {
          parsedValue = String.constructFromObject(originalValue);
        } else if ('String' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['postal_code'] = parsedValue;
      }
      if (data.hasOwnProperty('country')) {
        var originalValue = data['country'];
        var parsedValue;
        if (typeof originalValue === "object" && CountryCode.hasOwnProperty('constructFromObject')) {
          parsedValue = CountryCode.constructFromObject(originalValue);
        } else if ('CountryCode' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'CountryCode');
        }
        obj['country'] = parsedValue;
      }
    }
    return obj;
  }

  /**
   * @member {String} unit
   */
  exports.prototype['unit'] = undefined;
  /**
   * @member {String} street_number
   */
  exports.prototype['street_number'] = undefined;
  /**
   * @member {String} street_name
   */
  exports.prototype['street_name'] = undefined;
  /**
   * @member {String} city
   */
  exports.prototype['city'] = undefined;
  /**
   * @member {String} province_state_region
   */
  exports.prototype['province_state_region'] = undefined;
  /**
   * @member {String} postal_code
   */
  exports.prototype['postal_code'] = undefined;
  /**
   * @member {module:model/CountryCode} country
   */
  exports.prototype['country'] = undefined;



  return exports;
}));


