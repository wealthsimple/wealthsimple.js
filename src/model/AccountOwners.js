
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AccountOwner'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountOwner'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.AccountOwners = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.AccountOwner);
  }
}(this, function(ApiClient, AccountOwner) {
  'use strict';




  /**
   * The AccountOwners model module.
   * @module model/AccountOwners
   * @version 1.0
   */

  /**
   * Constructs a new <code>AccountOwners</code>.
   * Owners of the account
   * @alias module:model/AccountOwners
   * @class
   * @extends Array
   */
  var exports = function() {
    var _this = this;
    _this = new Array();
    Object.setPrototypeOf(_this, exports);

    return _this;
  };

  /**
   * Constructs a <code>AccountOwners</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountOwners} obj Optional instance to populate.
   * @return {module:model/AccountOwners} The populated <code>AccountOwners</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ApiClient.constructFromObject(data, obj, 'AccountOwner');

    }
    return obj;
  }




  return exports;
}));


