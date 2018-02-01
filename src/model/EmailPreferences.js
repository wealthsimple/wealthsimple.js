
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
    root.Wealthsimple.EmailPreferences = factory(root.Wealthsimple.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The EmailPreferences model module.
   * @module model/EmailPreferences
   * @version 1.0
   */

  /**
   * Constructs a new <code>EmailPreferences</code>.
   * @alias module:model/EmailPreferences
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>EmailPreferences</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EmailPreferences} obj Optional instance to populate.
   * @return {module:model/EmailPreferences} The populated <code>EmailPreferences</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('marketing')) {
        var originalValue = data['marketing'];
        var parsedValue;
        if (typeof originalValue === "object" && Boolean.hasOwnProperty('constructFromObject')) {
          parsedValue = Boolean.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['marketing'] = parsedValue;
      }
      if (data.hasOwnProperty('news_and_announcements')) {
        var originalValue = data['news_and_announcements'];
        var parsedValue;
        if (typeof originalValue === "object" && Boolean.hasOwnProperty('constructFromObject')) {
          parsedValue = Boolean.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['news_and_announcements'] = parsedValue;
      }
      if (data.hasOwnProperty('corporate_actions')) {
        var originalValue = data['corporate_actions'];
        var parsedValue;
        if (typeof originalValue === "object" && Boolean.hasOwnProperty('constructFromObject')) {
          parsedValue = Boolean.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['corporate_actions'] = parsedValue;
      }
      if (data.hasOwnProperty('deposits')) {
        var originalValue = data['deposits'];
        var parsedValue;
        if (typeof originalValue === "object" && Boolean.hasOwnProperty('constructFromObject')) {
          parsedValue = Boolean.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['deposits'] = parsedValue;
      }
      if (data.hasOwnProperty('withdrawals')) {
        var originalValue = data['withdrawals'];
        var parsedValue;
        if (typeof originalValue === "object" && Boolean.hasOwnProperty('constructFromObject')) {
          parsedValue = Boolean.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['withdrawals'] = parsedValue;
      }
      if (data.hasOwnProperty('trade_confirms')) {
        var originalValue = data['trade_confirms'];
        var parsedValue;
        if (typeof originalValue === "object" && Boolean.hasOwnProperty('constructFromObject')) {
          parsedValue = Boolean.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['trade_confirms'] = parsedValue;
      }
      if (data.hasOwnProperty('tax_statements')) {
        var originalValue = data['tax_statements'];
        var parsedValue;
        if (typeof originalValue === "object" && Boolean.hasOwnProperty('constructFromObject')) {
          parsedValue = Boolean.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['tax_statements'] = parsedValue;
      }
      if (data.hasOwnProperty('disclosures')) {
        var originalValue = data['disclosures'];
        var parsedValue;
        if (typeof originalValue === "object" && Boolean.hasOwnProperty('constructFromObject')) {
          parsedValue = Boolean.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['disclosures'] = parsedValue;
      }
      if (data.hasOwnProperty('daily_statements')) {
        var originalValue = data['daily_statements'];
        var parsedValue;
        if (typeof originalValue === "object" && Boolean.hasOwnProperty('constructFromObject')) {
          parsedValue = Boolean.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['daily_statements'] = parsedValue;
      }
      if (data.hasOwnProperty('monthly_statements')) {
        var originalValue = data['monthly_statements'];
        var parsedValue;
        if (typeof originalValue === "object" && Boolean.hasOwnProperty('constructFromObject')) {
          parsedValue = Boolean.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['monthly_statements'] = parsedValue;
      }
    }
    return obj;
  }

  /**
   * If true, we will send out over email any marketing material related to promotions or tips.
   * @member {Boolean} marketing
   * @default false
   */
  exports.prototype['marketing'] = false;
  /**
   * If true, we will send out over email any news and annoucements
   * @member {Boolean} news_and_announcements
   * @default false
   */
  exports.prototype['news_and_announcements'] = false;
  /**
   * If true, we will send out over email any notifications of corporate actions including dividends.
   * @member {Boolean} corporate_actions
   * @default false
   */
  exports.prototype['corporate_actions'] = false;
  /**
   * If true, we will send out over email whenever a deposit has been received.
   * @member {Boolean} deposits
   * @default false
   */
  exports.prototype['deposits'] = false;
  /**
   * If true, we will send out over email whenever a withdrawal has been initiated.
   * @member {Boolean} withdrawals
   * @default false
   */
  exports.prototype['withdrawals'] = false;
  /**
   * If true, we will send out over email any trades made for the day.
   * @member {Boolean} trade_confirms
   * @default false
   */
  exports.prototype['trade_confirms'] = false;
  /**
   * If true, we will send out tax statements over email.
   * @member {Boolean} tax_statements
   * @default false
   */
  exports.prototype['tax_statements'] = false;
  /**
   * If true, we will send out disclosures over email.
   * @member {Boolean} disclosures
   * @default false
   */
  exports.prototype['disclosures'] = false;
  /**
   * If true, we will send out a daily statement of the client's accounts at the end-of-day.
   * @member {Boolean} daily_statements
   * @default false
   */
  exports.prototype['daily_statements'] = false;
  /**
   * If true, we will send out a monthly statement of the client's accounts at the end-of-month.
   * @member {Boolean} monthly_statements
   * @default false
   */
  exports.prototype['monthly_statements'] = false;



  return exports;
}));


