
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Answer'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Answer'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.Answers = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.Answer);
  }
}(this, function(ApiClient, Answer) {
  'use strict';




  /**
   * The Answers model module.
   * @module model/Answers
   * @version 1.0
   */

  /**
   * Constructs a new <code>Answers</code>.
   * How the questions have been answered thus far in the survey.
   * @alias module:model/Answers
   * @class
   * @extends Array
   */
  var exports = function() {
    var _this = this;
    _this = new Array();
    Object.setPrototypeOf(_this, exports);

    return _this;
  };

  /**
   * Constructs a <code>Answers</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Answers} obj Optional instance to populate.
   * @return {module:model/Answers} The populated <code>Answers</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ApiClient.constructFromObject(data, obj, 'Answer');

    }
    return obj;
  }




  return exports;
}));


