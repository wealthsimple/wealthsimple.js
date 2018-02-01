
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/DateTime'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DateTime'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.CompletedAt = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.DateTime);
  }
}(this, function(ApiClient, DateTime) {
  'use strict';




  /**
   * The CompletedAt model module.
   * @module model/CompletedAt
   * @version 1.0
   */

  /**
   * Constructs a new <code>CompletedAt</code>.
   * @alias module:model/CompletedAt
   * @class
   * @implements module:model/DateTime
   */
  var exports = function() {
    var _this = this;

    DateTime.call(_this);
  };

  /**
   * Constructs a <code>CompletedAt</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CompletedAt} obj Optional instance to populate.
   * @return {module:model/CompletedAt} The populated <code>CompletedAt</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      DateTime.constructFromObject(data, obj);
    }
    return obj;
  }


  // Implement DateTime interface:


  return exports;
}));


