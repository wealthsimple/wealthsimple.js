
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
    instance = new Wealthsimple.SurveysApi();
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

  describe('SurveysApi', function() {
    describe('getSurvey', function() {
      it('should call getSurvey successfully', function(done) {
        //uncomment below and update the code to test getSurvey
        //instance.getSurvey(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listSurveys', function() {
      it('should call listSurveys successfully', function(done) {
        //uncomment below and update the code to test listSurveys
        //instance.listSurveys(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
