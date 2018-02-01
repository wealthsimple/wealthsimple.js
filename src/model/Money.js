
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Currency'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Currency'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.Money = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.Currency);
  }
}(this, function(ApiClient, Currency) {
  'use strict';




  /**
   * The Money model module.
   * @module model/Money
   * @version 1.0
   */

  /**
   * Constructs a new <code>Money</code>.
   * @alias module:model/Money
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Money</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Money} obj Optional instance to populate.
   * @return {module:model/Money} The populated <code>Money</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('amount')) {
        var originalValue = data['amount'];
        var parsedValue;
        if (typeof originalValue === "object" && Number.hasOwnProperty('constructFromObject')) {
          parsedValue = Number.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['amount'] = parsedValue;
      }
      if (data.hasOwnProperty('currency')) {
        var originalValue = data['currency'];
        var parsedValue;
        if (typeof originalValue === "object" && Currency.hasOwnProperty('constructFromObject')) {
          parsedValue = Currency.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['currency'] = parsedValue;
      }
    }
    return obj;
  }

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


