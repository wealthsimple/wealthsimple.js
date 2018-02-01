
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/RangeLimits'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RangeLimits'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.SurveyQuestion = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.RangeLimits);
  }
}(this, function(ApiClient, RangeLimits) {
  'use strict';




  /**
   * The SurveyQuestion model module.
   * @module model/SurveyQuestion
   * @version 1.0
   */

  /**
   * Constructs a new <code>SurveyQuestion</code>.
   * @alias module:model/SurveyQuestion
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>SurveyQuestion</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SurveyQuestion} obj Optional instance to populate.
   * @return {module:model/SurveyQuestion} The populated <code>SurveyQuestion</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('range_limits')) {
        obj['range_limits'] = RangeLimits.constructFromObject(data['range_limits']);
      }
      if (data.hasOwnProperty('section')) {
        obj['section'] = ApiClient.convertToType(data['section'], 'String');
      }
      if (data.hasOwnProperty('text')) {
        obj['text'] = ApiClient.convertToType(data['text'], 'String');
      }
      if (data.hasOwnProperty('subtext')) {
        obj['subtext'] = ApiClient.convertToType(data['subtext'], 'String');
      }
      if (data.hasOwnProperty('context')) {
        obj['context'] = ApiClient.convertToType(data['context'], 'String');
      }
      if (data.hasOwnProperty('inline_context')) {
        obj['inline_context'] = ApiClient.convertToType(data['inline_context'], 'String');
      }
      if (data.hasOwnProperty('optional')) {
        obj['optional'] = ApiClient.convertToType(data['optional'], 'Boolean');
      }
      if (data.hasOwnProperty('parent_question')) {
        obj['parent_question'] = ApiClient.convertToType(data['parent_question'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/SurveyQuestion.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {module:model/RangeLimits} range_limits
   */
  exports.prototype['range_limits'] = undefined;
  /**
   * Section for the question
   * @member {String} section
   */
  exports.prototype['section'] = undefined;
  /**
   * The actual text for the question
   * @member {String} text
   */
  exports.prototype['text'] = undefined;
  /**
   * Further clarification around the question.
   * @member {String} subtext
   */
  exports.prototype['subtext'] = undefined;
  /**
   * String that describes the value being selected
   * @member {String} context
   */
  exports.prototype['context'] = undefined;
  /**
   * Some questions might make use of this to lead-in to the value selection.
   * @member {String} inline_context
   */
  exports.prototype['inline_context'] = undefined;
  /**
   * Describes whether answering this question can be opted out.
   * @member {Boolean} optional
   */
  exports.prototype['optional'] = undefined;
  /**
   * Some questions are sub-questions from a previously answered question.  Only exists if question is actually a subquestion.
   * @member {String} parent_question
   */
  exports.prototype['parent_question'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "radio"
     * @const
     */
    "radio": "radio",
    /**
     * value: "checkbox"
     * @const
     */
    "checkbox": "checkbox",
    /**
     * value: "text"
     * @const
     */
    "text": "text",
    /**
     * value: "range"
     * @const
     */
    "range": "range"  };


  return exports;
}));


