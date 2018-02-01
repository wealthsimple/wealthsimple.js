
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
    root.Wealthsimple.ModelDate = factory(root.Wealthsimple.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ModelDate model module.
   * @module model/ModelDate
   * @version 1.0
   */

  /**
   * Constructs a new <code>ModelDate</code>.
   * A date in [ISO_8601](https://en.wikipedia.org/wiki/ISO_8601) format (i.e. YYYY-MM-DD)
   * @alias module:model/ModelDate
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ModelDate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelDate} obj Optional instance to populate.
   * @return {module:model/ModelDate} The populated <code>ModelDate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

    }
    return obj;
  }




  return exports;
}));


