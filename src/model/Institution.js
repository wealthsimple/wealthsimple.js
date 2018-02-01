
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/InstitutionId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InstitutionId'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.Institution = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.InstitutionId);
  }
}(this, function(ApiClient, InstitutionId) {
  'use strict';




  /**
   * The Institution model module.
   * @module model/Institution
   * @version 1.0
   */

  /**
   * Constructs a new <code>Institution</code>.
   * @alias module:model/Institution
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Institution</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Institution} obj Optional instance to populate.
   * @return {module:model/Institution} The populated <code>Institution</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        var originalValue = data['id'];
        var parsedValue;
        if (typeof originalValue === "object" && InstitutionId.hasOwnProperty('constructFromObject')) {
          parsedValue = InstitutionId.constructFromObject(originalValue);
        } else if ('InstitutionId' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'InstitutionId');
        }
        obj['id'] = parsedValue;
      }
      if (data.hasOwnProperty('name')) {
        var originalValue = data['name'];
        var parsedValue;
        if (typeof originalValue === "object" && String.hasOwnProperty('constructFromObject')) {
          parsedValue = String.constructFromObject(originalValue);
        } else if ('String' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['name'] = parsedValue;
      }
    }
    return obj;
  }

  /**
   * @member {module:model/InstitutionId} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));


