
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/PoliticallyExposedPerson'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PoliticallyExposedPerson'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.PoliticallyExposedPeople = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.PoliticallyExposedPerson);
  }
}(this, function(ApiClient, PoliticallyExposedPerson) {
  'use strict';




  /**
   * The PoliticallyExposedPeople model module.
   * @module model/PoliticallyExposedPeople
   * @version 1.0
   */

  /**
   * Constructs a new <code>PoliticallyExposedPeople</code>.
   * @alias module:model/PoliticallyExposedPeople
   * @class
   * @extends Array
   */
  var exports = function() {
    var _this = this;
    _this = new Array();
    Object.setPrototypeOf(_this, exports);

    return _this;
  };

  /**
   * Constructs a <code>PoliticallyExposedPeople</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PoliticallyExposedPeople} obj Optional instance to populate.
   * @return {module:model/PoliticallyExposedPeople} The populated <code>PoliticallyExposedPeople</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ApiClient.constructFromObject(data, obj, 'PoliticallyExposedPerson');

    }
    return obj;
  }




  return exports;
}));


