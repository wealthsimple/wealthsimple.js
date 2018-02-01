
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Email', 'model/Password'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Email'), require('./Password'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.UserBase = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.Email, root.Wealthsimple.Password);
  }
}(this, function(ApiClient, Email, Password) {
  'use strict';




  /**
   * The UserBase model module.
   * @module model/UserBase
   * @version 1.0
   */

  /**
   * Constructs a new <code>UserBase</code>.
   * @alias module:model/UserBase
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>UserBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserBase} obj Optional instance to populate.
   * @return {module:model/UserBase} The populated <code>UserBase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('email')) {
        var originalValue = data['email'];
        var parsedValue;
        if (typeof originalValue === "object" && Email.hasOwnProperty('constructFromObject')) {
          parsedValue = Email.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['email'] = parsedValue;
      }
      if (data.hasOwnProperty('password')) {
        var originalValue = data['password'];
        var parsedValue;
        if (typeof originalValue === "object" && Password.hasOwnProperty('constructFromObject')) {
          parsedValue = Password.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['password'] = parsedValue;
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Email} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {module:model/Password} password
   */
  exports.prototype['password'] = undefined;



  return exports;
}));


