
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
        obj['complete'] = ApiClient.convertToType(data['complete'], 'Boolean');
      }
      if (data.hasOwnProperty('percent_complete')) {
        obj['percent_complete'] = Percent.constructFromObject(data['percent_complete']);
      }
      if (data.hasOwnProperty('question')) {
        obj['question'] = SurveyQuestion.constructFromObject(data['question']);
      }
      if (data.hasOwnProperty('answer_options')) {
        obj['answer_options'] = AnswerOptions.constructFromObject(data['answer_options']);
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


