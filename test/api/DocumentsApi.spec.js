
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Wealthsimple);
  }
}(this, function(expect, Wealthsimple) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Wealthsimple.DocumentsApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DocumentsApi', function() {
    describe('createDocument', function() {
      it('should call createDocument successfully', function(done) {
        //uncomment below and update the code to test createDocument
        //instance.createDocument(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDocument', function() {
      it('should call getDocument successfully', function(done) {
        //uncomment below and update the code to test getDocument
        //instance.getDocument(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDocumentBinary', function() {
      it('should call getDocumentBinary successfully', function(done) {
        //uncomment below and update the code to test getDocumentBinary
        //instance.getDocumentBinary(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listDocuments', function() {
      it('should call listDocuments successfully', function(done) {
        //uncomment below and update the code to test listDocuments
        //instance.listDocuments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
