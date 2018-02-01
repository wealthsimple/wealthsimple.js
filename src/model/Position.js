
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AccountId', 'model/AccountValue', 'model/AdjustedBookValue', 'model/Asset', 'model/AveragePrice', 'model/BookValue', 'model/PositionMarketPrice', 'model/PositionMarketValue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountId'), require('./AccountValue'), require('./AdjustedBookValue'), require('./Asset'), require('./AveragePrice'), require('./BookValue'), require('./PositionMarketPrice'), require('./PositionMarketValue'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.Position = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.AccountId, root.Wealthsimple.AccountValue, root.Wealthsimple.AdjustedBookValue, root.Wealthsimple.Asset, root.Wealthsimple.AveragePrice, root.Wealthsimple.BookValue, root.Wealthsimple.PositionMarketPrice, root.Wealthsimple.PositionMarketValue);
  }
}(this, function(ApiClient, AccountId, AccountValue, AdjustedBookValue, Asset, AveragePrice, BookValue, PositionMarketPrice, PositionMarketValue) {
  'use strict';




  /**
   * The Position model module.
   * @module model/Position
   * @version 1.0
   */

  /**
   * Constructs a new <code>Position</code>.
   * @alias module:model/Position
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>Position</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Position} obj Optional instance to populate.
   * @return {module:model/Position} The populated <code>Position</code> instance.
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
      if (data.hasOwnProperty('asset')) {
        obj['asset'] = Asset.constructFromObject(data['asset']);
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
      }
      if (data.hasOwnProperty('book_value')) {
        obj['book_value'] = BookValue.constructFromObject(data['book_value']);
      }
      if (data.hasOwnProperty('adjusted_book_value')) {
        obj['adjusted_book_value'] = AdjustedBookValue.constructFromObject(data['adjusted_book_value']);
      }
      if (data.hasOwnProperty('market_value')) {
        obj['market_value'] = PositionMarketValue.constructFromObject(data['market_value']);
      }
      if (data.hasOwnProperty('market_price')) {
        obj['market_price'] = PositionMarketPrice.constructFromObject(data['market_price']);
      }
      if (data.hasOwnProperty('average_price')) {
        obj['average_price'] = AveragePrice.constructFromObject(data['average_price']);
      }
      if (data.hasOwnProperty('account_value')) {
        obj['account_value'] = AccountValue.constructFromObject(data['account_value']);
      }
      if (data.hasOwnProperty('position_date')) {
        obj['position_date'] = 'Date'.constructFromObject(data['position_date']);
      }
    }
    return obj;
  }

  /**
   * The type of this object
   * @member {module:model/Position.ObjectEnum} object
   */
  exports.prototype['object'] = undefined;
  /**
   * @member {module:model/AccountId} account_id
   */
  exports.prototype['account_id'] = undefined;
  /**
   * @member {module:model/Asset} asset
   */
  exports.prototype['asset'] = undefined;
  /**
   * The number of units in the position, some assets support fractional units.
   * @member {Number} quantity
   */
  exports.prototype['quantity'] = undefined;
  /**
   * @member {module:model/BookValue} book_value
   */
  exports.prototype['book_value'] = undefined;
  /**
   * @member {module:model/AdjustedBookValue} adjusted_book_value
   */
  exports.prototype['adjusted_book_value'] = undefined;
  /**
   * @member {module:model/PositionMarketValue} market_value
   */
  exports.prototype['market_value'] = undefined;
  /**
   * @member {module:model/PositionMarketPrice} market_price
   */
  exports.prototype['market_price'] = undefined;
  /**
   * @member {module:model/AveragePrice} average_price
   */
  exports.prototype['average_price'] = undefined;
  /**
   * @member {module:model/AccountValue} account_value
   */
  exports.prototype['account_value'] = undefined;
  /**
   * @member {Date} position_date
   */
  exports.prototype['position_date'] = undefined;


  /**
   * Allowed values for the <code>object</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ObjectEnum = {
    /**
     * value: "position"
     * @const
     */
    "position": "position"  };


  return exports;
}));


