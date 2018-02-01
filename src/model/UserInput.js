
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Email', 'model/Password', 'model/UserBase'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Email'), require('./Password'), require('./UserBase'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.UserInput = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.Email, root.Wealthsimple.Password, root.Wealthsimple.UserBase);
  }
}(this, function(ApiClient, Email, Password, UserBase) {
  'use strict';




  /**
   * The UserInput model module.
   * @module model/UserInput
   * @version 1.0
   */

  /**
   * Constructs a new <code>UserInput</code>.
   * @alias module:model/UserInput
   * @class
   * @implements module:model/UserBase
   */
  var exports = function() {
    var _this = this;

    UserBase.call(_this);
  };

  /**
   * Constructs a <code>UserInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserInput} obj Optional instance to populate.
   * @return {module:model/UserInput} The populated <code>UserInput</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      UserBase.constructFromObject(data, obj);
    }
    return obj;
  }


  // Implement UserBase interface:
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


