
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.TaxDetailId = factory(root.Wealthsimple.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TaxDetailId model module.
   * @module model/TaxDetailId
   * @version 1.0
   */

  /**
   * Constructs a new <code>TaxDetailId</code>.
   * The unique &#x60;id&#x60; of the Tax Detail
   * @alias module:model/TaxDetailId
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>TaxDetailId</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaxDetailId} obj Optional instance to populate.
   * @return {module:model/TaxDetailId} The populated <code>TaxDetailId</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

    }
    return obj;
  }




  return exports;
}));


