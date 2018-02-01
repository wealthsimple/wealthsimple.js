
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
        var originalValue = data['id'];
        var parsedValue;
        if (typeof originalValue === "object" && TargetPortfolioId.hasOwnProperty('constructFromObject')) {
          parsedValue = TargetPortfolioId.constructFromObject(originalValue);
        } else if ('TargetPortfolioId' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'TargetPortfolioId');
        }
        obj['id'] = parsedValue;
      }
      if (data.hasOwnProperty('name')) {
        var originalValue = data['name'];
        var parsedValue;
        if (typeof originalValue === "object" && String.hasOwnProperty('constructFromObject')) {
          parsedValue = String.constructFromObject(originalValue);
        } else if ('String' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['name'] = parsedValue;
      }
      if (data.hasOwnProperty('allocations')) {
        var originalValue = data['allocations'];
        var parsedValue;
        if (typeof originalValue === "object" && Object.hasOwnProperty('constructFromObject')) {
          parsedValue = Object.constructFromObject(originalValue);
        } else if ('Object' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'Object');
        }
        obj['allocations'] = parsedValue;
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


