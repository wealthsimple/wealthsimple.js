
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AnswerOption'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AnswerOption'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.AnswerOptions = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.AnswerOption);
  }
}(this, function(ApiClient, AnswerOption) {
  'use strict';




  /**
   * The AnswerOptions model module.
   * @module model/AnswerOptions
   * @version 1.0
   */

  /**
   * Constructs a new <code>AnswerOptions</code>.
   * @alias module:model/AnswerOptions
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
   * Constructs a <code>AnswerOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AnswerOptions} obj Optional instance to populate.
   * @return {module:model/AnswerOptions} The populated <code>AnswerOptions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ApiClient.constructFromObject(data, obj, 'AnswerOption');

    }
    return obj;
  }




  return exports;
}));


