
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CreatedAt', 'model/UpdatedAt'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CreatedAt'), require('./UpdatedAt'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.CreatedUpdatedAt = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.CreatedAt, root.Wealthsimple.UpdatedAt);
  }
}(this, function(ApiClient, CreatedAt, UpdatedAt) {
  'use strict';




  /**
   * The CreatedUpdatedAt model module.
   * @module model/CreatedUpdatedAt
   * @version 1.0
   */

  /**
   * Constructs a new <code>CreatedUpdatedAt</code>.
   * @alias module:model/CreatedUpdatedAt
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>CreatedUpdatedAt</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreatedUpdatedAt} obj Optional instance to populate.
   * @return {module:model/CreatedUpdatedAt} The populated <code>CreatedUpdatedAt</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = CreatedAt.constructFromObject(data['created_at']);
      }
      if (data.hasOwnProperty('updated_at')) {
        obj['updated_at'] = UpdatedAt.constructFromObject(data['updated_at']);
      }
    }
    return obj;
  }

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


