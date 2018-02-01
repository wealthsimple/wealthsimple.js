
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
    root.Wealthsimple.EffectiveDate = factory(root.Wealthsimple.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The EffectiveDate model module.
   * @module model/EffectiveDate
   * @version 1.0
   */

  /**
   * Constructs a new <code>EffectiveDate</code>.
   * In some context, this known as the &#x60;settlement_date&#x60;.  It is the       date that the transfer between two parties is executed.       The amount of time that passes between the trade date and the settlement           date differs depending on the trading instrument. Some instruments, like certificates of           deposit (CDs), have settlement dates that are the same as the trade date. Mutual funds, on           the other hand, are settled one day after the trade date, while equities and municipal bonds           are settled three days after the trade date.  If the transaction involves interest, the           interest cannot be recorded on the books until the effective date has arrived.  A date in [ISO_8601](https://en.wikipedia.org/wiki/ISO_8601) format (i.e. YYYY-MM-DD)
   * @alias module:model/EffectiveDate
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>EffectiveDate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EffectiveDate} obj Optional instance to populate.
   * @return {module:model/EffectiveDate} The populated <code>EffectiveDate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

    }
    return obj;
  }




  return exports;
}));


