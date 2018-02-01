
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AccountType', 'model/CountryCode', 'model/Money', 'model/Percent', 'model/Province'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountType'), require('./CountryCode'), require('./Money'), require('./Percent'), require('./Province'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.TaxDetail = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.AccountType, root.Wealthsimple.CountryCode, root.Wealthsimple.Money, root.Wealthsimple.Percent, root.Wealthsimple.Province);
  }
}(this, function(ApiClient, AccountType, CountryCode, Money, Percent, Province) {
  'use strict';




  /**
   * The TaxDetail model module.
   * @module model/TaxDetail
   * @version 1.0
   */

  /**
   * Constructs a new <code>TaxDetail</code>.
   * @alias module:model/TaxDetail
   * @class
   */
  var exports = function() {
    var _this = this;


















  };

  /**
   * Constructs a <code>TaxDetail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaxDetail} obj Optional instance to populate.
   * @return {module:model/TaxDetail} The populated <code>TaxDetail</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('gross_amount')) {
        obj['gross_amount'] = Money.constructFromObject(data['gross_amount']);
      }
      if (data.hasOwnProperty('base_gross_amount')) {
        obj['base_gross_amount'] = Money.constructFromObject(data['base_gross_amount']);
      }
      if (data.hasOwnProperty('excess_gross_amount')) {
        obj['excess_gross_amount'] = Money.constructFromObject(data['excess_gross_amount']);
      }
      if (data.hasOwnProperty('net_amount')) {
        obj['net_amount'] = Money.constructFromObject(data['net_amount']);
      }
      if (data.hasOwnProperty('tax_override_percentage')) {
        obj['tax_override_percentage'] = Percent.constructFromObject(data['tax_override_percentage']);
      }
      if (data.hasOwnProperty('federal_tax_amount')) {
        obj['federal_tax_amount'] = Money.constructFromObject(data['federal_tax_amount']);
      }
      if (data.hasOwnProperty('federal_tax_percentage')) {
        obj['federal_tax_percentage'] = Percent.constructFromObject(data['federal_tax_percentage']);
      }
      if (data.hasOwnProperty('provincial_tax_amount')) {
        obj['provincial_tax_amount'] = Money.constructFromObject(data['provincial_tax_amount']);
      }
      if (data.hasOwnProperty('provincial_tax_percentage')) {
        obj['provincial_tax_percentage'] = Percent.constructFromObject(data['provincial_tax_percentage']);
      }
      if (data.hasOwnProperty('province')) {
        obj['province'] = Province.constructFromObject(data['province']);
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = CountryCode.constructFromObject(data['country']);
      }
      if (data.hasOwnProperty('account_type')) {
        obj['account_type'] = AccountType.constructFromObject(data['account_type']);
      }
      if (data.hasOwnProperty('person_or_spouse_age')) {
        obj['person_or_spouse_age'] = ApiClient.convertToType(data['person_or_spouse_age'], 'Number');
      }
      if (data.hasOwnProperty('account_market_value')) {
        obj['account_market_value'] = Money.constructFromObject(data['account_market_value']);
      }
      if (data.hasOwnProperty('account_market_value_previous_year')) {
        obj['account_market_value_previous_year'] = Money.constructFromObject(data['account_market_value_previous_year']);
      }
      if (data.hasOwnProperty('tax_year')) {
        obj['tax_year'] = ApiClient.convertToType(data['tax_year'], 'Number');
      }
      if (data.hasOwnProperty('document_url')) {
        obj['document_url'] = ApiClient.convertToType(data['document_url'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Money} gross_amount
   */
  exports.prototype['gross_amount'] = undefined;
  /**
   * @member {module:model/Money} base_gross_amount
   */
  exports.prototype['base_gross_amount'] = undefined;
  /**
   * @member {module:model/Money} excess_gross_amount
   */
  exports.prototype['excess_gross_amount'] = undefined;
  /**
   * @member {module:model/Money} net_amount
   */
  exports.prototype['net_amount'] = undefined;
  /**
   * @member {module:model/Percent} tax_override_percentage
   */
  exports.prototype['tax_override_percentage'] = undefined;
  /**
   * @member {module:model/Money} federal_tax_amount
   */
  exports.prototype['federal_tax_amount'] = undefined;
  /**
   * @member {module:model/Percent} federal_tax_percentage
   */
  exports.prototype['federal_tax_percentage'] = undefined;
  /**
   * @member {module:model/Money} provincial_tax_amount
   */
  exports.prototype['provincial_tax_amount'] = undefined;
  /**
   * @member {module:model/Percent} provincial_tax_percentage
   */
  exports.prototype['provincial_tax_percentage'] = undefined;
  /**
   * @member {module:model/Province} province
   */
  exports.prototype['province'] = undefined;
  /**
   * @member {module:model/CountryCode} country
   */
  exports.prototype['country'] = undefined;
  /**
   * @member {module:model/AccountType} account_type
   */
  exports.prototype['account_type'] = undefined;
  /**
   * @member {Number} person_or_spouse_age
   */
  exports.prototype['person_or_spouse_age'] = undefined;
  /**
   * @member {module:model/Money} account_market_value
   */
  exports.prototype['account_market_value'] = undefined;
  /**
   * @member {module:model/Money} account_market_value_previous_year
   */
  exports.prototype['account_market_value_previous_year'] = undefined;
  /**
   * @member {Number} tax_year
   */
  exports.prototype['tax_year'] = undefined;
  /**
   * @member {String} document_url
   */
  exports.prototype['document_url'] = undefined;



  return exports;
}));


