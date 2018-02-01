
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
        var originalValue = data['name'];
        var parsedValue;
        if (typeof originalValue === "object" && CorporationName.hasOwnProperty('constructFromObject')) {
          parsedValue = CorporationName.constructFromObject(originalValue);
        } else if ('CorporationName' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'CorporationName');
        }
        obj['name'] = parsedValue;
      }
      if (data.hasOwnProperty('address')) {
        var originalValue = data['address'];
        var parsedValue;
        if (typeof originalValue === "object" && Address.hasOwnProperty('constructFromObject')) {
          parsedValue = Address.constructFromObject(originalValue);
        } else if ('Address' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'Address');
        }
        obj['address'] = parsedValue;
      }
      if (data.hasOwnProperty('beneficial_owners')) {
        var originalValue = data['beneficial_owners'];
        var parsedValue;
        if (typeof originalValue === "object" && CorporationOwners.hasOwnProperty('constructFromObject')) {
          parsedValue = CorporationOwners.constructFromObject(originalValue);
        } else if ('CorporationOwners' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'CorporationOwners');
        }
        obj['beneficial_owners'] = parsedValue;
      }
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
      if (data.hasOwnProperty('directors')) {
        var originalValue = data['directors'];
        var parsedValue;
        if (typeof originalValue === "object" && CorporationDirectors.hasOwnProperty('constructFromObject')) {
          parsedValue = CorporationDirectors.constructFromObject(originalValue);
        } else if ('CorporationDirectors' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'CorporationDirectors');
        }
        obj['directors'] = parsedValue;
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


