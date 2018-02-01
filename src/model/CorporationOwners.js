
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CorporationOwner'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CorporationOwner'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.CorporationOwners = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.CorporationOwner);
  }
}(this, function(ApiClient, CorporationOwner) {
  'use strict';




  /**
   * The CorporationOwners model module.
   * @module model/CorporationOwners
   * @version 1.0
   */

  /**
   * Constructs a new <code>CorporationOwners</code>.
   * @alias module:model/CorporationOwners
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
   * Constructs a <code>CorporationOwners</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CorporationOwners} obj Optional instance to populate.
   * @return {module:model/CorporationOwners} The populated <code>CorporationOwners</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ApiClient.constructFromObject(data, obj, 'CorporationOwner');

    }
    return obj;
  }




  return exports;
}));


