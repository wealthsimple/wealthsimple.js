
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
        var originalValue = data['id'];
        var parsedValue;
        if (typeof originalValue === "object" && String.hasOwnProperty('constructFromObject')) {
          parsedValue = String.constructFromObject(originalValue);
        } else if ('String' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['id'] = parsedValue;
      }
      if (data.hasOwnProperty('type')) {
        var originalValue = data['type'];
        var parsedValue;
        if (typeof originalValue === "object" && String.hasOwnProperty('constructFromObject')) {
          parsedValue = String.constructFromObject(originalValue);
        } else if ('String' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['type'] = parsedValue;
      }
      if (data.hasOwnProperty('range_limits')) {
        var originalValue = data['range_limits'];
        var parsedValue;
        if (typeof originalValue === "object" && RangeLimits.hasOwnProperty('constructFromObject')) {
          parsedValue = RangeLimits.constructFromObject(originalValue);
        } else if ('RangeLimits' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'RangeLimits');
        }
        obj['range_limits'] = parsedValue;
      }
      if (data.hasOwnProperty('section')) {
        var originalValue = data['section'];
        var parsedValue;
        if (typeof originalValue === "object" && String.hasOwnProperty('constructFromObject')) {
          parsedValue = String.constructFromObject(originalValue);
        } else if ('String' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['section'] = parsedValue;
      }
      if (data.hasOwnProperty('text')) {
        var originalValue = data['text'];
        var parsedValue;
        if (typeof originalValue === "object" && String.hasOwnProperty('constructFromObject')) {
          parsedValue = String.constructFromObject(originalValue);
        } else if ('String' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['text'] = parsedValue;
      }
      if (data.hasOwnProperty('subtext')) {
        var originalValue = data['subtext'];
        var parsedValue;
        if (typeof originalValue === "object" && String.hasOwnProperty('constructFromObject')) {
          parsedValue = String.constructFromObject(originalValue);
        } else if ('String' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['subtext'] = parsedValue;
      }
      if (data.hasOwnProperty('context')) {
        var originalValue = data['context'];
        var parsedValue;
        if (typeof originalValue === "object" && String.hasOwnProperty('constructFromObject')) {
          parsedValue = String.constructFromObject(originalValue);
        } else if ('String' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['context'] = parsedValue;
      }
      if (data.hasOwnProperty('inline_context')) {
        var originalValue = data['inline_context'];
        var parsedValue;
        if (typeof originalValue === "object" && String.hasOwnProperty('constructFromObject')) {
          parsedValue = String.constructFromObject(originalValue);
        } else if ('String' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['inline_context'] = parsedValue;
      }
      if (data.hasOwnProperty('optional')) {
        var originalValue = data['optional'];
        var parsedValue;
        if (typeof originalValue === "object" && Boolean.hasOwnProperty('constructFromObject')) {
          parsedValue = Boolean.constructFromObject(originalValue);
        } else if ('Boolean' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'Boolean');
        }
        obj['optional'] = parsedValue;
      }
      if (data.hasOwnProperty('parent_question')) {
        var originalValue = data['parent_question'];
        var parsedValue;
        if (typeof originalValue === "object" && String.hasOwnProperty('constructFromObject')) {
          parsedValue = String.constructFromObject(originalValue);
        } else if ('String' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['parent_question'] = parsedValue;
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


