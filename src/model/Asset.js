
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
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('symbol')) {
        obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
      }
      if (data.hasOwnProperty('country_code')) {
        obj['country_code'] = CountryCode.constructFromObject(data['country_code']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = Currency.constructFromObject(data['currency']);
      }
      if (data.hasOwnProperty('exchange')) {
        obj['exchange'] = ApiClient.convertToType(data['exchange'], 'String');
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


