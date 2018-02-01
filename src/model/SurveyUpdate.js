
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Answers', 'model/QuestionId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Answers'), require('./QuestionId'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.SurveyUpdate = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.Answers, root.Wealthsimple.QuestionId);
  }
}(this, function(ApiClient, Answers, QuestionId) {
  'use strict';




  /**
   * The SurveyUpdate model module.
   * @module model/SurveyUpdate
   * @version 1.0
   */

  /**
   * Constructs a new <code>SurveyUpdate</code>.
   * @alias module:model/SurveyUpdate
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>SurveyUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SurveyUpdate} obj Optional instance to populate.
   * @return {module:model/SurveyUpdate} The populated <code>SurveyUpdate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('question_id')) {
        obj['question_id'] = QuestionId.constructFromObject(data['question_id']);
      }
      if (data.hasOwnProperty('answers')) {
        obj['answers'] = Answers.constructFromObject(data['answers']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/QuestionId} question_id
   */
  exports.prototype['question_id'] = undefined;
  /**
   * @member {module:model/Answers} answers
   */
  exports.prototype['answers'] = undefined;



  return exports;
}));


