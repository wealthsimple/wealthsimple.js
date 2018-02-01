
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
    root.Wealthsimple.Paginated = factory(root.Wealthsimple.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Paginated model module.
   * @module model/Paginated
   * @version 1.0
   */

  /**
   * Constructs a new <code>Paginated</code>.
   * @alias module:model/Paginated
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Paginated</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Paginated} obj Optional instance to populate.
   * @return {module:model/Paginated} The populated <code>Paginated</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('offset')) {
        var originalValue = data['offset'];
        var parsedValue;
        if (typeof originalValue === "object" && Number.hasOwnProperty('constructFromObject')) {
          parsedValue = Number.constructFromObject(originalValue);
        } else if ('Number' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'Number');
        }
        obj['offset'] = parsedValue;
      }
      if (data.hasOwnProperty('total_count')) {
        var originalValue = data['total_count'];
        var parsedValue;
        if (typeof originalValue === "object" && Number.hasOwnProperty('constructFromObject')) {
          parsedValue = Number.constructFromObject(originalValue);
        } else if ('Number' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'Number');
        }
        obj['total_count'] = parsedValue;
      }
    }
    return obj;
  }

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


