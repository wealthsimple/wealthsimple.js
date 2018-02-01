
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
        var originalValue = data['preferred_first_name'];
        var parsedValue;
        if (typeof originalValue === "object" && PreferredFirstName.hasOwnProperty('constructFromObject')) {
          parsedValue = PreferredFirstName.constructFromObject(originalValue);
        } else if ('PreferredFirstName' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'PreferredFirstName');
        }
        obj['preferred_first_name'] = parsedValue;
      }
      if (data.hasOwnProperty('full_legal_name')) {
        var originalValue = data['full_legal_name'];
        var parsedValue;
        if (typeof originalValue === "object" && FullLegalName.hasOwnProperty('constructFromObject')) {
          parsedValue = FullLegalName.constructFromObject(originalValue);
        } else if ('FullLegalName' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'FullLegalName');
        }
        obj['full_legal_name'] = parsedValue;
      }
      if (data.hasOwnProperty('gender')) {
        var originalValue = data['gender'];
        var parsedValue;
        if (typeof originalValue === "object" && Gender.hasOwnProperty('constructFromObject')) {
          parsedValue = Gender.constructFromObject(originalValue);
        } else if ('Gender' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'Gender');
        }
        obj['gender'] = parsedValue;
      }
      if (data.hasOwnProperty('date_of_birth')) {
        var originalValue = data['date_of_birth'];
        var parsedValue;
        if (typeof originalValue === "object" && Date.hasOwnProperty('constructFromObject')) {
          parsedValue = Date.constructFromObject(originalValue);
        } else if ('Date' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'Date');
        }
        obj['date_of_birth'] = parsedValue;
      }
      if (data.hasOwnProperty('citizenships')) {
        var originalValue = data['citizenships'];
        var parsedValue;
        if (typeof originalValue === "object" && Citizenships.hasOwnProperty('constructFromObject')) {
          parsedValue = Citizenships.constructFromObject(originalValue);
        } else if ('Citizenships' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'Citizenships');
        }
        obj['citizenships'] = parsedValue;
      }
      if (data.hasOwnProperty('marital_status')) {
        var originalValue = data['marital_status'];
        var parsedValue;
        if (typeof originalValue === "object" && MaritalStatus.hasOwnProperty('constructFromObject')) {
          parsedValue = MaritalStatus.constructFromObject(originalValue);
        } else if ('MaritalStatus' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'MaritalStatus');
        }
        obj['marital_status'] = parsedValue;
      }
      if (data.hasOwnProperty('spouse_or_common_law')) {
        var originalValue = data['spouse_or_common_law'];
        var parsedValue;
        if (typeof originalValue === "object" && SpouseOrCommonLaw.hasOwnProperty('constructFromObject')) {
          parsedValue = SpouseOrCommonLaw.constructFromObject(originalValue);
        } else if ('SpouseOrCommonLaw' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'SpouseOrCommonLaw');
        }
        obj['spouse_or_common_law'] = parsedValue;
      }
      if (data.hasOwnProperty('tax_identification_numbers')) {
        var originalValue = data['tax_identification_numbers'];
        var parsedValue;
        if (typeof originalValue === "object" && TaxIdentificationNumbers.hasOwnProperty('constructFromObject')) {
          parsedValue = TaxIdentificationNumbers.constructFromObject(originalValue);
        } else if ('TaxIdentificationNumbers' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'TaxIdentificationNumbers');
        }
        obj['tax_identification_numbers'] = parsedValue;
      }
      if (data.hasOwnProperty('residential_address')) {
        var originalValue = data['residential_address'];
        var parsedValue;
        if (typeof originalValue === "object" && Address.hasOwnProperty('constructFromObject')) {
          parsedValue = Address.constructFromObject(originalValue);
        } else if ('Address' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'Address');
        }
        obj['residential_address'] = parsedValue;
      }
      if (data.hasOwnProperty('mailing_address')) {
        var originalValue = data['mailing_address'];
        var parsedValue;
        if (typeof originalValue === "object" && Address.hasOwnProperty('constructFromObject')) {
          parsedValue = Address.constructFromObject(originalValue);
        } else if ('Address' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'Address');
        }
        obj['mailing_address'] = parsedValue;
      }
      if (data.hasOwnProperty('employment')) {
        var originalValue = data['employment'];
        var parsedValue;
        if (typeof originalValue === "object" && Employment.hasOwnProperty('constructFromObject')) {
          parsedValue = Employment.constructFromObject(originalValue);
        } else if ('Employment' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'Employment');
        }
        obj['employment'] = parsedValue;
      }
      if (data.hasOwnProperty('power_of_attorney')) {
        var originalValue = data['power_of_attorney'];
        var parsedValue;
        if (typeof originalValue === "object" && Name.hasOwnProperty('constructFromObject')) {
          parsedValue = Name.constructFromObject(originalValue);
        } else if ('Name' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'Name');
        }
        obj['power_of_attorney'] = parsedValue;
      }
      if (data.hasOwnProperty('dependents')) {
        var originalValue = data['dependents'];
        var parsedValue;
        if (typeof originalValue === "object" && Dependents.hasOwnProperty('constructFromObject')) {
          parsedValue = Dependents.constructFromObject(originalValue);
        } else if ('Dependents' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'Dependents');
        }
        obj['dependents'] = parsedValue;
      }
      if (data.hasOwnProperty('regulated_people')) {
        var originalValue = data['regulated_people'];
        var parsedValue;
        if (typeof originalValue === "object" && RegulatedPeople.hasOwnProperty('constructFromObject')) {
          parsedValue = RegulatedPeople.constructFromObject(originalValue);
        } else if ('RegulatedPeople' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'RegulatedPeople');
        }
        obj['regulated_people'] = parsedValue;
      }
      if (data.hasOwnProperty('politically_exposed_people')) {
        var originalValue = data['politically_exposed_people'];
        var parsedValue;
        if (typeof originalValue === "object" && PoliticallyExposedPeople.hasOwnProperty('constructFromObject')) {
          parsedValue = PoliticallyExposedPeople.constructFromObject(originalValue);
        } else if ('PoliticallyExposedPeople' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'PoliticallyExposedPeople');
        }
        obj['politically_exposed_people'] = parsedValue;
      }
      if (data.hasOwnProperty('insiders')) {
        var originalValue = data['insiders'];
        var parsedValue;
        if (typeof originalValue === "object" && Insiders.hasOwnProperty('constructFromObject')) {
          parsedValue = Insiders.constructFromObject(originalValue);
        } else if ('Insiders' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'Insiders');
        }
        obj['insiders'] = parsedValue;
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


