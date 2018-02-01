
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
    instance = new Wealthsimple.TrustsApi();
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

  describe('TrustsApi', function() {
    describe('createTrust', function() {
      it('should call createTrust successfully', function(done) {
        //uncomment below and update the code to test createTrust
        //instance.createTrust(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTrust', function() {
      it('should call getTrust successfully', function(done) {
        //uncomment below and update the code to test getTrust
        //instance.getTrust(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listTrusts', function() {
      it('should call listTrusts successfully', function(done) {
        //uncomment below and update the code to test listTrusts
        //instance.listTrusts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateTrust', function() {
      it('should call updateTrust successfully', function(done) {
        //uncomment below and update the code to test updateTrust
        //instance.updateTrust(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
