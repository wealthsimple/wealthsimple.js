
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Paginated'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Paginated'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.CorporationsPaginated = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.Paginated);
  }
}(this, function(ApiClient, Paginated) {
  'use strict';




  /**
   * The CorporationsPaginated model module.
   * @module model/CorporationsPaginated
   * @version 1.0
   */

  /**
   * Constructs a new <code>CorporationsPaginated</code>.
   * @alias module:model/CorporationsPaginated
   * @class
   * @implements module:model/Paginated
   */
  var exports = function() {
    var _this = this;

    Paginated.call(_this);
  };

  /**
   * Constructs a <code>CorporationsPaginated</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CorporationsPaginated} obj Optional instance to populate.
   * @return {module:model/CorporationsPaginated} The populated <code>CorporationsPaginated</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      Paginated.constructFromObject(data, obj);
    }
    return obj;
  }


  // Implement Paginated interface:
  /**
   * The zero-based index of the first result on this page
   * @member {Number} offset
   */
exports.prototype['offset'] = undefined;

  /**
   * The total number of results on all pages
   * @member {Number} total_count
   */
exports.prototype['total_count'] = undefined;



  return exports;
}));


