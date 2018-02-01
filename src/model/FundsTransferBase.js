
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AccountId', 'model/BankAccountId', 'model/ExternalId', 'model/Money'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountId'), require('./BankAccountId'), require('./ExternalId'), require('./Money'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.FundsTransferBase = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.AccountId, root.Wealthsimple.BankAccountId, root.Wealthsimple.ExternalId, root.Wealthsimple.Money);
  }
}(this, function(ApiClient, AccountId, BankAccountId, ExternalId, Money) {
  'use strict';




  /**
   * The FundsTransferBase model module.
   * @module model/FundsTransferBase
   * @version 1.0
   */

  /**
   * Constructs a new <code>FundsTransferBase</code>.
   * @alias module:model/FundsTransferBase
   * @class
   * @param bankAccountId {module:model/BankAccountId} 
   * @param accountId {module:model/AccountId} 
   * @param value {module:model/Money} 
   */
  var exports = function(bankAccountId, accountId, value) {
    var _this = this;

    _this['bank_account_id'] = bankAccountId;
    _this['account_id'] = accountId;
    _this['value'] = value;


  };

  /**
   * Constructs a <code>FundsTransferBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FundsTransferBase} obj Optional instance to populate.
   * @return {module:model/FundsTransferBase} The populated <code>FundsTransferBase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('bank_account_id')) {
        var originalValue = data['bank_account_id'];
        var parsedValue;
        if (typeof originalValue === "object" && BankAccountId.hasOwnProperty('constructFromObject')) {
          parsedValue = BankAccountId.constructFromObject(originalValue);
        } else if ('BankAccountId' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'BankAccountId');
        }
        obj['bank_account_id'] = parsedValue;
      }
      if (data.hasOwnProperty('account_id')) {
        var originalValue = data['account_id'];
        var parsedValue;
        if (typeof originalValue === "object" && AccountId.hasOwnProperty('constructFromObject')) {
          parsedValue = AccountId.constructFromObject(originalValue);
        } else if ('AccountId' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'AccountId');
        }
        obj['account_id'] = parsedValue;
      }
      if (data.hasOwnProperty('value')) {
        var originalValue = data['value'];
        var parsedValue;
        if (typeof originalValue === "object" && Money.hasOwnProperty('constructFromObject')) {
          parsedValue = Money.constructFromObject(originalValue);
        } else if ('Money' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'Money');
        }
        obj['value'] = parsedValue;
      }
      if (data.hasOwnProperty('post_dated')) {
        var originalValue = data['post_dated'];
        var parsedValue;
        if (typeof originalValue === "object" && Date.hasOwnProperty('constructFromObject')) {
          parsedValue = Date.constructFromObject(originalValue);
        } else if ('Date' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'Date');
        }
        obj['post_dated'] = parsedValue;
      }
      if (data.hasOwnProperty('external_id')) {
        var originalValue = data['external_id'];
        var parsedValue;
        if (typeof originalValue === "object" && ExternalId.hasOwnProperty('constructFromObject')) {
          parsedValue = ExternalId.constructFromObject(originalValue);
        } else if ('ExternalId' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'ExternalId');
        }
        obj['external_id'] = parsedValue;
      }
    }
    return obj;
  }

  /**
   * @member {module:model/BankAccountId} bank_account_id
   */
  exports.prototype['bank_account_id'] = undefined;
  /**
   * @member {module:model/AccountId} account_id
   */
  exports.prototype['account_id'] = undefined;
  /**
   * @member {module:model/Money} value
   */
  exports.prototype['value'] = undefined;
  /**
   * @member {Date} post_dated
   */
  exports.prototype['post_dated'] = undefined;
  /**
   * @member {module:model/ExternalId} external_id
   */
  exports.prototype['external_id'] = undefined;



  return exports;
}));


