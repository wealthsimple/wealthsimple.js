
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CreatedAt', 'model/CreatedUpdatedAt', 'model/DocumentBase', 'model/ExternalId', 'model/Tags', 'model/UpdatedAt'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CreatedAt'), require('./CreatedUpdatedAt'), require('./DocumentBase'), require('./ExternalId'), require('./Tags'), require('./UpdatedAt'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.Document = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.CreatedAt, root.Wealthsimple.CreatedUpdatedAt, root.Wealthsimple.DocumentBase, root.Wealthsimple.ExternalId, root.Wealthsimple.Tags, root.Wealthsimple.UpdatedAt);
  }
}(this, function(ApiClient, CreatedAt, CreatedUpdatedAt, DocumentBase, ExternalId, Tags, UpdatedAt) {
  'use strict';




  /**
   * The Document model module.
   * @module model/Document
   * @version 1.0
   */

  /**
   * Constructs a new <code>Document</code>.
   * @alias module:model/Document
   * @class
   * @implements module:model/DocumentBase
   * @implements module:model/CreatedUpdatedAt
   */
  var exports = function() {
    var _this = this;

    DocumentBase.call(_this);
    CreatedUpdatedAt.call(_this);
  };

  /**
   * Constructs a <code>Document</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Document} obj Optional instance to populate.
   * @return {module:model/Document} The populated <code>Document</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      DocumentBase.constructFromObject(data, obj);
      CreatedUpdatedAt.constructFromObject(data, obj);
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

  // Implement CreatedUpdatedAt interface:
  /**
   * @member {module:model/CreatedAt} created_at
   */
exports.prototype['created_at'] = undefined;

  /**
   * @member {module:model/UpdatedAt} updated_at
   */
exports.prototype['updated_at'] = undefined;



  return exports;
}));


