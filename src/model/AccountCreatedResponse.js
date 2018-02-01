
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AccountBase', 'model/AccountCreatedAt', 'model/AccountOwners', 'model/AccountType', 'model/AccountUpdatedAt'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountBase'), require('./AccountCreatedAt'), require('./AccountOwners'), require('./AccountType'), require('./AccountUpdatedAt'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.AccountCreatedResponse = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.AccountBase, root.Wealthsimple.AccountCreatedAt, root.Wealthsimple.AccountOwners, root.Wealthsimple.AccountType, root.Wealthsimple.AccountUpdatedAt);
  }
}(this, function(ApiClient, AccountBase, AccountCreatedAt, AccountOwners, AccountType, AccountUpdatedAt) {
  'use strict';




  /**
   * The AccountCreatedResponse model module.
   * @module model/AccountCreatedResponse
   * @version 1.0
   */

  /**
   * Constructs a new <code>AccountCreatedResponse</code>.
   * @alias module:model/AccountCreatedResponse
   * @class
   * @implements module:model/AccountBase
   */
  var exports = function() {
    var _this = this;

    AccountBase.call(_this);



  };

  /**
   * Constructs a <code>AccountCreatedResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountCreatedResponse} obj Optional instance to populate.
   * @return {module:model/AccountCreatedResponse} The populated <code>AccountCreatedResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      AccountBase.constructFromObject(data, obj);
      if (data.hasOwnProperty('owners')) {
        var originalValue = data['owners'];
        var parsedValue;
        if (typeof originalValue === "object" && AccountOwners.hasOwnProperty('constructFromObject')) {
          parsedValue = AccountOwners.constructFromObject(originalValue);
        } else if ('AccountOwners' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'AccountOwners');
        }
        obj['owners'] = parsedValue;
      }
      if (data.hasOwnProperty('created_at')) {
        var originalValue = data['created_at'];
        var parsedValue;
        if (typeof originalValue === "object" && AccountCreatedAt.hasOwnProperty('constructFromObject')) {
          parsedValue = AccountCreatedAt.constructFromObject(originalValue);
        } else if ('AccountCreatedAt' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'AccountCreatedAt');
        }
        obj['created_at'] = parsedValue;
      }
      if (data.hasOwnProperty('updated_at')) {
        var originalValue = data['updated_at'];
        var parsedValue;
        if (typeof originalValue === "object" && AccountUpdatedAt.hasOwnProperty('constructFromObject')) {
          parsedValue = AccountUpdatedAt.constructFromObject(originalValue);
        } else if ('AccountUpdatedAt' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'AccountUpdatedAt');
        }
        obj['updated_at'] = parsedValue;
      }
    }
    return obj;
  }

  /**
   * @member {module:model/AccountOwners} owners
   */
  exports.prototype['owners'] = undefined;
  /**
   * @member {module:model/AccountCreatedAt} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * @member {module:model/AccountUpdatedAt} updated_at
   */
  exports.prototype['updated_at'] = undefined;

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


