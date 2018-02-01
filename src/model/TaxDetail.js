
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
        var originalValue = data['gross_amount'];
        var parsedValue;
        if (typeof originalValue === "object" && Money.hasOwnProperty('constructFromObject')) {
          parsedValue = Money.constructFromObject(originalValue);
        } else if ('Money' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'Money');
        }
        obj['gross_amount'] = parsedValue;
      }
      if (data.hasOwnProperty('base_gross_amount')) {
        var originalValue = data['base_gross_amount'];
        var parsedValue;
        if (typeof originalValue === "object" && Money.hasOwnProperty('constructFromObject')) {
          parsedValue = Money.constructFromObject(originalValue);
        } else if ('Money' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'Money');
        }
        obj['base_gross_amount'] = parsedValue;
      }
      if (data.hasOwnProperty('excess_gross_amount')) {
        var originalValue = data['excess_gross_amount'];
        var parsedValue;
        if (typeof originalValue === "object" && Money.hasOwnProperty('constructFromObject')) {
          parsedValue = Money.constructFromObject(originalValue);
        } else if ('Money' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'Money');
        }
        obj['excess_gross_amount'] = parsedValue;
      }
      if (data.hasOwnProperty('net_amount')) {
        var originalValue = data['net_amount'];
        var parsedValue;
        if (typeof originalValue === "object" && Money.hasOwnProperty('constructFromObject')) {
          parsedValue = Money.constructFromObject(originalValue);
        } else if ('Money' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'Money');
        }
        obj['net_amount'] = parsedValue;
      }
      if (data.hasOwnProperty('tax_override_percentage')) {
        var originalValue = data['tax_override_percentage'];
        var parsedValue;
        if (typeof originalValue === "object" && Percent.hasOwnProperty('constructFromObject')) {
          parsedValue = Percent.constructFromObject(originalValue);
        } else if ('Percent' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'Percent');
        }
        obj['tax_override_percentage'] = parsedValue;
      }
      if (data.hasOwnProperty('federal_tax_amount')) {
        var originalValue = data['federal_tax_amount'];
        var parsedValue;
        if (typeof originalValue === "object" && Money.hasOwnProperty('constructFromObject')) {
          parsedValue = Money.constructFromObject(originalValue);
        } else if ('Money' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'Money');
        }
        obj['federal_tax_amount'] = parsedValue;
      }
      if (data.hasOwnProperty('federal_tax_percentage')) {
        var originalValue = data['federal_tax_percentage'];
        var parsedValue;
        if (typeof originalValue === "object" && Percent.hasOwnProperty('constructFromObject')) {
          parsedValue = Percent.constructFromObject(originalValue);
        } else if ('Percent' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'Percent');
        }
        obj['federal_tax_percentage'] = parsedValue;
      }
      if (data.hasOwnProperty('provincial_tax_amount')) {
        var originalValue = data['provincial_tax_amount'];
        var parsedValue;
        if (typeof originalValue === "object" && Money.hasOwnProperty('constructFromObject')) {
          parsedValue = Money.constructFromObject(originalValue);
        } else if ('Money' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'Money');
        }
        obj['provincial_tax_amount'] = parsedValue;
      }
      if (data.hasOwnProperty('provincial_tax_percentage')) {
        var originalValue = data['provincial_tax_percentage'];
        var parsedValue;
        if (typeof originalValue === "object" && Percent.hasOwnProperty('constructFromObject')) {
          parsedValue = Percent.constructFromObject(originalValue);
        } else if ('Percent' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'Percent');
        }
        obj['provincial_tax_percentage'] = parsedValue;
      }
      if (data.hasOwnProperty('province')) {
        var originalValue = data['province'];
        var parsedValue;
        if (typeof originalValue === "object" && Province.hasOwnProperty('constructFromObject')) {
          parsedValue = Province.constructFromObject(originalValue);
        } else if ('Province' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'Province');
        }
        obj['province'] = parsedValue;
      }
      if (data.hasOwnProperty('country')) {
        var originalValue = data['country'];
        var parsedValue;
        if (typeof originalValue === "object" && CountryCode.hasOwnProperty('constructFromObject')) {
          parsedValue = CountryCode.constructFromObject(originalValue);
        } else if ('CountryCode' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'CountryCode');
        }
        obj['country'] = parsedValue;
      }
      if (data.hasOwnProperty('account_type')) {
        var originalValue = data['account_type'];
        var parsedValue;
        if (typeof originalValue === "object" && AccountType.hasOwnProperty('constructFromObject')) {
          parsedValue = AccountType.constructFromObject(originalValue);
        } else if ('AccountType' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'AccountType');
        }
        obj['account_type'] = parsedValue;
      }
      if (data.hasOwnProperty('person_or_spouse_age')) {
        var originalValue = data['person_or_spouse_age'];
        var parsedValue;
        if (typeof originalValue === "object" && Number.hasOwnProperty('constructFromObject')) {
          parsedValue = Number.constructFromObject(originalValue);
        } else if ('Number' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'Number');
        }
        obj['person_or_spouse_age'] = parsedValue;
      }
      if (data.hasOwnProperty('account_market_value')) {
        var originalValue = data['account_market_value'];
        var parsedValue;
        if (typeof originalValue === "object" && Money.hasOwnProperty('constructFromObject')) {
          parsedValue = Money.constructFromObject(originalValue);
        } else if ('Money' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'Money');
        }
        obj['account_market_value'] = parsedValue;
      }
      if (data.hasOwnProperty('account_market_value_previous_year')) {
        var originalValue = data['account_market_value_previous_year'];
        var parsedValue;
        if (typeof originalValue === "object" && Money.hasOwnProperty('constructFromObject')) {
          parsedValue = Money.constructFromObject(originalValue);
        } else if ('Money' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'Money');
        }
        obj['account_market_value_previous_year'] = parsedValue;
      }
      if (data.hasOwnProperty('tax_year')) {
        var originalValue = data['tax_year'];
        var parsedValue;
        if (typeof originalValue === "object" && Number.hasOwnProperty('constructFromObject')) {
          parsedValue = Number.constructFromObject(originalValue);
        } else if ('Number' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'Number');
        }
        obj['tax_year'] = parsedValue;
      }
      if (data.hasOwnProperty('document_url')) {
        var originalValue = data['document_url'];
        var parsedValue;
        if (typeof originalValue === "object" && String.hasOwnProperty('constructFromObject')) {
          parsedValue = String.constructFromObject(originalValue);
        } else if ('String' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['document_url'] = parsedValue;
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


