
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AccountNumber', 'model/BankAccountBase', 'model/BankAccountCreatedAt', 'model/BankAccountType', 'model/BankAccountUpdatedAt', 'model/ClientId', 'model/CountryCode', 'model/InstitutionNumber', 'model/TransitNumber'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountNumber'), require('./BankAccountBase'), require('./BankAccountCreatedAt'), require('./BankAccountType'), require('./BankAccountUpdatedAt'), require('./ClientId'), require('./CountryCode'), require('./InstitutionNumber'), require('./TransitNumber'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.BankAccountInput = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.AccountNumber, root.Wealthsimple.BankAccountBase, root.Wealthsimple.BankAccountCreatedAt, root.Wealthsimple.BankAccountType, root.Wealthsimple.BankAccountUpdatedAt, root.Wealthsimple.ClientId, root.Wealthsimple.CountryCode, root.Wealthsimple.InstitutionNumber, root.Wealthsimple.TransitNumber);
  }
}(this, function(ApiClient, AccountNumber, BankAccountBase, BankAccountCreatedAt, BankAccountType, BankAccountUpdatedAt, ClientId, CountryCode, InstitutionNumber, TransitNumber) {
  'use strict';




  /**
   * The BankAccountInput model module.
   * @module model/BankAccountInput
   * @version 1.0
   */

  /**
   * Constructs a new <code>BankAccountInput</code>.
   * @alias module:model/BankAccountInput
   * @class
   * @implements module:model/BankAccountBase
   */
  var exports = function() {
    var _this = this;

    BankAccountBase.call(_this);



  };

  /**
   * Constructs a <code>BankAccountInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BankAccountInput} obj Optional instance to populate.
   * @return {module:model/BankAccountInput} The populated <code>BankAccountInput</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      BankAccountBase.constructFromObject(data, obj);
      if (data.hasOwnProperty('transit_number')) {
        var originalValue = data['transit_number'];
        var parsedValue;
        if (typeof originalValue === "object" && TransitNumber.hasOwnProperty('constructFromObject')) {
          parsedValue = TransitNumber.constructFromObject(originalValue);
        } else if ('TransitNumber' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'TransitNumber');
        }
        obj['transit_number'] = parsedValue;
      }
      if (data.hasOwnProperty('account_number')) {
        var originalValue = data['account_number'];
        var parsedValue;
        if (typeof originalValue === "object" && AccountNumber.hasOwnProperty('constructFromObject')) {
          parsedValue = AccountNumber.constructFromObject(originalValue);
        } else if ('AccountNumber' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'AccountNumber');
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
    }
    return obj;
  }

  /**
   * @member {module:model/TransitNumber} transit_number
   */
  exports.prototype['transit_number'] = undefined;
  /**
   * @member {module:model/AccountNumber} account_number
   */
  exports.prototype['account_number'] = undefined;
  /**
   * @member {Array.<module:model/ClientId>} owners
   */
  exports.prototype['owners'] = undefined;

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


