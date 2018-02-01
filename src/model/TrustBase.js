
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Address', 'model/ClientBase', 'model/CountryCode', 'model/Email', 'model/ExternalId', 'model/Locale', 'model/PhoneNumbers', 'model/TaxIdentification', 'model/TrustName', 'model/UserId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Address'), require('./ClientBase'), require('./CountryCode'), require('./Email'), require('./ExternalId'), require('./Locale'), require('./PhoneNumbers'), require('./TaxIdentification'), require('./TrustName'), require('./UserId'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.TrustBase = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.Address, root.Wealthsimple.ClientBase, root.Wealthsimple.CountryCode, root.Wealthsimple.Email, root.Wealthsimple.ExternalId, root.Wealthsimple.Locale, root.Wealthsimple.PhoneNumbers, root.Wealthsimple.TaxIdentification, root.Wealthsimple.TrustName, root.Wealthsimple.UserId);
  }
}(this, function(ApiClient, Address, ClientBase, CountryCode, Email, ExternalId, Locale, PhoneNumbers, TaxIdentification, TrustName, UserId) {
  'use strict';




  /**
   * The TrustBase model module.
   * @module model/TrustBase
   * @version 1.0
   */

  /**
   * Constructs a new <code>TrustBase</code>.
   * @alias module:model/TrustBase
   * @class
   * @implements module:model/ClientBase
   */
  var exports = function() {
    var _this = this;

    ClientBase.call(_this);


  };

  /**
   * Constructs a <code>TrustBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TrustBase} obj Optional instance to populate.
   * @return {module:model/TrustBase} The populated <code>TrustBase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      ClientBase.constructFromObject(data, obj);
      if (data.hasOwnProperty('tax_identification_number')) {
        var originalValue = data['tax_identification_number'];
        var parsedValue;
        if (typeof originalValue === "object" && TaxIdentification.hasOwnProperty('constructFromObject')) {
          parsedValue = TaxIdentification.constructFromObject(originalValue);
        } else if ('TaxIdentification' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'TaxIdentification');
        }
        obj['tax_identification_number'] = parsedValue;
      }
      if (data.hasOwnProperty('name')) {
        var originalValue = data['name'];
        var parsedValue;
        if (typeof originalValue === "object" && TrustName.hasOwnProperty('constructFromObject')) {
          parsedValue = TrustName.constructFromObject(originalValue);
        } else if ('TrustName' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'TrustName');
        }
        obj['name'] = parsedValue;
      }
    }
    return obj;
  }

  /**
   * @member {module:model/TaxIdentification} tax_identification_number
   */
  exports.prototype['tax_identification_number'] = undefined;
  /**
   * @member {module:model/TrustName} name
   */
  exports.prototype['name'] = undefined;

  // Implement ClientBase interface:
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


