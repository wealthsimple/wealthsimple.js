
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/DocumentBase', 'model/ExternalId', 'model/Tags'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DocumentBase'), require('./ExternalId'), require('./Tags'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.DocumentInput = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.DocumentBase, root.Wealthsimple.ExternalId, root.Wealthsimple.Tags);
  }
}(this, function(ApiClient, DocumentBase, ExternalId, Tags) {
  'use strict';




  /**
   * The DocumentInput model module.
   * @module model/DocumentInput
   * @version 1.0
   */

  /**
   * Constructs a new <code>DocumentInput</code>.
   * @alias module:model/DocumentInput
   * @class
   * @implements module:model/DocumentBase
   */
  var exports = function() {
    var _this = this;

    DocumentBase.call(_this);
  };

  /**
   * Constructs a <code>DocumentInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocumentInput} obj Optional instance to populate.
   * @return {module:model/DocumentInput} The populated <code>DocumentInput</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      DocumentBase.constructFromObject(data, obj);
    }
    return obj;
  }


  // Implement DocumentBase interface:
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


