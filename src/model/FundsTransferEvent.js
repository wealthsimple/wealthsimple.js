
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
    root.Wealthsimple.FundsTransferEvent = factory(root.Wealthsimple.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FundsTransferEvent model module.
   * @module model/FundsTransferEvent
   * @version 1.0
   */

  /**
   * Constructs a new <code>FundsTransferEvent</code>.
   * @alias module:model/FundsTransferEvent
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>FundsTransferEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FundsTransferEvent} obj Optional instance to populate.
   * @return {module:model/FundsTransferEvent} The populated <code>FundsTransferEvent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        var originalValue = data['status'];
        var parsedValue;
        if (typeof originalValue === "object" && String.hasOwnProperty('constructFromObject')) {
          parsedValue = String.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['status'] = parsedValue;
      }
      if (data.hasOwnProperty('timestamp')) {
        var originalValue = data['timestamp'];
        var parsedValue;
        if (typeof originalValue === "object" && Date.hasOwnProperty('constructFromObject')) {
          parsedValue = Date.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['timestamp'] = parsedValue;
      }
    }
    return obj;
  }

  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Date} timestamp
   */
  exports.prototype['timestamp'] = undefined;



  return exports;
}));


