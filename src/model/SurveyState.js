
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AnswerOptions', 'model/Percent', 'model/SurveyQuestion'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AnswerOptions'), require('./Percent'), require('./SurveyQuestion'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.SurveyState = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.AnswerOptions, root.Wealthsimple.Percent, root.Wealthsimple.SurveyQuestion);
  }
}(this, function(ApiClient, AnswerOptions, Percent, SurveyQuestion) {
  'use strict';




  /**
   * The SurveyState model module.
   * @module model/SurveyState
   * @version 1.0
   */

  /**
   * Constructs a new <code>SurveyState</code>.
   * As long as the current survey has questions remaining, the &#x60;question&#x60; and &#x60;answer_options&#x60; objects will be present to guide what question to present to the Person and what possible answers they can choose from. 
   * @alias module:model/SurveyState
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>SurveyState</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SurveyState} obj Optional instance to populate.
   * @return {module:model/SurveyState} The populated <code>SurveyState</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('complete')) {
        var originalValue = data['complete'];
        var parsedValue;
        if (typeof originalValue === "object" && Boolean.hasOwnProperty('constructFromObject')) {
          parsedValue = Boolean.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['complete'] = parsedValue;
      }
      if (data.hasOwnProperty('percent_complete')) {
        var originalValue = data['percent_complete'];
        var parsedValue;
        if (typeof originalValue === "object" && Percent.hasOwnProperty('constructFromObject')) {
          parsedValue = Percent.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['percent_complete'] = parsedValue;
      }
      if (data.hasOwnProperty('question')) {
        var originalValue = data['question'];
        var parsedValue;
        if (typeof originalValue === "object" && SurveyQuestion.hasOwnProperty('constructFromObject')) {
          parsedValue = SurveyQuestion.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['question'] = parsedValue;
      }
      if (data.hasOwnProperty('answer_options')) {
        var originalValue = data['answer_options'];
        var parsedValue;
        if (typeof originalValue === "object" && AnswerOptions.hasOwnProperty('constructFromObject')) {
          parsedValue = AnswerOptions.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['answer_options'] = parsedValue;
      }
    }
    return obj;
  }

  /**
   * Incidates whether the survey has been completed.
   * @member {Boolean} complete
   */
  exports.prototype['complete'] = undefined;
  /**
   * @member {module:model/Percent} percent_complete
   */
  exports.prototype['percent_complete'] = undefined;
  /**
   * @member {module:model/SurveyQuestion} question
   */
  exports.prototype['question'] = undefined;
  /**
   * @member {module:model/AnswerOptions} answer_options
   */
  exports.prototype['answer_options'] = undefined;



  return exports;
}));


