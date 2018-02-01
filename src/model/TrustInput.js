
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Address', 'model/CountryCode', 'model/Email', 'model/ExternalId', 'model/Locale', 'model/PhoneNumbers', 'model/TaxIdentification', 'model/TrustBase', 'model/TrustName', 'model/UserId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Address'), require('./CountryCode'), require('./Email'), require('./ExternalId'), require('./Locale'), require('./PhoneNumbers'), require('./TaxIdentification'), require('./TrustBase'), require('./TrustName'), require('./UserId'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.TrustInput = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.Address, root.Wealthsimple.CountryCode, root.Wealthsimple.Email, root.Wealthsimple.ExternalId, root.Wealthsimple.Locale, root.Wealthsimple.PhoneNumbers, root.Wealthsimple.TaxIdentification, root.Wealthsimple.TrustBase, root.Wealthsimple.TrustName, root.Wealthsimple.UserId);
  }
}(this, function(ApiClient, Address, CountryCode, Email, ExternalId, Locale, PhoneNumbers, TaxIdentification, TrustBase, TrustName, UserId) {
  'use strict';




  /**
   * The TrustInput model module.
   * @module model/TrustInput
   * @version 1.0
   */

  /**
   * Constructs a new <code>TrustInput</code>.
   * @alias module:model/TrustInput
   * @class
   * @implements module:model/TrustBase
   */
  var exports = function() {
    var _this = this;

    TrustBase.call(_this);
  };

  /**
   * Constructs a <code>TrustInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TrustInput} obj Optional instance to populate.
   * @return {module:model/TrustInput} The populated <code>TrustInput</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      TrustBase.constructFromObject(data, obj);
    }
    return obj;
  }


  // Implement TrustBase interface:
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

  /**
   * @member {module:model/TaxIdentification} tax_identification_number
   */
exports.prototype['tax_identification_number'] = undefined;

  /**
   * @member {module:model/TrustName} name
   */
exports.prototype['name'] = undefined;



  return exports;
}));


