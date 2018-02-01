
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
    root.Wealthsimple.EmploymentEmployerInfo = factory(root.Wealthsimple.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The EmploymentEmployerInfo model module.
   * @module model/EmploymentEmployerInfo
   * @version 1.0
   */

  /**
   * Constructs a new <code>EmploymentEmployerInfo</code>.
   * @alias module:model/EmploymentEmployerInfo
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>EmploymentEmployerInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EmploymentEmployerInfo} obj Optional instance to populate.
   * @return {module:model/EmploymentEmployerInfo} The populated <code>EmploymentEmployerInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('employer_name')) {
        var originalValue = data['employer_name'];
        var parsedValue;
        if (typeof originalValue === "object" && String.hasOwnProperty('constructFromObject')) {
          parsedValue = String.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['employer_name'] = parsedValue;
      }
      if (data.hasOwnProperty('employer_industry')) {
        var originalValue = data['employer_industry'];
        var parsedValue;
        if (typeof originalValue === "object" && String.hasOwnProperty('constructFromObject')) {
          parsedValue = String.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['employer_industry'] = parsedValue;
      }
      if (data.hasOwnProperty('position')) {
        var originalValue = data['position'];
        var parsedValue;
        if (typeof originalValue === "object" && String.hasOwnProperty('constructFromObject')) {
          parsedValue = String.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['position'] = parsedValue;
      }
    }
    return obj;
  }

  /**
   * @member {String} employer_name
   */
  exports.prototype['employer_name'] = undefined;
  /**
   * @member {String} employer_industry
   */
  exports.prototype['employer_industry'] = undefined;
  /**
   * @member {String} position
   */
  exports.prototype['position'] = undefined;



  return exports;
}));


