
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
    instance = new Wealthsimple.PeopleApi();
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

  describe('PeopleApi', function() {
    describe('createPerson', function() {
      it('should call createPerson successfully', function(done) {
        //uncomment below and update the code to test createPerson
        //instance.createPerson(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPerson', function() {
      it('should call getPerson successfully', function(done) {
        //uncomment below and update the code to test getPerson
        //instance.getPerson(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listPeople', function() {
      it('should call listPeople successfully', function(done) {
        //uncomment below and update the code to test listPeople
        //instance.listPeople(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatePerson', function() {
      it('should call updatePerson successfully', function(done) {
        //uncomment below and update the code to test updatePerson
        //instance.updatePerson(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
