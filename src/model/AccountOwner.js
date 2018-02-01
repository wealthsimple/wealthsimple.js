
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ClientId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ClientId'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.AccountOwner = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.ClientId);
  }
}(this, function(ApiClient, ClientId) {
  'use strict';




  /**
   * The AccountOwner model module.
   * @module model/AccountOwner
   * @version 1.0
   */

  /**
   * Constructs a new <code>AccountOwner</code>.
   * @alias module:model/AccountOwner
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>AccountOwner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountOwner} obj Optional instance to populate.
   * @return {module:model/AccountOwner} The populated <code>AccountOwner</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('client_id')) {
        var originalValue = data['client_id'];
        var parsedValue;
        if (typeof originalValue === "object" && ClientId.hasOwnProperty('constructFromObject')) {
          parsedValue = ClientId.constructFromObject(originalValue);
        } else if ('ClientId' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'ClientId');
        }
        obj['client_id'] = parsedValue;
      }
      if (data.hasOwnProperty('ownership_type')) {
        var originalValue = data['ownership_type'];
        var parsedValue;
        if (typeof originalValue === "object" && String.hasOwnProperty('constructFromObject')) {
          parsedValue = String.constructFromObject(originalValue);
        } else if ('String' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['ownership_type'] = parsedValue;
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ClientId} client_id
   */
  exports.prototype['client_id'] = undefined;
  /**
   * @member {module:model/AccountOwner.OwnershipTypeEnum} ownership_type
   */
  exports.prototype['ownership_type'] = undefined;


  /**
   * Allowed values for the <code>ownership_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.OwnershipTypeEnum = {
    /**
     * value: "primary"
     * @const
     */
    "primary": "primary",
    /**
     * value: "secondary"
     * @const
     */
    "secondary": "secondary"  };


  return exports;
}));


