
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
        obj['object'] = ApiClient.convertToType(data['object'], 'String');
      }
      if (data.hasOwnProperty('account_id')) {
        obj['account_id'] = AccountId.constructFromObject(data['account_id']);
      }
      if (data.hasOwnProperty('net_liquidation_value')) {
        obj['net_liquidation_value'] = NetLiquidationValue.constructFromObject(data['net_liquidation_value']);
      }
      if (data.hasOwnProperty('equity_value')) {
        obj['equity_value'] = EquityValue.constructFromObject(data['equity_value']);
      }
      if (data.hasOwnProperty('total_deposits')) {
        obj['total_deposits'] = Deposits.constructFromObject(data['total_deposits']);
      }
      if (data.hasOwnProperty('total_withdrawals')) {
        obj['total_withdrawals'] = Withdrawals.constructFromObject(data['total_withdrawals']);
      }
      if (data.hasOwnProperty('summary_date')) {
        obj['summary_date'] = 'Date'.constructFromObject(data['summary_date']);
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


