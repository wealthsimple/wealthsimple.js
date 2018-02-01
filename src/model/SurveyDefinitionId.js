
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
    root.Wealthsimple.SurveyDefinitionId = factory(root.Wealthsimple.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SurveyDefinitionId model module.
   * @module model/SurveyDefinitionId
   * @version 1.0
   */

  /**
   * Constructs a new <code>SurveyDefinitionId</code>.
   * The unique &#x60;id&#x60; of the Survey Definition
   * @alias module:model/SurveyDefinitionId
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>SurveyDefinitionId</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SurveyDefinitionId} obj Optional instance to populate.
   * @return {module:model/SurveyDefinitionId} The populated <code>SurveyDefinitionId</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

    }
    return obj;
  }




  return exports;
}));


