
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/TargetPortfolio'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TargetPortfolio'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.Assessment = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.TargetPortfolio);
  }
}(this, function(ApiClient, TargetPortfolio) {
  'use strict';




  /**
   * The Assessment model module.
   * @module model/Assessment
   * @version 1.0
   */

  /**
   * Constructs a new <code>Assessment</code>.
   * @alias module:model/Assessment
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>Assessment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Assessment} obj Optional instance to populate.
   * @return {module:model/Assessment} The populated <code>Assessment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('object')) {
        obj['object'] = ApiClient.convertToType(data['object'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('goals')) {
        obj['goals'] = ApiClient.convertToType(data['goals'], 'String');
      }
      if (data.hasOwnProperty('time_horizon')) {
        obj['time_horizon'] = ApiClient.convertToType(data['time_horizon'], 'String');
      }
      if (data.hasOwnProperty('notes')) {
        obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
      }
      if (data.hasOwnProperty('creator_full_name')) {
        obj['creator_full_name'] = ApiClient.convertToType(data['creator_full_name'], 'String');
      }
      if (data.hasOwnProperty('target_portfolio')) {
        obj['target_portfolio'] = TargetPortfolio.constructFromObject(data['target_portfolio']);
      }
    }
    return obj;
  }

  /**
   * describes the object type of this entity
   * @member {module:model/Assessment.ObjectEnum} object
   */
  exports.prototype['object'] = undefined;
  /**
   * The unique `id` of the ClientAssessment.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/Assessment.GoalsEnum} goals
   */
  exports.prototype['goals'] = undefined;
  /**
   * @member {String} time_horizon
   */
  exports.prototype['time_horizon'] = undefined;
  /**
   * @member {String} notes
   */
  exports.prototype['notes'] = undefined;
  /**
   * @member {String} creator_full_name
   */
  exports.prototype['creator_full_name'] = undefined;
  /**
   * @member {module:model/TargetPortfolio} target_portfolio
   */
  exports.prototype['target_portfolio'] = undefined;


  /**
   * Allowed values for the <code>object</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ObjectEnum = {
    /**
     * value: "assessment"
     * @const
     */
    "assessment": "assessment"  };

  /**
   * Allowed values for the <code>goals</code> property.
   * @enum {String}
   * @readonly
   */
  exports.GoalsEnum = {
    /**
     * value: "mortgage"
     * @const
     */
    "mortgage": "mortgage",
    /**
     * value: "retirement"
     * @const
     */
    "retirement": "retirement",
    /**
     * value: "child_education"
     * @const
     */
    "child_education": "child_education",
    /**
     * value: "income"
     * @const
     */
    "income": "income",
    /**
     * value: "wedding"
     * @const
     */
    "wedding": "wedding",
    /**
     * value: "speculation"
     * @const
     */
    "speculation": "speculation",
    /**
     * value: "growth"
     * @const
     */
    "growth": "growth",
    /**
     * value: "capital_preservation"
     * @const
     */
    "capital_preservation": "capital_preservation",
    /**
     * value: "car"
     * @const
     */
    "car": "car",
    /**
     * value: "education"
     * @const
     */
    "education": "education",
    /**
     * value: "long_term"
     * @const
     */
    "long_term": "long_term",
    /**
     * value: "inheritance"
     * @const
     */
    "inheritance": "inheritance",
    /**
     * value: "home_deposit"
     * @const
     */
    "home_deposit": "home_deposit",
    /**
     * value: "no_goal"
     * @const
     */
    "no_goal": "no_goal",
    /**
     * value: "retirement_income"
     * @const
     */
    "retirement_income": "retirement_income",
    /**
     * value: "other"
     * @const
     */
    "other": "other"  };


  return exports;
}));


