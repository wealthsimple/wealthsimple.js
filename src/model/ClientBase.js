
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
        obj['email'] = Email.constructFromObject(data['email']);
      }
      if (data.hasOwnProperty('phone_numbers')) {
        obj['phone_numbers'] = PhoneNumbers.constructFromObject(data['phone_numbers']);
      }
      if (data.hasOwnProperty('user_id')) {
        obj['user_id'] = UserId.constructFromObject(data['user_id']);
      }
      if (data.hasOwnProperty('external_id')) {
        obj['external_id'] = ExternalId.constructFromObject(data['external_id']);
      }
      if (data.hasOwnProperty('locale')) {
        obj['locale'] = Locale.constructFromObject(data['locale']);
      }
      if (data.hasOwnProperty('mailing_address')) {
        obj['mailing_address'] = Address.constructFromObject(data['mailing_address']);
      }
      if (data.hasOwnProperty('jurisdictions')) {
        obj['jurisdictions'] = ApiClient.convertToType(data['jurisdictions'], [CountryCode]);
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


