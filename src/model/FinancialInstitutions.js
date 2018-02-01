
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/FinancialInstitution'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FinancialInstitution'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.FinancialInstitutions = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.FinancialInstitution);
  }
}(this, function(ApiClient, FinancialInstitution) {
  'use strict';




  /**
   * The FinancialInstitutions model module.
   * @module model/FinancialInstitutions
   * @version 1.0
   */

  /**
   * Constructs a new <code>FinancialInstitutions</code>.
   * @alias module:model/FinancialInstitutions
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>FinancialInstitutions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FinancialInstitutions} obj Optional instance to populate.
   * @return {module:model/FinancialInstitutions} The populated <code>FinancialInstitutions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('object')) {
        obj['object'] = ApiClient.convertToType(data['object'], 'String');
      }
      if (data.hasOwnProperty('results')) {
        obj['results'] = ApiClient.convertToType(data['results'], [FinancialInstitution]);
      }
    }
    return obj;
  }

  /**
   * The type of objects in the `results` array
   * @member {module:model/FinancialInstitutions.ObjectEnum} object
   */
  exports.prototype['object'] = undefined;
  /**
   * @member {Array.<module:model/FinancialInstitution>} results
   */
  exports.prototype['results'] = undefined;


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


