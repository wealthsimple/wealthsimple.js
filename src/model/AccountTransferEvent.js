
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
    root.Wealthsimple.AccountTransferEvent = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.DateTime);
  }
}(this, function(ApiClient, DateTime) {
  'use strict';




  /**
   * The AccountTransferEvent model module.
   * @module model/AccountTransferEvent
   * @version 1.0
   */

  /**
   * Constructs a new <code>AccountTransferEvent</code>.
   * @alias module:model/AccountTransferEvent
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>AccountTransferEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountTransferEvent} obj Optional instance to populate.
   * @return {module:model/AccountTransferEvent} The populated <code>AccountTransferEvent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        var originalValue = data['status'];
        var parsedValue;
        if (typeof originalValue === "object" && String.hasOwnProperty('constructFromObject')) {
          parsedValue = String.constructFromObject(originalValue);
        } else if ('String' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['status'] = parsedValue;
      }
      if (data.hasOwnProperty('timestamp')) {
        var originalValue = data['timestamp'];
        var parsedValue;
        if (typeof originalValue === "object" && DateTime.hasOwnProperty('constructFromObject')) {
          parsedValue = DateTime.constructFromObject(originalValue);
        } else if ('Date' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'Date');
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
   * @member {module:model/Date} timestamp
   */
  exports.prototype['timestamp'] = undefined;



  return exports;
}));


