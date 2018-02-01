
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Address', 'model/Citizenships', 'model/CountryCode', 'model/Dependents', 'model/Email', 'model/Employment', 'model/ExternalId', 'model/FullLegalName', 'model/Gender', 'model/Insiders', 'model/Locale', 'model/MaritalStatus', 'model/Name', 'model/PersonBase', 'model/PhoneNumbers', 'model/PoliticallyExposedPeople', 'model/PreferredFirstName', 'model/RegulatedPeople', 'model/SpouseOrCommonLaw', 'model/TaxIdentificationNumbers', 'model/UserId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Address'), require('./Citizenships'), require('./CountryCode'), require('./Dependents'), require('./Email'), require('./Employment'), require('./ExternalId'), require('./FullLegalName'), require('./Gender'), require('./Insiders'), require('./Locale'), require('./MaritalStatus'), require('./Name'), require('./PersonBase'), require('./PhoneNumbers'), require('./PoliticallyExposedPeople'), require('./PreferredFirstName'), require('./RegulatedPeople'), require('./SpouseOrCommonLaw'), require('./TaxIdentificationNumbers'), require('./UserId'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.PersonInput = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.Address, root.Wealthsimple.Citizenships, root.Wealthsimple.CountryCode, root.Wealthsimple.Dependents, root.Wealthsimple.Email, root.Wealthsimple.Employment, root.Wealthsimple.ExternalId, root.Wealthsimple.FullLegalName, root.Wealthsimple.Gender, root.Wealthsimple.Insiders, root.Wealthsimple.Locale, root.Wealthsimple.MaritalStatus, root.Wealthsimple.Name, root.Wealthsimple.PersonBase, root.Wealthsimple.PhoneNumbers, root.Wealthsimple.PoliticallyExposedPeople, root.Wealthsimple.PreferredFirstName, root.Wealthsimple.RegulatedPeople, root.Wealthsimple.SpouseOrCommonLaw, root.Wealthsimple.TaxIdentificationNumbers, root.Wealthsimple.UserId);
  }
}(this, function(ApiClient, Address, Citizenships, CountryCode, Dependents, Email, Employment, ExternalId, FullLegalName, Gender, Insiders, Locale, MaritalStatus, Name, PersonBase, PhoneNumbers, PoliticallyExposedPeople, PreferredFirstName, RegulatedPeople, SpouseOrCommonLaw, TaxIdentificationNumbers, UserId) {
  'use strict';




  /**
   * The PersonInput model module.
   * @module model/PersonInput
   * @version 1.0
   */

  /**
   * Constructs a new <code>PersonInput</code>.
   * @alias module:model/PersonInput
   * @class
   * @implements module:model/PersonBase
   */
  var exports = function() {
    var _this = this;

    PersonBase.call(_this);
  };

  /**
   * Constructs a <code>PersonInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PersonInput} obj Optional instance to populate.
   * @return {module:model/PersonInput} The populated <code>PersonInput</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      PersonBase.constructFromObject(data, obj);
    }
    return obj;
  }


  // Implement PersonBase interface:
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
   * @member {module:model/PreferredFirstName} preferred_first_name
   */
exports.prototype['preferred_first_name'] = undefined;

  /**
   * @member {module:model/FullLegalName} full_legal_name
   */
exports.prototype['full_legal_name'] = undefined;

  /**
   * @member {module:model/Gender} gender
   */
exports.prototype['gender'] = undefined;

  /**
   * @member {Date} date_of_birth
   */
exports.prototype['date_of_birth'] = undefined;

  /**
   * @member {module:model/Citizenships} citizenships
   */
exports.prototype['citizenships'] = undefined;

  /**
   * @member {module:model/MaritalStatus} marital_status
   */
exports.prototype['marital_status'] = undefined;

  /**
   * @member {module:model/SpouseOrCommonLaw} spouse_or_common_law
   */
exports.prototype['spouse_or_common_law'] = undefined;

  /**
   * @member {module:model/TaxIdentificationNumbers} tax_identification_numbers
   */
exports.prototype['tax_identification_numbers'] = undefined;

  /**
   * @member {module:model/Address} residential_address
   */
exports.prototype['residential_address'] = undefined;

  /**
   * @member {module:model/Employment} employment
   */
exports.prototype['employment'] = undefined;

  /**
   * @member {module:model/Name} power_of_attorney
   */
exports.prototype['power_of_attorney'] = undefined;

  /**
   * @member {module:model/Dependents} dependents
   */
exports.prototype['dependents'] = undefined;

  /**
   * @member {module:model/RegulatedPeople} regulated_people
   */
exports.prototype['regulated_people'] = undefined;

  /**
   * @member {module:model/PoliticallyExposedPeople} politically_exposed_people
   */
exports.prototype['politically_exposed_people'] = undefined;

  /**
   * @member {module:model/Insiders} insiders
   */
exports.prototype['insiders'] = undefined;



  return exports;
}));


