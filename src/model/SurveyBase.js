
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ClientId', 'model/Locale'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ClientId'), require('./Locale'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.SurveyBase = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.ClientId, root.Wealthsimple.Locale);
  }
}(this, function(ApiClient, ClientId, Locale) {
  'use strict';




  /**
   * The SurveyBase model module.
   * @module model/SurveyBase
   * @version 1.0
   */

  /**
   * Constructs a new <code>SurveyBase</code>.
   * @alias module:model/SurveyBase
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>SurveyBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SurveyBase} obj Optional instance to populate.
   * @return {module:model/SurveyBase} The populated <code>SurveyBase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('client_id')) {
        var originalValue = data['client_id'];
        var parsedValue;
        if (typeof originalValue === "object" && ClientId.hasOwnProperty('constructFromObject')) {
          parsedValue = ClientId.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['client_id'] = parsedValue;
      }
      if (data.hasOwnProperty('locale')) {
        var originalValue = data['locale'];
        var parsedValue;
        if (typeof originalValue === "object" && Locale.hasOwnProperty('constructFromObject')) {
          parsedValue = Locale.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['locale'] = parsedValue;
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ClientId} client_id
   */
  exports.prototype['client_id'] = undefined;
  /**
   * @member {module:model/Locale} locale
   */
  exports.prototype['locale'] = undefined;



  return exports;
}));


