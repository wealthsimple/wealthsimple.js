
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ClientId', 'model/Locale', 'model/SurveyBase'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ClientId'), require('./Locale'), require('./SurveyBase'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.SurveyInput = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.ClientId, root.Wealthsimple.Locale, root.Wealthsimple.SurveyBase);
  }
}(this, function(ApiClient, ClientId, Locale, SurveyBase) {
  'use strict';




  /**
   * The SurveyInput model module.
   * @module model/SurveyInput
   * @version 1.0
   */

  /**
   * Constructs a new <code>SurveyInput</code>.
   * @alias module:model/SurveyInput
   * @class
   * @implements module:model/SurveyBase
   */
  var exports = function() {
    var _this = this;

    SurveyBase.call(_this);
  };

  /**
   * Constructs a <code>SurveyInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SurveyInput} obj Optional instance to populate.
   * @return {module:model/SurveyInput} The populated <code>SurveyInput</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      SurveyBase.constructFromObject(data, obj);
    }
    return obj;
  }


  // Implement SurveyBase interface:
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


