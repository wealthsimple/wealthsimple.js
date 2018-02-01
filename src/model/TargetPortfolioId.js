
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
    root.Wealthsimple.TargetPortfolioId = factory(root.Wealthsimple.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TargetPortfolioId model module.
   * @module model/TargetPortfolioId
   * @version 1.0
   */

  /**
   * Constructs a new <code>TargetPortfolioId</code>.
   * The &#x60;id&#x60; of the Target Portfolio
   * @alias module:model/TargetPortfolioId
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>TargetPortfolioId</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TargetPortfolioId} obj Optional instance to populate.
   * @return {module:model/TargetPortfolioId} The populated <code>TargetPortfolioId</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

    }
    return obj;
  }




  return exports;
}));


