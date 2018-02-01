
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.TransactionType = factory(root.Wealthsimple.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class TransactionType.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "buy"
     * @const
     */
    "buy": "buy",
    /**
     * value: "contribution"
     * @const
     */
    "contribution": "contribution",
    /**
     * value: "custodian_fee"
     * @const
     */
    "custodian_fee": "custodian_fee",
    /**
     * value: "deposit"
     * @const
     */
    "deposit": "deposit",
    /**
     * value: "dividend"
     * @const
     */
    "dividend": "dividend",
    /**
     * value: "fee"
     * @const
     */
    "fee": "fee",
    /**
     * value: "forex"
     * @const
     */
    "forex": "forex",
    /**
     * value: "grant"
     * @const
     */
    "grant": "grant",
    /**
     * value: "home_buyers_plan"
     * @const
     */
    "home_buyers_plan": "home_buyers_plan",
    /**
     * value: "hst"
     * @const
     */
    "hst": "hst",
    /**
     * value: "charged_interest"
     * @const
     */
    "charged_interest": "charged_interest",
    /**
     * value: "journal"
     * @const
     */
    "journal": "journal",
    /**
     * value: "non_resident_withholding_tax"
     * @const
     */
    "non_resident_withholding_tax": "non_resident_withholding_tax",
    /**
     * value: "redemption"
     * @const
     */
    "redemption": "redemption",
    /**
     * value: "risk_exposure_fee"
     * @const
     */
    "risk_exposure_fee": "risk_exposure_fee",
    /**
     * value: "refund"
     * @const
     */
    "refund": "refund",
    /**
     * value: "reimbursement"
     * @const
     */
    "reimbursement": "reimbursement",
    /**
     * value: "sell"
     * @const
     */
    "sell": "sell",
    /**
     * value: "stock_distribution"
     * @const
     */
    "stock_distribution": "stock_distribution",
    /**
     * value: "stock_dividend"
     * @const
     */
    "stock_dividend": "stock_dividend",
    /**
     * value: "transfer_in"
     * @const
     */
    "transfer_in": "transfer_in",
    /**
     * value: "transfer_out"
     * @const
     */
    "transfer_out": "transfer_out",
    /**
     * value: "withholding_tax"
     * @const
     */
    "withholding_tax": "withholding_tax",
    /**
     * value: "withdrawal"
     * @const
     */
    "withdrawal": "withdrawal"  };

  /**
   * Returns a <code>TransactionType</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/TransactionType} The enum <code>TransactionType</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));


