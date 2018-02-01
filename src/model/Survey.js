
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ClientId', 'model/CompletedAt', 'model/CreatedAt', 'model/CreatedUpdatedAt', 'model/Locale', 'model/SurveyBase', 'model/SurveyState', 'model/UpdatedAt'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ClientId'), require('./CompletedAt'), require('./CreatedAt'), require('./CreatedUpdatedAt'), require('./Locale'), require('./SurveyBase'), require('./SurveyState'), require('./UpdatedAt'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.Survey = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.ClientId, root.Wealthsimple.CompletedAt, root.Wealthsimple.CreatedAt, root.Wealthsimple.CreatedUpdatedAt, root.Wealthsimple.Locale, root.Wealthsimple.SurveyBase, root.Wealthsimple.SurveyState, root.Wealthsimple.UpdatedAt);
  }
}(this, function(ApiClient, ClientId, CompletedAt, CreatedAt, CreatedUpdatedAt, Locale, SurveyBase, SurveyState, UpdatedAt) {
  'use strict';




  /**
   * The Survey model module.
   * @module model/Survey
   * @version 1.0
   */

  /**
   * Constructs a new <code>Survey</code>.
   * @alias module:model/Survey
   * @class
   * @implements module:model/SurveyBase
   * @implements module:model/CreatedUpdatedAt
   */
  var exports = function() {
    var _this = this;

    SurveyBase.call(_this);
    CreatedUpdatedAt.call(_this);



  };

  /**
   * Constructs a <code>Survey</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Survey} obj Optional instance to populate.
   * @return {module:model/Survey} The populated <code>Survey</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      SurveyBase.constructFromObject(data, obj);
      CreatedUpdatedAt.constructFromObject(data, obj);
      if (data.hasOwnProperty('current_state')) {
        var originalValue = data['current_state'];
        var parsedValue;
        if (typeof originalValue === "object" && SurveyState.hasOwnProperty('constructFromObject')) {
          parsedValue = SurveyState.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['current_state'] = parsedValue;
      }
      if (data.hasOwnProperty('target_portfolio_id')) {
        var originalValue = data['target_portfolio_id'];
        var parsedValue;
        if (typeof originalValue === "object" && String.hasOwnProperty('constructFromObject')) {
          parsedValue = String.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['target_portfolio_id'] = parsedValue;
      }
      if (data.hasOwnProperty('completed_at')) {
        var originalValue = data['completed_at'];
        var parsedValue;
        if (typeof originalValue === "object" && CompletedAt.hasOwnProperty('constructFromObject')) {
          parsedValue = CompletedAt.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['completed_at'] = parsedValue;
      }
    }
    return obj;
  }

  /**
   * @member {module:model/SurveyState} current_state
   */
  exports.prototype['current_state'] = undefined;
  /**
   * The `id` of the Target Portfolio assigned after the survey             has been completed.  This is only applicable to `risk_score` type surveys
   * @member {String} target_portfolio_id
   */
  exports.prototype['target_portfolio_id'] = undefined;
  /**
   * @member {module:model/CompletedAt} completed_at
   */
  exports.prototype['completed_at'] = undefined;

  // Implement SurveyBase interface:
  /**
   * @member {module:model/ClientId} client_id
   */
exports.prototype['client_id'] = undefined;

  /**
   * @member {module:model/Locale} locale
   */
exports.prototype['locale'] = undefined;

  // Implement CreatedUpdatedAt interface:
  /**
   * @member {module:model/CreatedAt} created_at
   */
exports.prototype['created_at'] = undefined;

  /**
   * @member {module:model/UpdatedAt} updated_at
   */
exports.prototype['updated_at'] = undefined;



  return exports;
}));


