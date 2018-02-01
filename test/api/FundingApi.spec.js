
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
    instance = new Wealthsimple.FundingApi();
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

  describe('FundingApi', function() {
    describe('createABankAccount', function() {
      it('should call createABankAccount successfully', function(done) {
        //uncomment below and update the code to test createABankAccount
        //instance.createABankAccount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createDeposit', function() {
      it('should call createDeposit successfully', function(done) {
        //uncomment below and update the code to test createDeposit
        //instance.createDeposit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createWithdrawal', function() {
      it('should call createWithdrawal successfully', function(done) {
        //uncomment below and update the code to test createWithdrawal
        //instance.createWithdrawal(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBankAccount', function() {
      it('should call getBankAccount successfully', function(done) {
        //uncomment below and update the code to test getBankAccount
        //instance.getBankAccount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDeposit', function() {
      it('should call getDeposit successfully', function(done) {
        //uncomment below and update the code to test getDeposit
        //instance.getDeposit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWithdrawal', function() {
      it('should call getWithdrawal successfully', function(done) {
        //uncomment below and update the code to test getWithdrawal
        //instance.getWithdrawal(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listBankAccounts', function() {
      it('should call listBankAccounts successfully', function(done) {
        //uncomment below and update the code to test listBankAccounts
        //instance.listBankAccounts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listDeposits', function() {
      it('should call listDeposits successfully', function(done) {
        //uncomment below and update the code to test listDeposits
        //instance.listDeposits(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listWithdrawals', function() {
      it('should call listWithdrawals successfully', function(done) {
        //uncomment below and update the code to test listWithdrawals
        //instance.listWithdrawals(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
