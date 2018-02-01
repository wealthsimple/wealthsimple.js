
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AccountId', 'model/Deposits', 'model/EquityValue', 'model/NetLiquidationValue', 'model/Withdrawals'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountId'), require('./Deposits'), require('./EquityValue'), require('./NetLiquidationValue'), require('./Withdrawals'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.DailyValue = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.AccountId, root.Wealthsimple.Deposits, root.Wealthsimple.EquityValue, root.Wealthsimple.NetLiquidationValue, root.Wealthsimple.Withdrawals);
  }
}(this, function(ApiClient, AccountId, Deposits, EquityValue, NetLiquidationValue, Withdrawals) {
  'use strict';




  /**
   * The DailyValue model module.
   * @module model/DailyValue
   * @version 1.0
   */

  /**
   * Constructs a new <code>DailyValue</code>.
   * @alias module:model/DailyValue
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>DailyValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DailyValue} obj Optional instance to populate.
   * @return {module:model/DailyValue} The populated <code>DailyValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

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
      if (data.hasOwnProperty('account_id')) {
        var originalValue = data['account_id'];
        var parsedValue;
        if (typeof originalValue === "object" && AccountId.hasOwnProperty('constructFromObject')) {
          parsedValue = AccountId.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['account_id'] = parsedValue;
      }
      if (data.hasOwnProperty('net_liquidation_value')) {
        var originalValue = data['net_liquidation_value'];
        var parsedValue;
        if (typeof originalValue === "object" && NetLiquidationValue.hasOwnProperty('constructFromObject')) {
          parsedValue = NetLiquidationValue.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['net_liquidation_value'] = parsedValue;
      }
      if (data.hasOwnProperty('equity_value')) {
        var originalValue = data['equity_value'];
        var parsedValue;
        if (typeof originalValue === "object" && EquityValue.hasOwnProperty('constructFromObject')) {
          parsedValue = EquityValue.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['equity_value'] = parsedValue;
      }
      if (data.hasOwnProperty('total_deposits')) {
        var originalValue = data['total_deposits'];
        var parsedValue;
        if (typeof originalValue === "object" && Deposits.hasOwnProperty('constructFromObject')) {
          parsedValue = Deposits.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['total_deposits'] = parsedValue;
      }
      if (data.hasOwnProperty('total_withdrawals')) {
        var originalValue = data['total_withdrawals'];
        var parsedValue;
        if (typeof originalValue === "object" && Withdrawals.hasOwnProperty('constructFromObject')) {
          parsedValue = Withdrawals.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['total_withdrawals'] = parsedValue;
      }
      if (data.hasOwnProperty('summary_date')) {
        var originalValue = data['summary_date'];
        var parsedValue;
        if (typeof originalValue === "object" && Date.hasOwnProperty('constructFromObject')) {
          parsedValue = Date.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['summary_date'] = parsedValue;
      }
    }
    return obj;
  }

  /**
   * describes the object type of this entity
   * @member {module:model/DailyValue.ObjectEnum} object
   */
  exports.prototype['object'] = undefined;
  /**
   * @member {module:model/AccountId} account_id
   */
  exports.prototype['account_id'] = undefined;
  /**
   * @member {module:model/NetLiquidationValue} net_liquidation_value
   */
  exports.prototype['net_liquidation_value'] = undefined;
  /**
   * @member {module:model/EquityValue} equity_value
   */
  exports.prototype['equity_value'] = undefined;
  /**
   * @member {module:model/Deposits} total_deposits
   */
  exports.prototype['total_deposits'] = undefined;
  /**
   * @member {module:model/Withdrawals} total_withdrawals
   */
  exports.prototype['total_withdrawals'] = undefined;
  /**
   * @member {Date} summary_date
   */
  exports.prototype['summary_date'] = undefined;


  /**
   * Allowed values for the <code>object</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ObjectEnum = {
    /**
     * value: "daily_value"
     * @const
     */
    "value": "daily_value"  };


  return exports;
}));


