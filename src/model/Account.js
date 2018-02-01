
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
        var originalValue = data['base_currency'];
        var parsedValue;
        if (typeof originalValue === "object" && Currency.hasOwnProperty('constructFromObject')) {
          parsedValue = Currency.constructFromObject(originalValue);
        } else if ('Currency' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'Currency');
        }
        obj['base_currency'] = parsedValue;
      }
      if (data.hasOwnProperty('status')) {
        var originalValue = data['status'];
        var parsedValue;
        if (typeof originalValue === "object" && String.hasOwnProperty('constructFromObject')) {
          parsedValue = String.constructFromObject(originalValue);
        } else if ('String' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['status'] = parsedValue;
      }
      if (data.hasOwnProperty('owners')) {
        var originalValue = data['owners'];
        var parsedValue;
        if (typeof originalValue === "object" && AccountOwners.hasOwnProperty('constructFromObject')) {
          parsedValue = AccountOwners.constructFromObject(originalValue);
        } else if ('AccountOwners' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'AccountOwners');
        }
        obj['owners'] = parsedValue;
      }
      if (data.hasOwnProperty('net_liquidation')) {
        var originalValue = data['net_liquidation'];
        var parsedValue;
        if (typeof originalValue === "object" && NetLiquidation.hasOwnProperty('constructFromObject')) {
          parsedValue = NetLiquidation.constructFromObject(originalValue);
        } else if ('NetLiquidation' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'NetLiquidation');
        }
        obj['net_liquidation'] = parsedValue;
      }
      if (data.hasOwnProperty('gross_position')) {
        var originalValue = data['gross_position'];
        var parsedValue;
        if (typeof originalValue === "object" && GrossPosition.hasOwnProperty('constructFromObject')) {
          parsedValue = GrossPosition.constructFromObject(originalValue);
        } else if ('GrossPosition' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'GrossPosition');
        }
        obj['gross_position'] = parsedValue;
      }
      if (data.hasOwnProperty('total_deposits')) {
        var originalValue = data['total_deposits'];
        var parsedValue;
        if (typeof originalValue === "object" && TotalDeposits.hasOwnProperty('constructFromObject')) {
          parsedValue = TotalDeposits.constructFromObject(originalValue);
        } else if ('TotalDeposits' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'TotalDeposits');
        }
        obj['total_deposits'] = parsedValue;
      }
      if (data.hasOwnProperty('total_withdrawals')) {
        var originalValue = data['total_withdrawals'];
        var parsedValue;
        if (typeof originalValue === "object" && TotalWithdrawals.hasOwnProperty('constructFromObject')) {
          parsedValue = TotalWithdrawals.constructFromObject(originalValue);
        } else if ('TotalWithdrawals' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'TotalWithdrawals');
        }
        obj['total_withdrawals'] = parsedValue;
      }
      if (data.hasOwnProperty('created_at')) {
        var originalValue = data['created_at'];
        var parsedValue;
        if (typeof originalValue === "object" && AccountCreatedAt.hasOwnProperty('constructFromObject')) {
          parsedValue = AccountCreatedAt.constructFromObject(originalValue);
        } else if ('AccountCreatedAt' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'AccountCreatedAt');
        }
        obj['created_at'] = parsedValue;
      }
      if (data.hasOwnProperty('updated_at')) {
        var originalValue = data['updated_at'];
        var parsedValue;
        if (typeof originalValue === "object" && AccountUpdatedAt.hasOwnProperty('constructFromObject')) {
          parsedValue = AccountUpdatedAt.constructFromObject(originalValue);
        } else if ('AccountUpdatedAt' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'AccountUpdatedAt');
        }
        obj['updated_at'] = parsedValue;
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


