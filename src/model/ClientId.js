
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
    root.Wealthsimple.ClientId = factory(root.Wealthsimple.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ClientId model module.
   * @module model/ClientId
   * @version 1.0
   */

  /**
   * Constructs a new <code>ClientId</code>.
   * The unique &#x60;id&#x60; of the Client.  A &#x60;client_id&#x60; can either be a &#x60;person_id&#x60; , &#x60;trust_id&#x60;, or &#x60;corporation_id&#x60;
   * @alias module:model/ClientId
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ClientId</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClientId} obj Optional instance to populate.
   * @return {module:model/ClientId} The populated <code>ClientId</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

    }
    return obj;
  }




  return exports;
}));


