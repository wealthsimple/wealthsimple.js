
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Address', 'model/ClientBase', 'model/CorporationDirectors', 'model/CorporationName', 'model/CorporationOwners', 'model/CountryCode', 'model/Email', 'model/ExternalId', 'model/Locale', 'model/PhoneNumbers', 'model/TaxIdentification', 'model/UserId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Address'), require('./ClientBase'), require('./CorporationDirectors'), require('./CorporationName'), require('./CorporationOwners'), require('./CountryCode'), require('./Email'), require('./ExternalId'), require('./Locale'), require('./PhoneNumbers'), require('./TaxIdentification'), require('./UserId'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.CorporationBase = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.Address, root.Wealthsimple.ClientBase, root.Wealthsimple.CorporationDirectors, root.Wealthsimple.CorporationName, root.Wealthsimple.CorporationOwners, root.Wealthsimple.CountryCode, root.Wealthsimple.Email, root.Wealthsimple.ExternalId, root.Wealthsimple.Locale, root.Wealthsimple.PhoneNumbers, root.Wealthsimple.TaxIdentification, root.Wealthsimple.UserId);
  }
}(this, function(ApiClient, Address, ClientBase, CorporationDirectors, CorporationName, CorporationOwners, CountryCode, Email, ExternalId, Locale, PhoneNumbers, TaxIdentification, UserId) {
  'use strict';




  /**
   * The CorporationBase model module.
   * @module model/CorporationBase
   * @version 1.0
   */

  /**
   * Constructs a new <code>CorporationBase</code>.
   * @alias module:model/CorporationBase
   * @class
   * @implements module:model/ClientBase
   */
  var exports = function() {
    var _this = this;

    ClientBase.call(_this);





  };

  /**
   * Constructs a <code>CorporationBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CorporationBase} obj Optional instance to populate.
   * @return {module:model/CorporationBase} The populated <code>CorporationBase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      ClientBase.constructFromObject(data, obj);
      if (data.hasOwnProperty('name')) {
        obj['name'] = CorporationName.constructFromObject(data['name']);
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = Address.constructFromObject(data['address']);
      }
      if (data.hasOwnProperty('beneficial_owners')) {
        obj['beneficial_owners'] = CorporationOwners.constructFromObject(data['beneficial_owners']);
      }
      if (data.hasOwnProperty('tax_identification_number')) {
        obj['tax_identification_number'] = TaxIdentification.constructFromObject(data['tax_identification_number']);
      }
      if (data.hasOwnProperty('directors')) {
        obj['directors'] = CorporationDirectors.constructFromObject(data['directors']);
      }
    }
    return obj;
  }

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


