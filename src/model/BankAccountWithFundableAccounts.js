
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BankAccountBase', 'model/BankAccountCreatedAt', 'model/BankAccountType', 'model/BankAccountUpdatedAt', 'model/ClientId', 'model/CountryCode', 'model/InstitutionNumber', 'model/Verification'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BankAccountBase'), require('./BankAccountCreatedAt'), require('./BankAccountType'), require('./BankAccountUpdatedAt'), require('./ClientId'), require('./CountryCode'), require('./InstitutionNumber'), require('./Verification'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.BankAccountWithFundableAccounts = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.BankAccountBase, root.Wealthsimple.BankAccountCreatedAt, root.Wealthsimple.BankAccountType, root.Wealthsimple.BankAccountUpdatedAt, root.Wealthsimple.ClientId, root.Wealthsimple.CountryCode, root.Wealthsimple.InstitutionNumber, root.Wealthsimple.Verification);
  }
}(this, function(ApiClient, BankAccountBase, BankAccountCreatedAt, BankAccountType, BankAccountUpdatedAt, ClientId, CountryCode, InstitutionNumber, Verification) {
  'use strict';




  /**
   * The BankAccountWithFundableAccounts model module.
   * @module model/BankAccountWithFundableAccounts
   * @version 1.0
   */

  /**
   * Constructs a new <code>BankAccountWithFundableAccounts</code>.
   * @alias module:model/BankAccountWithFundableAccounts
   * @class
   * @implements module:model/BankAccountBase
   */
  var exports = function() {
    var _this = this;

    BankAccountBase.call(_this);



  };

  /**
   * Constructs a <code>BankAccountWithFundableAccounts</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BankAccountWithFundableAccounts} obj Optional instance to populate.
   * @return {module:model/BankAccountWithFundableAccounts} The populated <code>BankAccountWithFundableAccounts</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      BankAccountBase.constructFromObject(data, obj);
      if (data.hasOwnProperty('account_number')) {
        var originalValue = data['account_number'];
        var parsedValue;
        if (typeof originalValue === "object" && String.hasOwnProperty('constructFromObject')) {
          parsedValue = String.constructFromObject(originalValue);
        } else if ('String' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['account_number'] = parsedValue;
      }
      if (data.hasOwnProperty('owners')) {
        var originalValue = data['owners'];
        var parsedValue;
        if (typeof originalValue === "object" && Array.hasOwnProperty('constructFromObject')) {
          parsedValue = Array.constructFromObject(originalValue);
        } else if ('[ClientId]' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, '[ClientId]');
        }
        obj['owners'] = parsedValue;
      }
      if (data.hasOwnProperty('verifications')) {
        var originalValue = data['verifications'];
        var parsedValue;
        if (typeof originalValue === "object" && Array.hasOwnProperty('constructFromObject')) {
          parsedValue = Array.constructFromObject(originalValue);
        } else if ('[Verification]' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, '[Verification]');
        }
        obj['verifications'] = parsedValue;
      }
    }
    return obj;
  }

  /**
   * The encrypted account_number
   * @member {String} account_number
   */
  exports.prototype['account_number'] = undefined;
  /**
   * @member {Array.<module:model/ClientId>} owners
   */
  exports.prototype['owners'] = undefined;
  /**
   * @member {Array.<module:model/Verification>} verifications
   */
  exports.prototype['verifications'] = undefined;

  // Implement BankAccountBase interface:
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


