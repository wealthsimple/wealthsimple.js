
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ClientId', 'model/CorporationOwnerType', 'model/Percent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ClientId'), require('./CorporationOwnerType'), require('./Percent'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.CorporationOwner = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.ClientId, root.Wealthsimple.CorporationOwnerType, root.Wealthsimple.Percent);
  }
}(this, function(ApiClient, ClientId, CorporationOwnerType, Percent) {
  'use strict';




  /**
   * The CorporationOwner model module.
   * @module model/CorporationOwner
   * @version 1.0
   */

  /**
   * Constructs a new <code>CorporationOwner</code>.
   * @alias module:model/CorporationOwner
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>CorporationOwner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CorporationOwner} obj Optional instance to populate.
   * @return {module:model/CorporationOwner} The populated <code>CorporationOwner</code> instance.
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
      if (data.hasOwnProperty('ownership_percent')) {
        var originalValue = data['ownership_percent'];
        var parsedValue;
        if (typeof originalValue === "object" && Percent.hasOwnProperty('constructFromObject')) {
          parsedValue = Percent.constructFromObject(originalValue);
        } else if ('Percent' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'Percent');
        }
        obj['ownership_percent'] = parsedValue;
      }
      if (data.hasOwnProperty('type')) {
        var originalValue = data['type'];
        var parsedValue;
        if (typeof originalValue === "object" && CorporationOwnerType.hasOwnProperty('constructFromObject')) {
          parsedValue = CorporationOwnerType.constructFromObject(originalValue);
        } else if ('CorporationOwnerType' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'CorporationOwnerType');
        }
        obj['type'] = parsedValue;
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ClientId} client_id
   */
  exports.prototype['client_id'] = undefined;
  /**
   * @member {module:model/Percent} ownership_percent
   */
  exports.prototype['ownership_percent'] = undefined;
  /**
   * @member {module:model/CorporationOwnerType} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


