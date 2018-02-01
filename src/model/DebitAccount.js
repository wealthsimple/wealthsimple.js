
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CreatedAt', 'model/CreatedUpdatedAt', 'model/UpdatedAt'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CreatedAt'), require('./CreatedUpdatedAt'), require('./UpdatedAt'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.DebitAccount = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.CreatedAt, root.Wealthsimple.CreatedUpdatedAt, root.Wealthsimple.UpdatedAt);
  }
}(this, function(ApiClient, CreatedAt, CreatedUpdatedAt, UpdatedAt) {
  'use strict';




  /**
   * The DebitAccount model module.
   * @module model/DebitAccount
   * @version 1.0
   */

  /**
   * Constructs a new <code>DebitAccount</code>.
   * @alias module:model/DebitAccount
   * @class
   * @implements module:model/CreatedUpdatedAt
   */
  var exports = function() {
    var _this = this;

    CreatedUpdatedAt.call(_this);
  };

  /**
   * Constructs a <code>DebitAccount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DebitAccount} obj Optional instance to populate.
   * @return {module:model/DebitAccount} The populated <code>DebitAccount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      CreatedUpdatedAt.constructFromObject(data, obj);
    }
    return obj;
  }


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


