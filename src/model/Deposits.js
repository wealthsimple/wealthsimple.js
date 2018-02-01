
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Currency', 'model/Money'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Currency'), require('./Money'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.Deposits = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.Currency, root.Wealthsimple.Money);
  }
}(this, function(ApiClient, Currency, Money) {
  'use strict';




  /**
   * The Deposits model module.
   * @module model/Deposits
   * @version 1.0
   */

  /**
   * Constructs a new <code>Deposits</code>.
   * @alias module:model/Deposits
   * @class
   * @implements module:model/Money
   */
  var exports = function() {
    var _this = this;

    Money.call(_this);
  };

  /**
   * Constructs a <code>Deposits</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Deposits} obj Optional instance to populate.
   * @return {module:model/Deposits} The populated <code>Deposits</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      Money.constructFromObject(data, obj);
    }
    return obj;
  }


  // Implement Money interface:
  /**
   * @member {Number} amount
   */
exports.prototype['amount'] = undefined;

  /**
   * @member {module:model/Currency} currency
   */
exports.prototype['currency'] = undefined;



  return exports;
}));


