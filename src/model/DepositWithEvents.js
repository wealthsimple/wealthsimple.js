
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AccountId', 'model/BankAccountId', 'model/CreatedAt', 'model/Deposit', 'model/ExternalId', 'model/FundsTransferEvent', 'model/FundsTransferId', 'model/FundsTransferRejectReason', 'model/FundsTransferScheduleId', 'model/FundsTransferStatus', 'model/FundsTransferType', 'model/Money', 'model/UpdatedAt'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountId'), require('./BankAccountId'), require('./CreatedAt'), require('./Deposit'), require('./ExternalId'), require('./FundsTransferEvent'), require('./FundsTransferId'), require('./FundsTransferRejectReason'), require('./FundsTransferScheduleId'), require('./FundsTransferStatus'), require('./FundsTransferType'), require('./Money'), require('./UpdatedAt'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.DepositWithEvents = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.AccountId, root.Wealthsimple.BankAccountId, root.Wealthsimple.CreatedAt, root.Wealthsimple.Deposit, root.Wealthsimple.ExternalId, root.Wealthsimple.FundsTransferEvent, root.Wealthsimple.FundsTransferId, root.Wealthsimple.FundsTransferRejectReason, root.Wealthsimple.FundsTransferScheduleId, root.Wealthsimple.FundsTransferStatus, root.Wealthsimple.FundsTransferType, root.Wealthsimple.Money, root.Wealthsimple.UpdatedAt);
  }
}(this, function(ApiClient, AccountId, BankAccountId, CreatedAt, Deposit, ExternalId, FundsTransferEvent, FundsTransferId, FundsTransferRejectReason, FundsTransferScheduleId, FundsTransferStatus, FundsTransferType, Money, UpdatedAt) {
  'use strict';




  /**
   * The DepositWithEvents model module.
   * @module model/DepositWithEvents
   * @version 1.0
   */

  /**
   * Constructs a new <code>DepositWithEvents</code>.
   * @alias module:model/DepositWithEvents
   * @class
   * @implements module:model/Deposit
   * @param bankAccountId {module:model/BankAccountId} 
   * @param accountId {module:model/AccountId} 
   * @param value {module:model/Money} 
   */
  var exports = function(bankAccountId, accountId, value) {
    var _this = this;

    Deposit.call(_this, bankAccountId, accountId, value);

  };

  /**
   * Constructs a <code>DepositWithEvents</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DepositWithEvents} obj Optional instance to populate.
   * @return {module:model/DepositWithEvents} The populated <code>DepositWithEvents</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      Deposit.constructFromObject(data, obj);
      if (data.hasOwnProperty('events')) {
        var originalValue = data['events'];
        var parsedValue;
        if (typeof originalValue === "object" && Array.hasOwnProperty('constructFromObject')) {
          parsedValue = Array.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['events'] = parsedValue;
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/FundsTransferEvent>} events
   */
  exports.prototype['events'] = undefined;

  // Implement Deposit interface:
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

  /**
   * @member {module:model/CreatedAt} created_at
   */
exports.prototype['created_at'] = undefined;

  /**
   * @member {module:model/UpdatedAt} updated_at
   */
exports.prototype['updated_at'] = undefined;

  /**
   * @member {module:model/FundsTransferId} id
   */
exports.prototype['id'] = undefined;

  /**
   * @member {module:model/FundsTransferType} type
   */
exports.prototype['type'] = undefined;

  /**
   * @member {module:model/FundsTransferStatus} status
   */
exports.prototype['status'] = undefined;

  /**
   * @member {module:model/FundsTransferScheduleId} funds_transfer_schedule_id
   */
exports.prototype['funds_transfer_schedule_id'] = undefined;

  /**
   * @member {module:model/FundsTransferRejectReason} reject_reason
   */
exports.prototype['reject_reason'] = undefined;



  return exports;
}));


