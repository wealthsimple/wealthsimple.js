
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
    root.Wealthsimple.MimeType = factory(root.Wealthsimple.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class MimeType.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "application/json"
     * @const
     */
    "application/json": "application/json",
    /**
     * value: "application/xml"
     * @const
     */
    "application/xml": "application/xml",
    /**
     * value: "application/pdf"
     * @const
     */
    "application/pdf": "application/pdf",
    /**
     * value: "image/pn"
     * @const
     */
    "image/pn": "image/pn",
    /**
     * value: "image/jpeg"
     * @const
     */
    "image/jpeg": "image/jpeg",
    /**
     * value: "image/gif"
     * @const
     */
    "image/gif": "image/gif",
    /**
     * value: "text/html"
     * @const
     */
    "text/html": "text/html",
    /**
     * value: "text/plain"
     * @const
     */
    "text/plain": "text/plain"  };

  /**
   * Returns a <code>MimeType</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/MimeType} The enum <code>MimeType</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));


