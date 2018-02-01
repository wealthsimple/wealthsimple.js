
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AccountId', 'model/AccountTransferId', 'model/Institution'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountId'), require('./AccountTransferId'), require('./Institution'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.AccountTransfer = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.AccountId, root.Wealthsimple.AccountTransferId, root.Wealthsimple.Institution);
  }
}(this, function(ApiClient, AccountId, AccountTransferId, Institution) {
  'use strict';




  /**
   * The AccountTransfer model module.
   * @module model/AccountTransfer
   * @version 1.0
   */

  /**
   * Constructs a new <code>AccountTransfer</code>.
   * @alias module:model/AccountTransfer
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>AccountTransfer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountTransfer} obj Optional instance to populate.
   * @return {module:model/AccountTransfer} The populated <code>AccountTransfer</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('object')) {
        obj['object'] = ApiClient.convertToType(data['object'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = AccountTransferId.constructFromObject(data['id']);
      }
      if (data.hasOwnProperty('account_id')) {
        obj['account_id'] = AccountId.constructFromObject(data['account_id']);
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('relinquishing_institution')) {
        obj['relinquishing_institution'] = Institution.constructFromObject(data['relinquishing_institution']);
      }
    }
    return obj;
  }

  /**
   * describes the object type of this entity
   * @member {module:model/AccountTransfer.ObjectEnum} object
   */
  exports.prototype['object'] = undefined;
  /**
   * @member {module:model/AccountTransferId} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/AccountId} account_id
   */
  exports.prototype['account_id'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/Institution} relinquishing_institution
   */
  exports.prototype['relinquishing_institution'] = undefined;


  /**
   * Allowed values for the <code>object</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ObjectEnum = {
    /**
     * value: "account_transfer"
     * @const
     */
    "transfer": "account_transfer"  };


  return exports;
}));


