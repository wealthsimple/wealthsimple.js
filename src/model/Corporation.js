
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Address', 'model/CorporationBase', 'model/CorporationDirectors', 'model/CorporationId', 'model/CorporationName', 'model/CorporationOwners', 'model/CountryCode', 'model/CreatedAt', 'model/CreatedUpdatedAt', 'model/Email', 'model/ExternalId', 'model/Locale', 'model/PhoneNumbers', 'model/TaxIdentification', 'model/UpdatedAt', 'model/UserId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Address'), require('./CorporationBase'), require('./CorporationDirectors'), require('./CorporationId'), require('./CorporationName'), require('./CorporationOwners'), require('./CountryCode'), require('./CreatedAt'), require('./CreatedUpdatedAt'), require('./Email'), require('./ExternalId'), require('./Locale'), require('./PhoneNumbers'), require('./TaxIdentification'), require('./UpdatedAt'), require('./UserId'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.Corporation = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.Address, root.Wealthsimple.CorporationBase, root.Wealthsimple.CorporationDirectors, root.Wealthsimple.CorporationId, root.Wealthsimple.CorporationName, root.Wealthsimple.CorporationOwners, root.Wealthsimple.CountryCode, root.Wealthsimple.CreatedAt, root.Wealthsimple.CreatedUpdatedAt, root.Wealthsimple.Email, root.Wealthsimple.ExternalId, root.Wealthsimple.Locale, root.Wealthsimple.PhoneNumbers, root.Wealthsimple.TaxIdentification, root.Wealthsimple.UpdatedAt, root.Wealthsimple.UserId);
  }
}(this, function(ApiClient, Address, CorporationBase, CorporationDirectors, CorporationId, CorporationName, CorporationOwners, CountryCode, CreatedAt, CreatedUpdatedAt, Email, ExternalId, Locale, PhoneNumbers, TaxIdentification, UpdatedAt, UserId) {
  'use strict';




  /**
   * The Corporation model module.
   * @module model/Corporation
   * @version 1.0
   */

  /**
   * Constructs a new <code>Corporation</code>.
   * @alias module:model/Corporation
   * @class
   * @implements module:model/CorporationBase
   * @implements module:model/CreatedUpdatedAt
   */
  var exports = function() {
    var _this = this;

    CorporationBase.call(_this);
    CreatedUpdatedAt.call(_this);


  };

  /**
   * Constructs a <code>Corporation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Corporation} obj Optional instance to populate.
   * @return {module:model/Corporation} The populated <code>Corporation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      CorporationBase.constructFromObject(data, obj);
      CreatedUpdatedAt.constructFromObject(data, obj);
      if (data.hasOwnProperty('object')) {
        obj['object'] = ApiClient.convertToType(data['object'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = CorporationId.constructFromObject(data['id']);
      }
    }
    return obj;
  }

  /**
   * describes the object type of this entity
   * @member {module:model/Corporation.ObjectEnum} object
   */
  exports.prototype['object'] = undefined;
  /**
   * @member {module:model/CorporationId} id
   */
  exports.prototype['id'] = undefined;

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

  // Implement CreatedUpdatedAt interface:
  /**
   * @member {module:model/CreatedAt} created_at
   */
exports.prototype['created_at'] = undefined;

  /**
   * @member {module:model/UpdatedAt} updated_at
   */
exports.prototype['updated_at'] = undefined;


  /**
   * Allowed values for the <code>object</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ObjectEnum = {
    /**
     * value: "corporation"
     * @const
     */
    "corporation": "corporation"  };


  return exports;
}));


