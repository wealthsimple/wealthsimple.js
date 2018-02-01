
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
        var originalValue = data['object'];
        var parsedValue;
        if (typeof originalValue === "object" && String.hasOwnProperty('constructFromObject')) {
          parsedValue = String.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['object'] = parsedValue;
      }
      if (data.hasOwnProperty('id')) {
        var originalValue = data['id'];
        var parsedValue;
        if (typeof originalValue === "object" && TransactionId.hasOwnProperty('constructFromObject')) {
          parsedValue = TransactionId.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['id'] = parsedValue;
      }
      if (data.hasOwnProperty('account_id')) {
        var originalValue = data['account_id'];
        var parsedValue;
        if (typeof originalValue === "object" && AccountId.hasOwnProperty('constructFromObject')) {
          parsedValue = AccountId.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['account_id'] = parsedValue;
      }
      if (data.hasOwnProperty('symbol')) {
        var originalValue = data['symbol'];
        var parsedValue;
        if (typeof originalValue === "object" && String.hasOwnProperty('constructFromObject')) {
          parsedValue = String.constructFromObject(originalValue);
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
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['country_code'] = parsedValue;
      }
      if (data.hasOwnProperty('type')) {
        var originalValue = data['type'];
        var parsedValue;
        if (typeof originalValue === "object" && TransactionType.hasOwnProperty('constructFromObject')) {
          parsedValue = TransactionType.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['type'] = parsedValue;
      }
      if (data.hasOwnProperty('description')) {
        var originalValue = data['description'];
        var parsedValue;
        if (typeof originalValue === "object" && String.hasOwnProperty('constructFromObject')) {
          parsedValue = String.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['description'] = parsedValue;
      }
      if (data.hasOwnProperty('quantity')) {
        var originalValue = data['quantity'];
        var parsedValue;
        if (typeof originalValue === "object" && Number.hasOwnProperty('constructFromObject')) {
          parsedValue = Number.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['quantity'] = parsedValue;
      }
      if (data.hasOwnProperty('fx_rate')) {
        var originalValue = data['fx_rate'];
        var parsedValue;
        if (typeof originalValue === "object" && Number.hasOwnProperty('constructFromObject')) {
          parsedValue = Number.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['fx_rate'] = parsedValue;
      }
      if (data.hasOwnProperty('market_value')) {
        var originalValue = data['market_value'];
        var parsedValue;
        if (typeof originalValue === "object" && MarketValue.hasOwnProperty('constructFromObject')) {
          parsedValue = MarketValue.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['market_value'] = parsedValue;
      }
      if (data.hasOwnProperty('market_price')) {
        var originalValue = data['market_price'];
        var parsedValue;
        if (typeof originalValue === "object" && MarketPrice.hasOwnProperty('constructFromObject')) {
          parsedValue = MarketPrice.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['market_price'] = parsedValue;
      }
      if (data.hasOwnProperty('book_value')) {
        var originalValue = data['book_value'];
        var parsedValue;
        if (typeof originalValue === "object" && BookValue.hasOwnProperty('constructFromObject')) {
          parsedValue = BookValue.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['book_value'] = parsedValue;
      }
      if (data.hasOwnProperty('adjusted_book_value')) {
        var originalValue = data['adjusted_book_value'];
        var parsedValue;
        if (typeof originalValue === "object" && AdjustedBookValue.hasOwnProperty('constructFromObject')) {
          parsedValue = AdjustedBookValue.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['adjusted_book_value'] = parsedValue;
      }
      if (data.hasOwnProperty('net_cash')) {
        var originalValue = data['net_cash'];
        var parsedValue;
        if (typeof originalValue === "object" && NetCash.hasOwnProperty('constructFromObject')) {
          parsedValue = NetCash.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['net_cash'] = parsedValue;
      }
      if (data.hasOwnProperty('contribution_value')) {
        var originalValue = data['contribution_value'];
        var parsedValue;
        if (typeof originalValue === "object" && ContributionValue.hasOwnProperty('constructFromObject')) {
          parsedValue = ContributionValue.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['contribution_value'] = parsedValue;
      }
      if (data.hasOwnProperty('process_date')) {
        var originalValue = data['process_date'];
        var parsedValue;
        if (typeof originalValue === "object" && ProcessDate.hasOwnProperty('constructFromObject')) {
          parsedValue = ProcessDate.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['process_date'] = parsedValue;
      }
      if (data.hasOwnProperty('effective_date')) {
        var originalValue = data['effective_date'];
        var parsedValue;
        if (typeof originalValue === "object" && EffectiveDate.hasOwnProperty('constructFromObject')) {
          parsedValue = EffectiveDate.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['effective_date'] = parsedValue;
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


