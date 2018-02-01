
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AccountId', 'model/BankAccountId', 'model/ExternalId', 'model/FundsTransferBase', 'model/Money', 'model/WithdrawalReason', 'model/WithdrawalType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountId'), require('./BankAccountId'), require('./ExternalId'), require('./FundsTransferBase'), require('./Money'), require('./WithdrawalReason'), require('./WithdrawalType'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.WithdrawalRequest = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.AccountId, root.Wealthsimple.BankAccountId, root.Wealthsimple.ExternalId, root.Wealthsimple.FundsTransferBase, root.Wealthsimple.Money, root.Wealthsimple.WithdrawalReason, root.Wealthsimple.WithdrawalType);
  }
}(this, function(ApiClient, AccountId, BankAccountId, ExternalId, FundsTransferBase, Money, WithdrawalReason, WithdrawalType) {
  'use strict';




  /**
   * The WithdrawalRequest model module.
   * @module model/WithdrawalRequest
   * @version 1.0
   */

  /**
   * Constructs a new <code>WithdrawalRequest</code>.
   * @alias module:model/WithdrawalRequest
   * @class
   * @implements module:model/FundsTransferBase
   * @param bankAccountId {module:model/BankAccountId} 
   * @param accountId {module:model/AccountId} 
   * @param value {module:model/Money} 
   */
  var exports = function(bankAccountId, accountId, value) {
    var _this = this;

    FundsTransferBase.call(_this, bankAccountId, accountId, value);


  };

  /**
   * Constructs a <code>WithdrawalRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WithdrawalRequest} obj Optional instance to populate.
   * @return {module:model/WithdrawalRequest} The populated <code>WithdrawalRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      FundsTransferBase.constructFromObject(data, obj);
      if (data.hasOwnProperty('withdrawal_type')) {
        var originalValue = data['withdrawal_type'];
        var parsedValue;
        if (typeof originalValue === "object" && WithdrawalType.hasOwnProperty('constructFromObject')) {
          parsedValue = WithdrawalType.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['withdrawal_type'] = parsedValue;
      }
      if (data.hasOwnProperty('withdrawal_reason')) {
        var originalValue = data['withdrawal_reason'];
        var parsedValue;
        if (typeof originalValue === "object" && WithdrawalReason.hasOwnProperty('constructFromObject')) {
          parsedValue = WithdrawalReason.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['withdrawal_reason'] = parsedValue;
      }
    }
    return obj;
  }

  /**
   * @member {module:model/WithdrawalType} withdrawal_type
   */
  exports.prototype['withdrawal_type'] = undefined;
  /**
   * @member {module:model/WithdrawalReason} withdrawal_reason
   */
  exports.prototype['withdrawal_reason'] = undefined;

  // Implement FundsTransferBase interface:
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


