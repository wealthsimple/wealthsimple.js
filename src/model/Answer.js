
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AnswerId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AnswerId'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.Answer = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.AnswerId);
  }
}(this, function(ApiClient, AnswerId) {
  'use strict';




  /**
   * The Answer model module.
   * @module model/Answer
   * @version 1.0
   */

  /**
   * Constructs a new <code>Answer</code>.
   * @alias module:model/Answer
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Answer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Answer} obj Optional instance to populate.
   * @return {module:model/Answer} The populated <code>Answer</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        var originalValue = data['id'];
        var parsedValue;
        if (typeof originalValue === "object" && AnswerId.hasOwnProperty('constructFromObject')) {
          parsedValue = AnswerId.constructFromObject(originalValue);
        } else if ('AnswerId' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'AnswerId');
        }
        obj['id'] = parsedValue;
      }
      if (data.hasOwnProperty('value')) {
        var originalValue = data['value'];
        var parsedValue;
        if (typeof originalValue === "object" && String.hasOwnProperty('constructFromObject')) {
          parsedValue = String.constructFromObject(originalValue);
        } else if ('String' === 'Object') {
          parsedValue = ApiClient.convertToType(originalValue, Object);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['value'] = parsedValue;
      }
    }
    return obj;
  }

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


