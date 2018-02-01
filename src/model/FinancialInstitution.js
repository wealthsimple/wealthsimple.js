
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/FinancialInstitutionId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FinancialInstitutionId'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.FinancialInstitution = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.FinancialInstitutionId);
  }
}(this, function(ApiClient, FinancialInstitutionId) {
  'use strict';




  /**
   * The FinancialInstitution model module.
   * @module model/FinancialInstitution
   * @version 1.0
   */

  /**
   * Constructs a new <code>FinancialInstitution</code>.
   * @alias module:model/FinancialInstitution
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>FinancialInstitution</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FinancialInstitution} obj Optional instance to populate.
   * @return {module:model/FinancialInstitution} The populated <code>FinancialInstitution</code> instance.
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
        if (typeof originalValue === "object" && FinancialInstitutionId.hasOwnProperty('constructFromObject')) {
          parsedValue = FinancialInstitutionId.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['id'] = parsedValue;
      }
      if (data.hasOwnProperty('name')) {
        var originalValue = data['name'];
        var parsedValue;
        if (typeof originalValue === "object" && String.hasOwnProperty('constructFromObject')) {
          parsedValue = String.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['name'] = parsedValue;
      }
      if (data.hasOwnProperty('parent_institution')) {
        var originalValue = data['parent_institution'];
        var parsedValue;
        if (typeof originalValue === "object" && String.hasOwnProperty('constructFromObject')) {
          parsedValue = String.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['parent_institution'] = parsedValue;
      }
      if (data.hasOwnProperty('cuid')) {
        var originalValue = data['cuid'];
        var parsedValue;
        if (typeof originalValue === "object" && String.hasOwnProperty('constructFromObject')) {
          parsedValue = String.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['cuid'] = parsedValue;
      }
      if (data.hasOwnProperty('account_number_format')) {
        var originalValue = data['account_number_format'];
        var parsedValue;
        if (typeof originalValue === "object" && String.hasOwnProperty('constructFromObject')) {
          parsedValue = String.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['account_number_format'] = parsedValue;
      }
      if (data.hasOwnProperty('institution_number')) {
        var originalValue = data['institution_number'];
        var parsedValue;
        if (typeof originalValue === "object" && String.hasOwnProperty('constructFromObject')) {
          parsedValue = String.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['institution_number'] = parsedValue;
      }
    }
    return obj;
  }

  /**
   * describes the object type of this entity
   * @member {module:model/FinancialInstitution.ObjectEnum} object
   */
  exports.prototype['object'] = undefined;
  /**
   * @member {module:model/FinancialInstitutionId} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The name of the Financial Institution
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Useful for grouping financial institutions under a parent banner.
   * @member {String} parent_institution
   */
  exports.prototype['parent_institution'] = undefined;
  /**
   * The customer unit identifier (CUID) is the four letter identifying code CDSX and the ATON system use for communications between CDS and members of the financial community. CDS provides a public directory of CUID codes currently in use.
   * @member {String} cuid
   */
  exports.prototype['cuid'] = undefined;
  /**
   * A simple regex that can be use for verifying the format/length of an account number.
   * @member {String} account_number_format
   */
  exports.prototype['account_number_format'] = undefined;
  /**
   * Canadian Banks have institution numbers to uniquely identify them.  Not applicable to all financial institutions.
   * @member {String} institution_number
   */
  exports.prototype['institution_number'] = undefined;


  /**
   * Allowed values for the <code>object</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ObjectEnum = {
    /**
     * value: "financial_institution"
     * @const
     */
    "institution": "financial_institution"  };


  return exports;
}));


