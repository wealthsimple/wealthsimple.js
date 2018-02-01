
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AccountId', 'model/BankAccountId', 'model/CreatedAt', 'model/CreatedUpdatedAt', 'model/ExternalId', 'model/FundsTransferBase', 'model/FundsTransferId', 'model/FundsTransferRejectReason', 'model/FundsTransferScheduleId', 'model/FundsTransferStatus', 'model/FundsTransferType', 'model/Money', 'model/TaxDetail', 'model/UpdatedAt', 'model/WithdrawalReason', 'model/WithdrawalType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountId'), require('./BankAccountId'), require('./CreatedAt'), require('./CreatedUpdatedAt'), require('./ExternalId'), require('./FundsTransferBase'), require('./FundsTransferId'), require('./FundsTransferRejectReason'), require('./FundsTransferScheduleId'), require('./FundsTransferStatus'), require('./FundsTransferType'), require('./Money'), require('./TaxDetail'), require('./UpdatedAt'), require('./WithdrawalReason'), require('./WithdrawalType'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.Withdrawal = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.AccountId, root.Wealthsimple.BankAccountId, root.Wealthsimple.CreatedAt, root.Wealthsimple.CreatedUpdatedAt, root.Wealthsimple.ExternalId, root.Wealthsimple.FundsTransferBase, root.Wealthsimple.FundsTransferId, root.Wealthsimple.FundsTransferRejectReason, root.Wealthsimple.FundsTransferScheduleId, root.Wealthsimple.FundsTransferStatus, root.Wealthsimple.FundsTransferType, root.Wealthsimple.Money, root.Wealthsimple.TaxDetail, root.Wealthsimple.UpdatedAt, root.Wealthsimple.WithdrawalReason, root.Wealthsimple.WithdrawalType);
  }
}(this, function(ApiClient, AccountId, BankAccountId, CreatedAt, CreatedUpdatedAt, ExternalId, FundsTransferBase, FundsTransferId, FundsTransferRejectReason, FundsTransferScheduleId, FundsTransferStatus, FundsTransferType, Money, TaxDetail, UpdatedAt, WithdrawalReason, WithdrawalType) {
  'use strict';




  /**
   * The Withdrawal model module.
   * @module model/Withdrawal
   * @version 1.0
   */

  /**
   * Constructs a new <code>Withdrawal</code>.
   * @alias module:model/Withdrawal
   * @class
   * @implements module:model/FundsTransferBase
   * @implements module:model/CreatedUpdatedAt
   * @param bankAccountId {module:model/BankAccountId} 
   * @param accountId {module:model/AccountId} 
   * @param value {module:model/Money} 
   */
  var exports = function(bankAccountId, accountId, value) {
    var _this = this;

    FundsTransferBase.call(_this, bankAccountId, accountId, value);
    CreatedUpdatedAt.call(_this);









  };

  /**
   * Constructs a <code>Withdrawal</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Withdrawal} obj Optional instance to populate.
   * @return {module:model/Withdrawal} The populated <code>Withdrawal</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      FundsTransferBase.constructFromObject(data, obj);
      CreatedUpdatedAt.constructFromObject(data, obj);
      if (data.hasOwnProperty('object')) {
        var originalValue = data['object'];
        var parsedValue;
        if (typeof originalValue === "object" && String.hasOwnProperty('constructFromObject')) {
          parsedValue = String.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['object'] = parsedValue;
      }
      if (data.hasOwnProperty('id')) {
        var originalValue = data['id'];
        var parsedValue;
        if (typeof originalValue === "object" && FundsTransferId.hasOwnProperty('constructFromObject')) {
          parsedValue = FundsTransferId.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['id'] = parsedValue;
      }
      if (data.hasOwnProperty('type')) {
        var originalValue = data['type'];
        var parsedValue;
        if (typeof originalValue === "object" && FundsTransferType.hasOwnProperty('constructFromObject')) {
          parsedValue = FundsTransferType.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['type'] = parsedValue;
      }
      if (data.hasOwnProperty('status')) {
        var originalValue = data['status'];
        var parsedValue;
        if (typeof originalValue === "object" && FundsTransferStatus.hasOwnProperty('constructFromObject')) {
          parsedValue = FundsTransferStatus.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['status'] = parsedValue;
      }
      if (data.hasOwnProperty('funds_transfer_schedule_id')) {
        var originalValue = data['funds_transfer_schedule_id'];
        var parsedValue;
        if (typeof originalValue === "object" && FundsTransferScheduleId.hasOwnProperty('constructFromObject')) {
          parsedValue = FundsTransferScheduleId.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['funds_transfer_schedule_id'] = parsedValue;
      }
      if (data.hasOwnProperty('reject_reason')) {
        var originalValue = data['reject_reason'];
        var parsedValue;
        if (typeof originalValue === "object" && FundsTransferRejectReason.hasOwnProperty('constructFromObject')) {
          parsedValue = FundsTransferRejectReason.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['reject_reason'] = parsedValue;
      }
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
      if (data.hasOwnProperty('tax_detail')) {
        var originalValue = data['tax_detail'];
        var parsedValue;
        if (typeof originalValue === "object" && TaxDetail.hasOwnProperty('constructFromObject')) {
          parsedValue = TaxDetail.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['tax_detail'] = parsedValue;
      }
    }
    return obj;
  }

  /**
   * describes the object type of this entity
   * @member {module:model/Withdrawal.ObjectEnum} object
   */
  exports.prototype['object'] = undefined;
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
  /**
   * @member {module:model/WithdrawalType} withdrawal_type
   */
  exports.prototype['withdrawal_type'] = undefined;
  /**
   * @member {module:model/WithdrawalReason} withdrawal_reason
   */
  exports.prototype['withdrawal_reason'] = undefined;
  /**
   * @member {module:model/TaxDetail} tax_detail
   */
  exports.prototype['tax_detail'] = undefined;

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

  // Implement CreatedUpdatedAt interface:
  /**
   * @member {module:model/CreatedAt} created_at
   */
exports.prototype['created_at'] = undefined;

  /**
   * @member {module:model/UpdatedAt} updated_at
   */
exports.prototype['updated_at'] = undefined;


  /**
   * Allowed values for the <code>object</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ObjectEnum = {
    /**
     * value: "withdrawal"
     * @const
     */
    "withdrawal": "withdrawal"  };


  return exports;
}));


