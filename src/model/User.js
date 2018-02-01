
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CreatedAt', 'model/CreatedUpdatedAt', 'model/Email', 'model/UpdatedAt', 'model/UserId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CreatedAt'), require('./CreatedUpdatedAt'), require('./Email'), require('./UpdatedAt'), require('./UserId'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.User = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.CreatedAt, root.Wealthsimple.CreatedUpdatedAt, root.Wealthsimple.Email, root.Wealthsimple.UpdatedAt, root.Wealthsimple.UserId);
  }
}(this, function(ApiClient, CreatedAt, CreatedUpdatedAt, Email, UpdatedAt, UserId) {
  'use strict';




  /**
   * The User model module.
   * @module model/User
   * @version 1.0
   */

  /**
   * Constructs a new <code>User</code>.
   * @alias module:model/User
   * @class
   * @implements module:model/CreatedUpdatedAt
   */
  var exports = function() {
    var _this = this;

    CreatedUpdatedAt.call(_this);



  };

  /**
   * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/User} obj Optional instance to populate.
   * @return {module:model/User} The populated <code>User</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      CreatedUpdatedAt.constructFromObject(data, obj);
      if (data.hasOwnProperty('object')) {
        obj['object'] = ApiClient.convertToType(data['object'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = UserId.constructFromObject(data['id']);
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = Email.constructFromObject(data['email']);
      }
    }
    return obj;
  }

  /**
   * describes the object type of this entity
   * @member {module:model/User.ObjectEnum} object
   */
  exports.prototype['object'] = undefined;
  /**
   * @member {module:model/UserId} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/Email} email
   */
  exports.prototype['email'] = undefined;

  // Implement CreatedUpdatedAt interface:
  /**
   * @member {module:model/CreatedAt} created_at
   */
exports.prototype['created_at'] = undefined;

  /**
   * @member {module:model/UpdatedAt} updated_at
   */
exports.prototype['updated_at'] = undefined;


  /**
   * Allowed values for the <code>object</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ObjectEnum = {
    /**
     * value: "user"
     * @const
     */
    "user": "user"  };


  return exports;
}));


