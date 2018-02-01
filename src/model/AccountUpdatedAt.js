
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
    root.Wealthsimple.AccountUpdatedAt = factory(root.Wealthsimple.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AccountUpdatedAt model module.
   * @module model/AccountUpdatedAt
   * @version 1.0
   */

  /**
   * Constructs a new <code>AccountUpdatedAt</code>.
   * Timestamp when the account was last updated
   * @alias module:model/AccountUpdatedAt
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>AccountUpdatedAt</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountUpdatedAt} obj Optional instance to populate.
   * @return {module:model/AccountUpdatedAt} The populated <code>AccountUpdatedAt</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

    }
    return obj;
  }




  return exports;
}));


