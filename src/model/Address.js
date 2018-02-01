
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
        obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
      }
      if (data.hasOwnProperty('street_number')) {
        obj['street_number'] = ApiClient.convertToType(data['street_number'], 'String');
      }
      if (data.hasOwnProperty('street_name')) {
        obj['street_name'] = ApiClient.convertToType(data['street_name'], 'String');
      }
      if (data.hasOwnProperty('city')) {
        obj['city'] = ApiClient.convertToType(data['city'], 'String');
      }
      if (data.hasOwnProperty('province_state_region')) {
        obj['province_state_region'] = ApiClient.convertToType(data['province_state_region'], 'String');
      }
      if (data.hasOwnProperty('postal_code')) {
        obj['postal_code'] = ApiClient.convertToType(data['postal_code'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = CountryCode.constructFromObject(data['country']);
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


