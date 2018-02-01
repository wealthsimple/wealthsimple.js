
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AccountId', 'model/AdjustedBookValue', 'model/BookValue', 'model/ContributionValue', 'model/CountryCode', 'model/EffectiveDate', 'model/MarketPrice', 'model/MarketValue', 'model/NetCash', 'model/ProcessDate', 'model/TransactionId', 'model/TransactionType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountId'), require('./AdjustedBookValue'), require('./BookValue'), require('./ContributionValue'), require('./CountryCode'), require('./EffectiveDate'), require('./MarketPrice'), require('./MarketValue'), require('./NetCash'), require('./ProcessDate'), require('./TransactionId'), require('./TransactionType'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.Transaction = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.AccountId, root.Wealthsimple.AdjustedBookValue, root.Wealthsimple.BookValue, root.Wealthsimple.ContributionValue, root.Wealthsimple.CountryCode, root.Wealthsimple.EffectiveDate, root.Wealthsimple.MarketPrice, root.Wealthsimple.MarketValue, root.Wealthsimple.NetCash, root.Wealthsimple.ProcessDate, root.Wealthsimple.TransactionId, root.Wealthsimple.TransactionType);
  }
}(this, function(ApiClient, AccountId, AdjustedBookValue, BookValue, ContributionValue, CountryCode, EffectiveDate, MarketPrice, MarketValue, NetCash, ProcessDate, TransactionId, TransactionType) {
  'use strict';




  /**
   * The Transaction model module.
   * @module model/Transaction
   * @version 1.0
   */

  /**
   * Constructs a new <code>Transaction</code>.
   * @alias module:model/Transaction
   * @class
   */
  var exports = function() {
    var _this = this;


















  };

  /**
   * Constructs a <code>Transaction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Transaction} obj Optional instance to populate.
   * @return {module:model/Transaction} The populated <code>Transaction</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('object')) {
        obj['object'] = ApiClient.convertToType(data['object'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = TransactionId.constructFromObject(data['id']);
      }
      if (data.hasOwnProperty('account_id')) {
        obj['account_id'] = AccountId.constructFromObject(data['account_id']);
      }
      if (data.hasOwnProperty('symbol')) {
        obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
      }
      if (data.hasOwnProperty('country_code')) {
        obj['country_code'] = CountryCode.constructFromObject(data['country_code']);
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = TransactionType.constructFromObject(data['type']);
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
      }
      if (data.hasOwnProperty('fx_rate')) {
        obj['fx_rate'] = ApiClient.convertToType(data['fx_rate'], 'Number');
      }
      if (data.hasOwnProperty('market_value')) {
        obj['market_value'] = MarketValue.constructFromObject(data['market_value']);
      }
      if (data.hasOwnProperty('market_price')) {
        obj['market_price'] = MarketPrice.constructFromObject(data['market_price']);
      }
      if (data.hasOwnProperty('book_value')) {
        obj['book_value'] = BookValue.constructFromObject(data['book_value']);
      }
      if (data.hasOwnProperty('adjusted_book_value')) {
        obj['adjusted_book_value'] = AdjustedBookValue.constructFromObject(data['adjusted_book_value']);
      }
      if (data.hasOwnProperty('net_cash')) {
        obj['net_cash'] = NetCash.constructFromObject(data['net_cash']);
      }
      if (data.hasOwnProperty('contribution_value')) {
        obj['contribution_value'] = ContributionValue.constructFromObject(data['contribution_value']);
      }
      if (data.hasOwnProperty('process_date')) {
        obj['process_date'] = ProcessDate.constructFromObject(data['process_date']);
      }
      if (data.hasOwnProperty('effective_date')) {
        obj['effective_date'] = EffectiveDate.constructFromObject(data['effective_date']);
      }
    }
    return obj;
  }

  /**
   * describes the object type of this entity
   * @member {module:model/Transaction.ObjectEnum} object
   */
  exports.prototype['object'] = undefined;
  /**
   * @member {module:model/TransactionId} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/AccountId} account_id
   */
  exports.prototype['account_id'] = undefined;
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
   * @member {module:model/TransactionType} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Description of activity
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * The change in the number of units held of the Asset in the Account
   * @member {Number} quantity
   */
  exports.prototype['quantity'] = undefined;
  /**
   * The FX rate used when purchasing a foreign-currency based asset from the Account's base currency
   * @member {Number} fx_rate
   */
  exports.prototype['fx_rate'] = undefined;
  /**
   * @member {module:model/MarketValue} market_value
   */
  exports.prototype['market_value'] = undefined;
  /**
   * @member {module:model/MarketPrice} market_price
   */
  exports.prototype['market_price'] = undefined;
  /**
   * @member {module:model/BookValue} book_value
   */
  exports.prototype['book_value'] = undefined;
  /**
   * @member {module:model/AdjustedBookValue} adjusted_book_value
   */
  exports.prototype['adjusted_book_value'] = undefined;
  /**
   * @member {module:model/NetCash} net_cash
   */
  exports.prototype['net_cash'] = undefined;
  /**
   * @member {module:model/ContributionValue} contribution_value
   */
  exports.prototype['contribution_value'] = undefined;
  /**
   * @member {module:model/ProcessDate} process_date
   */
  exports.prototype['process_date'] = undefined;
  /**
   * @member {module:model/EffectiveDate} effective_date
   */
  exports.prototype['effective_date'] = undefined;


  /**
   * Allowed values for the <code>object</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ObjectEnum = {
    /**
     * value: "transaction"
     * @const
     */
    "transaction": "transaction"  };


  return exports;
}));


