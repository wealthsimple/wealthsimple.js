
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AccountBase', 'model/AccountCreatedAt', 'model/AccountOwners', 'model/AccountType', 'model/AccountUpdatedAt', 'model/Currency', 'model/GrossPosition', 'model/NetLiquidation', 'model/TotalDeposits', 'model/TotalWithdrawals'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountBase'), require('./AccountCreatedAt'), require('./AccountOwners'), require('./AccountType'), require('./AccountUpdatedAt'), require('./Currency'), require('./GrossPosition'), require('./NetLiquidation'), require('./TotalDeposits'), require('./TotalWithdrawals'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.Account = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.AccountBase, root.Wealthsimple.AccountCreatedAt, root.Wealthsimple.AccountOwners, root.Wealthsimple.AccountType, root.Wealthsimple.AccountUpdatedAt, root.Wealthsimple.Currency, root.Wealthsimple.GrossPosition, root.Wealthsimple.NetLiquidation, root.Wealthsimple.TotalDeposits, root.Wealthsimple.TotalWithdrawals);
  }
}(this, function(ApiClient, AccountBase, AccountCreatedAt, AccountOwners, AccountType, AccountUpdatedAt, Currency, GrossPosition, NetLiquidation, TotalDeposits, TotalWithdrawals) {
  'use strict';




  /**
   * The Account model module.
   * @module model/Account
   * @version 1.0
   */

  /**
   * Constructs a new <code>Account</code>.
   * @alias module:model/Account
   * @class
   * @implements module:model/AccountBase
   */
  var exports = function() {
    var _this = this;

    AccountBase.call(_this);









  };

  /**
   * Constructs a <code>Account</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Account} obj Optional instance to populate.
   * @return {module:model/Account} The populated <code>Account</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      AccountBase.constructFromObject(data, obj);
      if (data.hasOwnProperty('base_currency')) {
        obj['base_currency'] = Currency.constructFromObject(data['base_currency']);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('owners')) {
        obj['owners'] = AccountOwners.constructFromObject(data['owners']);
      }
      if (data.hasOwnProperty('net_liquidation')) {
        obj['net_liquidation'] = NetLiquidation.constructFromObject(data['net_liquidation']);
      }
      if (data.hasOwnProperty('gross_position')) {
        obj['gross_position'] = GrossPosition.constructFromObject(data['gross_position']);
      }
      if (data.hasOwnProperty('total_deposits')) {
        obj['total_deposits'] = TotalDeposits.constructFromObject(data['total_deposits']);
      }
      if (data.hasOwnProperty('total_withdrawals')) {
        obj['total_withdrawals'] = TotalWithdrawals.constructFromObject(data['total_withdrawals']);
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = AccountCreatedAt.constructFromObject(data['created_at']);
      }
      if (data.hasOwnProperty('updated_at')) {
        obj['updated_at'] = AccountUpdatedAt.constructFromObject(data['updated_at']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Currency} base_currency
   */
  exports.prototype['base_currency'] = undefined;
  /**
   * Status of the account
   * @member {module:model/Account.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/AccountOwners} owners
   */
  exports.prototype['owners'] = undefined;
  /**
   * @member {module:model/NetLiquidation} net_liquidation
   */
  exports.prototype['net_liquidation'] = undefined;
  /**
   * @member {module:model/GrossPosition} gross_position
   */
  exports.prototype['gross_position'] = undefined;
  /**
   * @member {module:model/TotalDeposits} total_deposits
   */
  exports.prototype['total_deposits'] = undefined;
  /**
   * @member {module:model/TotalWithdrawals} total_withdrawals
   */
  exports.prototype['total_withdrawals'] = undefined;
  /**
   * @member {module:model/AccountCreatedAt} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * @member {module:model/AccountUpdatedAt} updated_at
   */
  exports.prototype['updated_at'] = undefined;

  // Implement AccountBase interface:
  /**
   * @member {module:model/AccountType} type
   */
exports.prototype['type'] = undefined;

  /**
   * @member {String} nickname
   */
exports.prototype['nickname'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "open"
     * @const
     */
    "open": "open",
    /**
     * value: "closed"
     * @const
     */
    "closed": "closed"  };


  return exports;
}));


