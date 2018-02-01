
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CountryCode', 'model/Currency'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CountryCode'), require('./Currency'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.Asset = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.CountryCode, root.Wealthsimple.Currency);
  }
}(this, function(ApiClient, CountryCode, Currency) {
  'use strict';




  /**
   * The Asset model module.
   * @module model/Asset
   * @version 1.0
   */

  /**
   * Constructs a new <code>Asset</code>.
   * @alias module:model/Asset
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>Asset</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Asset} obj Optional instance to populate.
   * @return {module:model/Asset} The populated <code>Asset</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        var originalValue = data['type'];
        var parsedValue;
        if (typeof originalValue === "object" && String.hasOwnProperty('constructFromObject')) {
          parsedValue = String.constructFromObject(originalValue);
        } else if ('String' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['type'] = parsedValue;
      }
      if (data.hasOwnProperty('symbol')) {
        var originalValue = data['symbol'];
        var parsedValue;
        if (typeof originalValue === "object" && String.hasOwnProperty('constructFromObject')) {
          parsedValue = String.constructFromObject(originalValue);
        } else if ('String' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['symbol'] = parsedValue;
      }
      if (data.hasOwnProperty('country_code')) {
        var originalValue = data['country_code'];
        var parsedValue;
        if (typeof originalValue === "object" && CountryCode.hasOwnProperty('constructFromObject')) {
          parsedValue = CountryCode.constructFromObject(originalValue);
        } else if ('CountryCode' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'CountryCode');
        }
        obj['country_code'] = parsedValue;
      }
      if (data.hasOwnProperty('name')) {
        var originalValue = data['name'];
        var parsedValue;
        if (typeof originalValue === "object" && String.hasOwnProperty('constructFromObject')) {
          parsedValue = String.constructFromObject(originalValue);
        } else if ('String' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['name'] = parsedValue;
      }
      if (data.hasOwnProperty('currency')) {
        var originalValue = data['currency'];
        var parsedValue;
        if (typeof originalValue === "object" && Currency.hasOwnProperty('constructFromObject')) {
          parsedValue = Currency.constructFromObject(originalValue);
        } else if ('Currency' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'Currency');
        }
        obj['currency'] = parsedValue;
      }
      if (data.hasOwnProperty('exchange')) {
        var originalValue = data['exchange'];
        var parsedValue;
        if (typeof originalValue === "object" && String.hasOwnProperty('constructFromObject')) {
          parsedValue = String.constructFromObject(originalValue);
        } else if ('String' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['exchange'] = parsedValue;
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Asset.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * The stock exchange symbol or unique identifier
   * @member {String} symbol
   */
  exports.prototype['symbol'] = undefined;
  /**
   * @member {module:model/CountryCode} country_code
   */
  exports.prototype['country_code'] = undefined;
  /**
   * A short humanly readable name/description of the asset.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/Currency} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * The primary stock exchange where this asset trades, e.g. NYSE
   * @member {String} exchange
   */
  exports.prototype['exchange'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "currency"
     * @const
     */
    "currency": "currency",
    /**
     * value: "equity"
     * @const
     */
    "equity": "equity",
    /**
     * value: "mutual_fund"
     * @const
     */
    "mutual_fund": "mutual_fund",
    /**
     * value: "bond"
     * @const
     */
    "bond": "bond"  };


  return exports;
}));


