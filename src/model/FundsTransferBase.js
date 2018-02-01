
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
        obj['bank_account_id'] = BankAccountId.constructFromObject(data['bank_account_id']);
      }
      if (data.hasOwnProperty('account_id')) {
        obj['account_id'] = AccountId.constructFromObject(data['account_id']);
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = Money.constructFromObject(data['value']);
      }
      if (data.hasOwnProperty('post_dated')) {
        obj['post_dated'] = 'Date'.constructFromObject(data['post_dated']);
      }
      if (data.hasOwnProperty('external_id')) {
        obj['external_id'] = ExternalId.constructFromObject(data['external_id']);
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


