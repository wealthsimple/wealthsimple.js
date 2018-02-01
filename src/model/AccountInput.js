
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AccountBase', 'model/AccountType', 'model/ClientId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountBase'), require('./AccountType'), require('./ClientId'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.AccountInput = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.AccountBase, root.Wealthsimple.AccountType, root.Wealthsimple.ClientId);
  }
}(this, function(ApiClient, AccountBase, AccountType, ClientId) {
  'use strict';




  /**
   * The AccountInput model module.
   * @module model/AccountInput
   * @version 1.0
   */

  /**
   * Constructs a new <code>AccountInput</code>.
   * @alias module:model/AccountInput
   * @class
   * @implements module:model/AccountBase
   */
  var exports = function() {
    var _this = this;

    AccountBase.call(_this);

  };

  /**
   * Constructs a <code>AccountInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountInput} obj Optional instance to populate.
   * @return {module:model/AccountInput} The populated <code>AccountInput</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      AccountBase.constructFromObject(data, obj);
      if (data.hasOwnProperty('client_id')) {
        obj['client_id'] = ClientId.constructFromObject(data['client_id']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ClientId} client_id
   */
  exports.prototype['client_id'] = undefined;

  // Implement AccountBase interface:
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


