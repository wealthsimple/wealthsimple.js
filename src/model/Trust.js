
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Address', 'model/CountryCode', 'model/CreatedAt', 'model/CreatedUpdatedAt', 'model/Email', 'model/ExternalId', 'model/Locale', 'model/PhoneNumbers', 'model/TaxIdentification', 'model/TrustBase', 'model/TrustId', 'model/TrustName', 'model/UpdatedAt', 'model/UserId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Address'), require('./CountryCode'), require('./CreatedAt'), require('./CreatedUpdatedAt'), require('./Email'), require('./ExternalId'), require('./Locale'), require('./PhoneNumbers'), require('./TaxIdentification'), require('./TrustBase'), require('./TrustId'), require('./TrustName'), require('./UpdatedAt'), require('./UserId'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.Trust = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.Address, root.Wealthsimple.CountryCode, root.Wealthsimple.CreatedAt, root.Wealthsimple.CreatedUpdatedAt, root.Wealthsimple.Email, root.Wealthsimple.ExternalId, root.Wealthsimple.Locale, root.Wealthsimple.PhoneNumbers, root.Wealthsimple.TaxIdentification, root.Wealthsimple.TrustBase, root.Wealthsimple.TrustId, root.Wealthsimple.TrustName, root.Wealthsimple.UpdatedAt, root.Wealthsimple.UserId);
  }
}(this, function(ApiClient, Address, CountryCode, CreatedAt, CreatedUpdatedAt, Email, ExternalId, Locale, PhoneNumbers, TaxIdentification, TrustBase, TrustId, TrustName, UpdatedAt, UserId) {
  'use strict';




  /**
   * The Trust model module.
   * @module model/Trust
   * @version 1.0
   */

  /**
   * Constructs a new <code>Trust</code>.
   * @alias module:model/Trust
   * @class
   * @implements module:model/TrustBase
   * @implements module:model/CreatedUpdatedAt
   */
  var exports = function() {
    var _this = this;

    TrustBase.call(_this);
    CreatedUpdatedAt.call(_this);


  };

  /**
   * Constructs a <code>Trust</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Trust} obj Optional instance to populate.
   * @return {module:model/Trust} The populated <code>Trust</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      TrustBase.constructFromObject(data, obj);
      CreatedUpdatedAt.constructFromObject(data, obj);
      if (data.hasOwnProperty('object')) {
        obj['object'] = ApiClient.convertToType(data['object'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = TrustId.constructFromObject(data['id']);
      }
    }
    return obj;
  }

  /**
   * describes the object type of this entity
   * @member {module:model/Trust.ObjectEnum} object
   */
  exports.prototype['object'] = undefined;
  /**
   * @member {module:model/TrustId} id
   */
  exports.prototype['id'] = undefined;

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
     * value: "trust"
     * @const
     */
    "trust": "trust"  };


  return exports;
}));


