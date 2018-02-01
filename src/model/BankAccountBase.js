
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BankAccountCreatedAt', 'model/BankAccountType', 'model/BankAccountUpdatedAt', 'model/CountryCode', 'model/InstitutionNumber'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BankAccountCreatedAt'), require('./BankAccountType'), require('./BankAccountUpdatedAt'), require('./CountryCode'), require('./InstitutionNumber'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.BankAccountBase = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.BankAccountCreatedAt, root.Wealthsimple.BankAccountType, root.Wealthsimple.BankAccountUpdatedAt, root.Wealthsimple.CountryCode, root.Wealthsimple.InstitutionNumber);
  }
}(this, function(ApiClient, BankAccountCreatedAt, BankAccountType, BankAccountUpdatedAt, CountryCode, InstitutionNumber) {
  'use strict';




  /**
   * The BankAccountBase model module.
   * @module model/BankAccountBase
   * @version 1.0
   */

  /**
   * Constructs a new <code>BankAccountBase</code>.
   * @alias module:model/BankAccountBase
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>BankAccountBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BankAccountBase} obj Optional instance to populate.
   * @return {module:model/BankAccountBase} The populated <code>BankAccountBase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        var originalValue = data['type'];
        var parsedValue;
        if (typeof originalValue === "object" && BankAccountType.hasOwnProperty('constructFromObject')) {
          parsedValue = BankAccountType.constructFromObject(originalValue);
        } else if ('BankAccountType' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'BankAccountType');
        }
        obj['type'] = parsedValue;
      }
      if (data.hasOwnProperty('corporate')) {
        var originalValue = data['corporate'];
        var parsedValue;
        if (typeof originalValue === "object" && Boolean.hasOwnProperty('constructFromObject')) {
          parsedValue = Boolean.constructFromObject(originalValue);
        } else if ('Boolean' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'Boolean');
        }
        obj['corporate'] = parsedValue;
      }
      if (data.hasOwnProperty('jursidiction')) {
        var originalValue = data['jursidiction'];
        var parsedValue;
        if (typeof originalValue === "object" && CountryCode.hasOwnProperty('constructFromObject')) {
          parsedValue = CountryCode.constructFromObject(originalValue);
        } else if ('CountryCode' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'CountryCode');
        }
        obj['jursidiction'] = parsedValue;
      }
      if (data.hasOwnProperty('account_name')) {
        var originalValue = data['account_name'];
        var parsedValue;
        if (typeof originalValue === "object" && String.hasOwnProperty('constructFromObject')) {
          parsedValue = String.constructFromObject(originalValue);
        } else if ('String' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['account_name'] = parsedValue;
      }
      if (data.hasOwnProperty('institution_number')) {
        var originalValue = data['institution_number'];
        var parsedValue;
        if (typeof originalValue === "object" && InstitutionNumber.hasOwnProperty('constructFromObject')) {
          parsedValue = InstitutionNumber.constructFromObject(originalValue);
        } else if ('InstitutionNumber' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'InstitutionNumber');
        }
        obj['institution_number'] = parsedValue;
      }
      if (data.hasOwnProperty('created_at')) {
        var originalValue = data['created_at'];
        var parsedValue;
        if (typeof originalValue === "object" && BankAccountCreatedAt.hasOwnProperty('constructFromObject')) {
          parsedValue = BankAccountCreatedAt.constructFromObject(originalValue);
        } else if ('BankAccountCreatedAt' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'BankAccountCreatedAt');
        }
        obj['created_at'] = parsedValue;
      }
      if (data.hasOwnProperty('udpated_at')) {
        var originalValue = data['udpated_at'];
        var parsedValue;
        if (typeof originalValue === "object" && BankAccountUpdatedAt.hasOwnProperty('constructFromObject')) {
          parsedValue = BankAccountUpdatedAt.constructFromObject(originalValue);
        } else if ('BankAccountUpdatedAt' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'BankAccountUpdatedAt');
        }
        obj['udpated_at'] = parsedValue;
      }
    }
    return obj;
  }

  /**
   * @member {module:model/BankAccountType} type
   */
  exports.prototype['type'] = undefined;
  /**
   * If the Bank Account is a corporate bank account, it will only be able to fund corporate trading accounts and vice-versa.
   * @member {Boolean} corporate
   */
  exports.prototype['corporate'] = undefined;
  /**
   * @member {module:model/CountryCode} jursidiction
   */
  exports.prototype['jursidiction'] = undefined;
  /**
   * A user-defined (free-form) name for the Bank Account.
   * @member {String} account_name
   */
  exports.prototype['account_name'] = undefined;
  /**
   * @member {module:model/InstitutionNumber} institution_number
   */
  exports.prototype['institution_number'] = undefined;
  /**
   * @member {module:model/BankAccountCreatedAt} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * @member {module:model/BankAccountUpdatedAt} udpated_at
   */
  exports.prototype['udpated_at'] = undefined;



  return exports;
}));


