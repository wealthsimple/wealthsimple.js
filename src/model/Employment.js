
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/EmploymentEmployerInfo', 'model/EmploymentStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EmploymentEmployerInfo'), require('./EmploymentStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.Employment = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.EmploymentEmployerInfo, root.Wealthsimple.EmploymentStatus);
  }
}(this, function(ApiClient, EmploymentEmployerInfo, EmploymentStatus) {
  'use strict';




  /**
   * The Employment model module.
   * @module model/Employment
   * @version 1.0
   */

  /**
   * Constructs a new <code>Employment</code>.
   * @alias module:model/Employment
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Employment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Employment} obj Optional instance to populate.
   * @return {module:model/Employment} The populated <code>Employment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        var originalValue = data['status'];
        var parsedValue;
        if (typeof originalValue === "object" && EmploymentStatus.hasOwnProperty('constructFromObject')) {
          parsedValue = EmploymentStatus.constructFromObject(originalValue);
        } else if ('EmploymentStatus' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'EmploymentStatus');
        }
        obj['status'] = parsedValue;
      }
      if (data.hasOwnProperty('employer_info')) {
        var originalValue = data['employer_info'];
        var parsedValue;
        if (typeof originalValue === "object" && EmploymentEmployerInfo.hasOwnProperty('constructFromObject')) {
          parsedValue = EmploymentEmployerInfo.constructFromObject(originalValue);
        } else if ('EmploymentEmployerInfo' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'EmploymentEmployerInfo');
        }
        obj['employer_info'] = parsedValue;
      }
    }
    return obj;
  }

  /**
   * @member {module:model/EmploymentStatus} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/EmploymentEmployerInfo} employer_info
   */
  exports.prototype['employer_info'] = undefined;



  return exports;
}));


