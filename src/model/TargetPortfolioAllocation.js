
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Asset', 'model/CountryCode', 'model/Currency'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Asset'), require('./CountryCode'), require('./Currency'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.TargetPortfolioAllocation = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.Asset, root.Wealthsimple.CountryCode, root.Wealthsimple.Currency);
  }
}(this, function(ApiClient, Asset, CountryCode, Currency) {
  'use strict';




  /**
   * The TargetPortfolioAllocation model module.
   * @module model/TargetPortfolioAllocation
   * @version 1.0
   */

  /**
   * Constructs a new <code>TargetPortfolioAllocation</code>.
   * @alias module:model/TargetPortfolioAllocation
   * @class
   * @implements module:model/Asset
   */
  var exports = function() {
    var _this = this;

    Asset.call(_this);
  };

  /**
   * Constructs a <code>TargetPortfolioAllocation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TargetPortfolioAllocation} obj Optional instance to populate.
   * @return {module:model/TargetPortfolioAllocation} The populated <code>TargetPortfolioAllocation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      Asset.constructFromObject(data, obj);
    }
    return obj;
  }


  // Implement Asset interface:
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



  return exports;
}));


