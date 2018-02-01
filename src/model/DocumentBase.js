
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ExternalId', 'model/Tags'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ExternalId'), require('./Tags'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.DocumentBase = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.ExternalId, root.Wealthsimple.Tags);
  }
}(this, function(ApiClient, ExternalId, Tags) {
  'use strict';




  /**
   * The DocumentBase model module.
   * @module model/DocumentBase
   * @version 1.0
   */

  /**
   * Constructs a new <code>DocumentBase</code>.
   * @alias module:model/DocumentBase
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>DocumentBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocumentBase} obj Optional instance to populate.
   * @return {module:model/DocumentBase} The populated <code>DocumentBase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('external_id')) {
        var originalValue = data['external_id'];
        var parsedValue;
        if (typeof originalValue === "object" && ExternalId.hasOwnProperty('constructFromObject')) {
          parsedValue = ExternalId.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['external_id'] = parsedValue;
      }
      if (data.hasOwnProperty('tags')) {
        var originalValue = data['tags'];
        var parsedValue;
        if (typeof originalValue === "object" && Tags.hasOwnProperty('constructFromObject')) {
          parsedValue = Tags.constructFromObject(originalValue);
        } else {
          parsedValue = ApiClient.convertToType(originalValue, 'String');
        }
        obj['tags'] = parsedValue;
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ExternalId} external_id
   */
  exports.prototype['external_id'] = undefined;
  /**
   * @member {module:model/Tags} tags
   */
  exports.prototype['tags'] = undefined;



  return exports;
}));


