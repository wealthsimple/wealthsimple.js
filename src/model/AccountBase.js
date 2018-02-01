
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AccountType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountType'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.AccountBase = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.AccountType);
  }
}(this, function(ApiClient, AccountType) {
  'use strict';




  /**
   * The AccountBase model module.
   * @module model/AccountBase
   * @version 1.0
   */

  /**
   * Constructs a new <code>AccountBase</code>.
   * @alias module:model/AccountBase
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>AccountBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountBase} obj Optional instance to populate.
   * @return {module:model/AccountBase} The populated <code>AccountBase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        var originalValue = data['type'];
        var parsedValue;
        if (typeof originalValue === "object" && AccountType.hasOwnProperty('constructFromObject')) {
          parsedValue = AccountType.constructFromObject(originalValue);
        } else if ('AccountType' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'AccountType');
        }
        obj['type'] = parsedValue;
      }
      if (data.hasOwnProperty('nickname')) {
        var originalValue = data['nickname'];
        var parsedValue;
        if (typeof originalValue === "object" && String.hasOwnProperty('constructFromObject')) {
          parsedValue = String.constructFromObject(originalValue);
        } else if ('String' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['nickname'] = parsedValue;
      }
    }
    return obj;
  }

  /**
   * @member {module:model/AccountType} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} nickname
   */
  exports.prototype['nickname'] = undefined;



  return exports;
}));


