
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
    root.Wealthsimple.WithdrawalReason = factory(root.Wealthsimple.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class WithdrawalReason.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "buying_home"
     * @const
     */
    "buying_home": "buying_home",
    /**
     * value: "emergency"
     * @const
     */
    "emergency": "emergency",
    /**
     * value: "hardship"
     * @const
     */
    "hardship": "hardship",
    /**
     * value: "home_buyers_plan"
     * @const
     */
    "home_buyers_plan": "home_buyers_plan",
    /**
     * value: "lifelong_learning_plan"
     * @const
     */
    "lifelong_learning_plan": "lifelong_learning_plan",
    /**
     * value: "fluctuation"
     * @const
     */
    "fluctuation": "fluctuation",
    /**
     * value: "retirement_income"
     * @const
     */
    "retirement_income": "retirement_income",
    /**
     * value: "debt_repayment"
     * @const
     */
    "debt_repayment": "debt_repayment",
    /**
     * value: "dissatisfied"
     * @const
     */
    "dissatisfied": "dissatisfied",
    /**
     * value: "other"
     * @const
     */
    "other": "other",
    /**
     * value: "purchase"
     * @const
     */
    "purchase": "purchase"  };

  /**
   * Returns a <code>WithdrawalReason</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/WithdrawalReason} The enum <code>WithdrawalReason</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));


