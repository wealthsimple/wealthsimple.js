
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.AnswerHint = factory(root.Wealthsimple.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AnswerHint model module.
   * @module model/AnswerHint
   * @version 1.0
   */

  /**
   * Constructs a new <code>AnswerHint</code>.
   * @alias module:model/AnswerHint
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>AnswerHint</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AnswerHint} obj Optional instance to populate.
   * @return {module:model/AnswerHint} The populated <code>AnswerHint</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('min')) {
        var originalValue = data['min'];
        var parsedValue;
        if (typeof originalValue === "object" && Number.hasOwnProperty('constructFromObject')) {
          parsedValue = Number.constructFromObject(originalValue);
        } else if ('Number' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'Number');
        }
        obj['min'] = parsedValue;
      }
      if (data.hasOwnProperty('max')) {
        var originalValue = data['max'];
        var parsedValue;
        if (typeof originalValue === "object" && Number.hasOwnProperty('constructFromObject')) {
          parsedValue = Number.constructFromObject(originalValue);
        } else if ('Number' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'Number');
        }
        obj['max'] = parsedValue;
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
    }
    return obj;
  }

  /**
   * @member {Number} min
   */
  exports.prototype['min'] = undefined;
  /**
   * @member {Number} max
   */
  exports.prototype['max'] = undefined;
  /**
   * @member {String} text
   */
  exports.prototype['text'] = undefined;



  return exports;
}));


