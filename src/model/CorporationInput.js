
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Address', 'model/CorporationBase', 'model/CorporationDirectors', 'model/CorporationName', 'model/CorporationOwners', 'model/CountryCode', 'model/Email', 'model/ExternalId', 'model/Locale', 'model/PhoneNumbers', 'model/TaxIdentification', 'model/UserId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Address'), require('./CorporationBase'), require('./CorporationDirectors'), require('./CorporationName'), require('./CorporationOwners'), require('./CountryCode'), require('./Email'), require('./ExternalId'), require('./Locale'), require('./PhoneNumbers'), require('./TaxIdentification'), require('./UserId'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.CorporationInput = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.Address, root.Wealthsimple.CorporationBase, root.Wealthsimple.CorporationDirectors, root.Wealthsimple.CorporationName, root.Wealthsimple.CorporationOwners, root.Wealthsimple.CountryCode, root.Wealthsimple.Email, root.Wealthsimple.ExternalId, root.Wealthsimple.Locale, root.Wealthsimple.PhoneNumbers, root.Wealthsimple.TaxIdentification, root.Wealthsimple.UserId);
  }
}(this, function(ApiClient, Address, CorporationBase, CorporationDirectors, CorporationName, CorporationOwners, CountryCode, Email, ExternalId, Locale, PhoneNumbers, TaxIdentification, UserId) {
  'use strict';




  /**
   * The CorporationInput model module.
   * @module model/CorporationInput
   * @version 1.0
   */

  /**
   * Constructs a new <code>CorporationInput</code>.
   * @alias module:model/CorporationInput
   * @class
   * @implements module:model/CorporationBase
   */
  var exports = function() {
    var _this = this;

    CorporationBase.call(_this);
  };

  /**
   * Constructs a <code>CorporationInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CorporationInput} obj Optional instance to populate.
   * @return {module:model/CorporationInput} The populated <code>CorporationInput</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      CorporationBase.constructFromObject(data, obj);
    }
    return obj;
  }


  // Implement CorporationBase interface:
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
   * @member {module:model/CorporationName} name
   */
exports.prototype['name'] = undefined;

  /**
   * @member {module:model/Address} address
   */
exports.prototype['address'] = undefined;

  /**
   * @member {module:model/CorporationOwners} beneficial_owners
   */
exports.prototype['beneficial_owners'] = undefined;

  /**
   * @member {module:model/TaxIdentification} tax_identification_number
   */
exports.prototype['tax_identification_number'] = undefined;

  /**
   * @member {module:model/CorporationDirectors} directors
   */
exports.prototype['directors'] = undefined;



  return exports;
}));


