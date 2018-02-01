
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Address', 'model/CountryCode', 'model/Email', 'model/ExternalId', 'model/Locale', 'model/PhoneNumbers', 'model/UserId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Address'), require('./CountryCode'), require('./Email'), require('./ExternalId'), require('./Locale'), require('./PhoneNumbers'), require('./UserId'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.ClientBase = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.Address, root.Wealthsimple.CountryCode, root.Wealthsimple.Email, root.Wealthsimple.ExternalId, root.Wealthsimple.Locale, root.Wealthsimple.PhoneNumbers, root.Wealthsimple.UserId);
  }
}(this, function(ApiClient, Address, CountryCode, Email, ExternalId, Locale, PhoneNumbers, UserId) {
  'use strict';




  /**
   * The ClientBase model module.
   * @module model/ClientBase
   * @version 1.0
   */

  /**
   * Constructs a new <code>ClientBase</code>.
   * @alias module:model/ClientBase
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>ClientBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClientBase} obj Optional instance to populate.
   * @return {module:model/ClientBase} The populated <code>ClientBase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('email')) {
        var originalValue = data['email'];
        var parsedValue;
        if (typeof originalValue === "object" && Email.hasOwnProperty('constructFromObject')) {
          parsedValue = Email.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['email'] = parsedValue;
      }
      if (data.hasOwnProperty('phone_numbers')) {
        var originalValue = data['phone_numbers'];
        var parsedValue;
        if (typeof originalValue === "object" && PhoneNumbers.hasOwnProperty('constructFromObject')) {
          parsedValue = PhoneNumbers.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['phone_numbers'] = parsedValue;
      }
      if (data.hasOwnProperty('user_id')) {
        var originalValue = data['user_id'];
        var parsedValue;
        if (typeof originalValue === "object" && UserId.hasOwnProperty('constructFromObject')) {
          parsedValue = UserId.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['user_id'] = parsedValue;
      }
      if (data.hasOwnProperty('external_id')) {
        var originalValue = data['external_id'];
        var parsedValue;
        if (typeof originalValue === "object" && ExternalId.hasOwnProperty('constructFromObject')) {
          parsedValue = ExternalId.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['external_id'] = parsedValue;
      }
      if (data.hasOwnProperty('locale')) {
        var originalValue = data['locale'];
        var parsedValue;
        if (typeof originalValue === "object" && Locale.hasOwnProperty('constructFromObject')) {
          parsedValue = Locale.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['locale'] = parsedValue;
      }
      if (data.hasOwnProperty('mailing_address')) {
        var originalValue = data['mailing_address'];
        var parsedValue;
        if (typeof originalValue === "object" && Address.hasOwnProperty('constructFromObject')) {
          parsedValue = Address.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['mailing_address'] = parsedValue;
      }
      if (data.hasOwnProperty('jurisdictions')) {
        var originalValue = data['jurisdictions'];
        var parsedValue;
        if (typeof originalValue === "object" && Array.hasOwnProperty('constructFromObject')) {
          parsedValue = Array.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['jurisdictions'] = parsedValue;
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Email} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {module:model/PhoneNumbers} phone_numbers
   */
  exports.prototype['phone_numbers'] = undefined;
  /**
   * @member {module:model/UserId} user_id
   */
  exports.prototype['user_id'] = undefined;
  /**
   * @member {module:model/ExternalId} external_id
   */
  exports.prototype['external_id'] = undefined;
  /**
   * @member {module:model/Locale} locale
   */
  exports.prototype['locale'] = undefined;
  /**
   * @member {module:model/Address} mailing_address
   */
  exports.prototype['mailing_address'] = undefined;
  /**
   * @member {Array.<module:model/CountryCode>} jurisdictions
   */
  exports.prototype['jurisdictions'] = undefined;



  return exports;
}));


