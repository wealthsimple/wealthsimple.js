
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/TaxIdentification'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TaxIdentification'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.TaxIdentificationNumbers = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.TaxIdentification);
  }
}(this, function(ApiClient, TaxIdentification) {
  'use strict';




  /**
   * The TaxIdentificationNumbers model module.
   * @module model/TaxIdentificationNumbers
   * @version 1.0
   */

  /**
   * Constructs a new <code>TaxIdentificationNumbers</code>.
   * @alias module:model/TaxIdentificationNumbers
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
   * Constructs a <code>TaxIdentificationNumbers</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaxIdentificationNumbers} obj Optional instance to populate.
   * @return {module:model/TaxIdentificationNumbers} The populated <code>TaxIdentificationNumbers</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ApiClient.constructFromObject(data, obj, 'TaxIdentification');

    }
    return obj;
  }




  return exports;
}));


