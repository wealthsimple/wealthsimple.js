
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/TargetPortfolioId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TargetPortfolioId'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.TargetPortfolio = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.TargetPortfolioId);
  }
}(this, function(ApiClient, TargetPortfolioId) {
  'use strict';




  /**
   * The TargetPortfolio model module.
   * @module model/TargetPortfolio
   * @version 1.0
   */

  /**
   * Constructs a new <code>TargetPortfolio</code>.
   * @alias module:model/TargetPortfolio
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>TargetPortfolio</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TargetPortfolio} obj Optional instance to populate.
   * @return {module:model/TargetPortfolio} The populated <code>TargetPortfolio</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = TargetPortfolioId.constructFromObject(data['id']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('allocations')) {
        obj['allocations'] = ApiClient.convertToType(data['allocations'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/TargetPortfolioId} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * A dynamic representation of target portfolio allocations.
   * @member {Object} allocations
   */
  exports.prototype['allocations'] = undefined;



  return exports;
}));


