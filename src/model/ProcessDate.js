
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
    root.Wealthsimple.ProcessDate = factory(root.Wealthsimple.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ProcessDate model module.
   * @module model/ProcessDate
   * @version 1.0
   */

  /**
   * Constructs a new <code>ProcessDate</code>.
   * The &#x60;process_date&#x60; is when the transaction was entered into the system.           The process date can apply to the purchase, sale or           transfer of bonds, equities, foreign exchange instruments, commodities, futures, etc. The           process date can be thought of as the trade date.  In           some cases, the process date will be recorded on the previous day, for trades that are           executed very early, or on the next day, in the case of orders that are executed very late           in the day.  A date in [ISO_8601](https://en.wikipedia.org/wiki/ISO_8601) format (i.e. YYYY-MM-DD)
   * @alias module:model/ProcessDate
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ProcessDate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProcessDate} obj Optional instance to populate.
   * @return {module:model/ProcessDate} The populated <code>ProcessDate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

    }
    return obj;
  }




  return exports;
}));


