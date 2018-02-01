
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/FirstName', 'model/LastName', 'model/MiddleNames'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FirstName'), require('./LastName'), require('./MiddleNames'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.FullLegalName = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.FirstName, root.Wealthsimple.LastName, root.Wealthsimple.MiddleNames);
  }
}(this, function(ApiClient, FirstName, LastName, MiddleNames) {
  'use strict';




  /**
   * The FullLegalName model module.
   * @module model/FullLegalName
   * @version 1.0
   */

  /**
   * Constructs a new <code>FullLegalName</code>.
   * @alias module:model/FullLegalName
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>FullLegalName</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FullLegalName} obj Optional instance to populate.
   * @return {module:model/FullLegalName} The populated <code>FullLegalName</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('first_name')) {
        var originalValue = data['first_name'];
        var parsedValue;
        if (typeof originalValue === "object" && FirstName.hasOwnProperty('constructFromObject')) {
          parsedValue = FirstName.constructFromObject(originalValue);
        } else if ('FirstName' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'FirstName');
        }
        obj['first_name'] = parsedValue;
      }
      if (data.hasOwnProperty('middle_names')) {
        var originalValue = data['middle_names'];
        var parsedValue;
        if (typeof originalValue === "object" && MiddleNames.hasOwnProperty('constructFromObject')) {
          parsedValue = MiddleNames.constructFromObject(originalValue);
        } else if ('MiddleNames' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'MiddleNames');
        }
        obj['middle_names'] = parsedValue;
      }
      if (data.hasOwnProperty('last_name')) {
        var originalValue = data['last_name'];
        var parsedValue;
        if (typeof originalValue === "object" && LastName.hasOwnProperty('constructFromObject')) {
          parsedValue = LastName.constructFromObject(originalValue);
        } else if ('LastName' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'LastName');
        }
        obj['last_name'] = parsedValue;
      }
    }
    return obj;
  }

  /**
   * @member {module:model/FirstName} first_name
   */
  exports.prototype['first_name'] = undefined;
  /**
   * @member {module:model/MiddleNames} middle_names
   */
  exports.prototype['middle_names'] = undefined;
  /**
   * @member {module:model/LastName} last_name
   */
  exports.prototype['last_name'] = undefined;



  return exports;
}));


