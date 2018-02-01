
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
        obj['marketing'] = ApiClient.convertToType(data['marketing'], 'Boolean');
      }
      if (data.hasOwnProperty('news_and_announcements')) {
        obj['news_and_announcements'] = ApiClient.convertToType(data['news_and_announcements'], 'Boolean');
      }
      if (data.hasOwnProperty('corporate_actions')) {
        obj['corporate_actions'] = ApiClient.convertToType(data['corporate_actions'], 'Boolean');
      }
      if (data.hasOwnProperty('deposits')) {
        obj['deposits'] = ApiClient.convertToType(data['deposits'], 'Boolean');
      }
      if (data.hasOwnProperty('withdrawals')) {
        obj['withdrawals'] = ApiClient.convertToType(data['withdrawals'], 'Boolean');
      }
      if (data.hasOwnProperty('trade_confirms')) {
        obj['trade_confirms'] = ApiClient.convertToType(data['trade_confirms'], 'Boolean');
      }
      if (data.hasOwnProperty('tax_statements')) {
        obj['tax_statements'] = ApiClient.convertToType(data['tax_statements'], 'Boolean');
      }
      if (data.hasOwnProperty('disclosures')) {
        obj['disclosures'] = ApiClient.convertToType(data['disclosures'], 'Boolean');
      }
      if (data.hasOwnProperty('daily_statements')) {
        obj['daily_statements'] = ApiClient.convertToType(data['daily_statements'], 'Boolean');
      }
      if (data.hasOwnProperty('monthly_statements')) {
        obj['monthly_statements'] = ApiClient.convertToType(data['monthly_statements'], 'Boolean');
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


