
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
    root.Wealthsimple.Healthcheck = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.DateTime);
  }
}(this, function(ApiClient, DateTime) {
  'use strict';




  /**
   * The Healthcheck model module.
   * @module model/Healthcheck
   * @version 1.0
   */

  /**
   * Constructs a new <code>Healthcheck</code>.
   * @alias module:model/Healthcheck
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Healthcheck</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Healthcheck} obj Optional instance to populate.
   * @return {module:model/Healthcheck} The populated <code>Healthcheck</code> instance.
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
      if (data.hasOwnProperty('updated_at')) {
        var originalValue = data['updated_at'];
        var parsedValue;
        if (typeof originalValue === "object" && DateTime.hasOwnProperty('constructFromObject')) {
          parsedValue = DateTime.constructFromObject(originalValue);
        } else if ('Date' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'Date');
        }
        obj['updated_at'] = parsedValue;
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Healthcheck.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/Date} updated_at
   */
  exports.prototype['updated_at'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "good"
     * @const
     */
    "good": "good",
    /**
     * value: "minor"
     * @const
     */
    "minor": "minor",
    /**
     * value: "major"
     * @const
     */
    "major": "major"  };


  return exports;
}));


