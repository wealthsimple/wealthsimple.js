
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Address', 'model/Citizenships', 'model/ClientBase', 'model/CountryCode', 'model/Dependents', 'model/Email', 'model/Employment', 'model/ExternalId', 'model/FullLegalName', 'model/Gender', 'model/Insiders', 'model/Locale', 'model/MaritalStatus', 'model/Name', 'model/PhoneNumbers', 'model/PoliticallyExposedPeople', 'model/PreferredFirstName', 'model/RegulatedPeople', 'model/SpouseOrCommonLaw', 'model/TaxIdentificationNumbers', 'model/UserId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Address'), require('./Citizenships'), require('./ClientBase'), require('./CountryCode'), require('./Dependents'), require('./Email'), require('./Employment'), require('./ExternalId'), require('./FullLegalName'), require('./Gender'), require('./Insiders'), require('./Locale'), require('./MaritalStatus'), require('./Name'), require('./PhoneNumbers'), require('./PoliticallyExposedPeople'), require('./PreferredFirstName'), require('./RegulatedPeople'), require('./SpouseOrCommonLaw'), require('./TaxIdentificationNumbers'), require('./UserId'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.PersonBase = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.Address, root.Wealthsimple.Citizenships, root.Wealthsimple.ClientBase, root.Wealthsimple.CountryCode, root.Wealthsimple.Dependents, root.Wealthsimple.Email, root.Wealthsimple.Employment, root.Wealthsimple.ExternalId, root.Wealthsimple.FullLegalName, root.Wealthsimple.Gender, root.Wealthsimple.Insiders, root.Wealthsimple.Locale, root.Wealthsimple.MaritalStatus, root.Wealthsimple.Name, root.Wealthsimple.PhoneNumbers, root.Wealthsimple.PoliticallyExposedPeople, root.Wealthsimple.PreferredFirstName, root.Wealthsimple.RegulatedPeople, root.Wealthsimple.SpouseOrCommonLaw, root.Wealthsimple.TaxIdentificationNumbers, root.Wealthsimple.UserId);
  }
}(this, function(ApiClient, Address, Citizenships, ClientBase, CountryCode, Dependents, Email, Employment, ExternalId, FullLegalName, Gender, Insiders, Locale, MaritalStatus, Name, PhoneNumbers, PoliticallyExposedPeople, PreferredFirstName, RegulatedPeople, SpouseOrCommonLaw, TaxIdentificationNumbers, UserId) {
  'use strict';




  /**
   * The PersonBase model module.
   * @module model/PersonBase
   * @version 1.0
   */

  /**
   * Constructs a new <code>PersonBase</code>.
   * @alias module:model/PersonBase
   * @class
   * @implements module:model/ClientBase
   */
  var exports = function() {
    var _this = this;

    ClientBase.call(_this);
















  };

  /**
   * Constructs a <code>PersonBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PersonBase} obj Optional instance to populate.
   * @return {module:model/PersonBase} The populated <code>PersonBase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      ClientBase.constructFromObject(data, obj);
      if (data.hasOwnProperty('preferred_first_name')) {
        obj['preferred_first_name'] = PreferredFirstName.constructFromObject(data['preferred_first_name']);
      }
      if (data.hasOwnProperty('full_legal_name')) {
        obj['full_legal_name'] = FullLegalName.constructFromObject(data['full_legal_name']);
      }
      if (data.hasOwnProperty('gender')) {
        obj['gender'] = Gender.constructFromObject(data['gender']);
      }
      if (data.hasOwnProperty('date_of_birth')) {
        obj['date_of_birth'] = 'Date'.constructFromObject(data['date_of_birth']);
      }
      if (data.hasOwnProperty('citizenships')) {
        obj['citizenships'] = Citizenships.constructFromObject(data['citizenships']);
      }
      if (data.hasOwnProperty('marital_status')) {
        obj['marital_status'] = MaritalStatus.constructFromObject(data['marital_status']);
      }
      if (data.hasOwnProperty('spouse_or_common_law')) {
        obj['spouse_or_common_law'] = SpouseOrCommonLaw.constructFromObject(data['spouse_or_common_law']);
      }
      if (data.hasOwnProperty('tax_identification_numbers')) {
        obj['tax_identification_numbers'] = TaxIdentificationNumbers.constructFromObject(data['tax_identification_numbers']);
      }
      if (data.hasOwnProperty('residential_address')) {
        obj['residential_address'] = Address.constructFromObject(data['residential_address']);
      }
      if (data.hasOwnProperty('mailing_address')) {
        obj['mailing_address'] = Address.constructFromObject(data['mailing_address']);
      }
      if (data.hasOwnProperty('employment')) {
        obj['employment'] = Employment.constructFromObject(data['employment']);
      }
      if (data.hasOwnProperty('power_of_attorney')) {
        obj['power_of_attorney'] = Name.constructFromObject(data['power_of_attorney']);
      }
      if (data.hasOwnProperty('dependents')) {
        obj['dependents'] = Dependents.constructFromObject(data['dependents']);
      }
      if (data.hasOwnProperty('regulated_people')) {
        obj['regulated_people'] = RegulatedPeople.constructFromObject(data['regulated_people']);
      }
      if (data.hasOwnProperty('politically_exposed_people')) {
        obj['politically_exposed_people'] = PoliticallyExposedPeople.constructFromObject(data['politically_exposed_people']);
      }
      if (data.hasOwnProperty('insiders')) {
        obj['insiders'] = Insiders.constructFromObject(data['insiders']);
      }
    }
    return obj;
  }

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
   * @member {module:model/Address} mailing_address
   */
  exports.prototype['mailing_address'] = undefined;
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


