
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AccountId', 'model/BankAccountId', 'model/ExternalId', 'model/FundsTransferBase', 'model/Money'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountId'), require('./BankAccountId'), require('./ExternalId'), require('./FundsTransferBase'), require('./Money'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.DepositRequest = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.AccountId, root.Wealthsimple.BankAccountId, root.Wealthsimple.ExternalId, root.Wealthsimple.FundsTransferBase, root.Wealthsimple.Money);
  }
}(this, function(ApiClient, AccountId, BankAccountId, ExternalId, FundsTransferBase, Money) {
  'use strict';




  /**
   * The DepositRequest model module.
   * @module model/DepositRequest
   * @version 1.0
   */

  /**
   * Constructs a new <code>DepositRequest</code>.
   * @alias module:model/DepositRequest
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
   * Constructs a <code>DepositRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DepositRequest} obj Optional instance to populate.
   * @return {module:model/DepositRequest} The populated <code>DepositRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      FundsTransferBase.constructFromObject(data, obj);
    }
    return obj;
  }


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


