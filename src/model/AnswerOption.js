
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Answer', 'model/AnswerId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Answer'), require('./AnswerId'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.AnswerOption = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.Answer, root.Wealthsimple.AnswerId);
  }
}(this, function(ApiClient, Answer, AnswerId) {
  'use strict';




  /**
   * The AnswerOption model module.
   * @module model/AnswerOption
   * @version 1.0
   */

  /**
   * Constructs a new <code>AnswerOption</code>.
   * @alias module:model/AnswerOption
   * @class
   * @implements module:model/Answer
   */
  var exports = function() {
    var _this = this;

    Answer.call(_this);
  };

  /**
   * Constructs a <code>AnswerOption</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AnswerOption} obj Optional instance to populate.
   * @return {module:model/AnswerOption} The populated <code>AnswerOption</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      Answer.constructFromObject(data, obj);
    }
    return obj;
  }


  // Implement Answer interface:
  /**
   * @member {module:model/AnswerId} id
   */
exports.prototype['id'] = undefined;

  /**
   * **Note:** the value is can be either a string, boolean or number primitive.
   * @member {String} value
   */
exports.prototype['value'] = undefined;



  return exports;
}));


