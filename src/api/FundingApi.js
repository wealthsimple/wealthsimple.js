
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BankAccountInput', 'model/BankAccountWithFundableAccounts', 'model/BankAccountsPaginated', 'model/Deposit', 'model/DepositRequest', 'model/DepositWithEvents', 'model/DepositsPaginated', 'model/Error', 'model/Withdrawal', 'model/WithdrawalRequest', 'model/WithdrawalsPaginated'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BankAccountInput'), require('../model/BankAccountWithFundableAccounts'), require('../model/BankAccountsPaginated'), require('../model/Deposit'), require('../model/DepositRequest'), require('../model/DepositWithEvents'), require('../model/DepositsPaginated'), require('../model/Error'), require('../model/Withdrawal'), require('../model/WithdrawalRequest'), require('../model/WithdrawalsPaginated'));
  } else {
    // Browser globals (root is window)
    if (!root.Wealthsimple) {
      root.Wealthsimple = {};
    }
    root.Wealthsimple.FundingApi = factory(root.Wealthsimple.ApiClient, root.Wealthsimple.BankAccountInput, root.Wealthsimple.BankAccountWithFundableAccounts, root.Wealthsimple.BankAccountsPaginated, root.Wealthsimple.Deposit, root.Wealthsimple.DepositRequest, root.Wealthsimple.DepositWithEvents, root.Wealthsimple.DepositsPaginated, root.Wealthsimple.Error, root.Wealthsimple.Withdrawal, root.Wealthsimple.WithdrawalRequest, root.Wealthsimple.WithdrawalsPaginated);
  }
}(this, function(ApiClient, BankAccountInput, BankAccountWithFundableAccounts, BankAccountsPaginated, Deposit, DepositRequest, DepositWithEvents, DepositsPaginated, Error, Withdrawal, WithdrawalRequest, WithdrawalsPaginated) {
  'use strict';

  /**
   * Funding service.
   * @module api/FundingApi
   * @version 1.0
   */

  /**
   * Constructs a new FundingApi. 
   * @alias module:api/FundingApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createABankAccount operation.
     * @callback module:api/FundingApi~createABankAccountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BankAccountWithFundableAccounts} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new Bank Account in the system.  Adding a **Bank Account** and getting it to become usable in funding operations (deposits/withdrawals) is a multi-step process.  Generally, the steps are as follows:  1. &#x60;[POST] /bank_accounts&#x60; 2. &#x60;[POST] /documents/&#x60; 3. &#x60;[POST] /bank_accounts/{bank_account_id}/verifications&#x60;  After step (1) the Bank Account is not yet usable. At step (2), a Document is uploaded that proves that the client has **ownership and control** over the Bank Account. At step (3), the Bank Account is updated with a Verification object referencing the uploaded Document. As long as the Bank Account has at least one Verification that is &#x60;accepted&#x60;, it will be usable for funding operations. 
     * @param {module:model/BankAccountInput} bankAccount 
     * @param {module:api/FundingApi~createABankAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BankAccountWithFundableAccounts}
     */
    this.createABankAccount = function(bankAccount, callback) {
      var postBody = bankAccount;

      // verify the required parameter 'bankAccount' is set
      if (bankAccount === undefined || bankAccount === null) {
        throw new Error("Missing the required parameter 'bankAccount' when calling createABankAccount");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = BankAccountWithFundableAccounts;

      return this.apiClient.callApi(
        '/bank_accounts', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createDeposit operation.
     * @callback module:api/FundingApi~createDepositCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Deposit} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     *  Initiates an electronic funds transfer to deposit funds to an Account from a Bank Account 
     * @param {module:model/DepositRequest} deposit 
     * @param {module:api/FundingApi~createDepositCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Deposit}
     */
    this.createDeposit = function(deposit, callback) {
      var postBody = deposit;

      // verify the required parameter 'deposit' is set
      if (deposit === undefined || deposit === null) {
        throw new Error("Missing the required parameter 'deposit' when calling createDeposit");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Deposit;

      return this.apiClient.callApi(
        '/deposits', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createWithdrawal operation.
     * @callback module:api/FundingApi~createWithdrawalCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Withdrawal} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     *  Initiates a request to withdraw funds from an Account to a Bank Account. Withdrawing funds may require that we sell off positions to generate the necessary funds to complete the withdrawal. 
     * @param {module:model/WithdrawalRequest} withdrawal 
     * @param {module:api/FundingApi~createWithdrawalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Withdrawal}
     */
    this.createWithdrawal = function(withdrawal, callback) {
      var postBody = withdrawal;

      // verify the required parameter 'withdrawal' is set
      if (withdrawal === undefined || withdrawal === null) {
        throw new Error("Missing the required parameter 'withdrawal' when calling createWithdrawal");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Withdrawal;

      return this.apiClient.callApi(
        '/withdrawals', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBankAccount operation.
     * @callback module:api/FundingApi~getBankAccountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BankAccountWithFundableAccounts} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     *  Returns a single Bank Account. 
     * @param {String} bankAccountId The &#x60;id&#x60; of the Bank Account entity.
     * @param {module:api/FundingApi~getBankAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BankAccountWithFundableAccounts}
     */
    this.getBankAccount = function(bankAccountId, callback) {
      var postBody = null;

      // verify the required parameter 'bankAccountId' is set
      if (bankAccountId === undefined || bankAccountId === null) {
        throw new Error("Missing the required parameter 'bankAccountId' when calling getBankAccount");
      }


      var pathParams = {
        'bank_account_id': bankAccountId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = BankAccountWithFundableAccounts;

      return this.apiClient.callApi(
        '/bank_accounts/{bank_account_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDeposit operation.
     * @callback module:api/FundingApi~getDepositCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DepositWithEvents} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a Deposit entity.
     * @param {String} fundsTransferId The &#x60;id&#x60; of the Funds Transfer entity.
     * @param {module:api/FundingApi~getDepositCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DepositWithEvents}
     */
    this.getDeposit = function(fundsTransferId, callback) {
      var postBody = null;

      // verify the required parameter 'fundsTransferId' is set
      if (fundsTransferId === undefined || fundsTransferId === null) {
        throw new Error("Missing the required parameter 'fundsTransferId' when calling getDeposit");
      }


      var pathParams = {
        'funds_transfer_id': fundsTransferId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = DepositWithEvents;

      return this.apiClient.callApi(
        '/deposits/{deposit_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWithdrawal operation.
     * @callback module:api/FundingApi~getWithdrawalCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Withdrawal} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a withdrawal
     * @param {String} fundsTransferId The &#x60;id&#x60; of the Funds Transfer entity.
     * @param {module:api/FundingApi~getWithdrawalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Withdrawal}
     */
    this.getWithdrawal = function(fundsTransferId, callback) {
      var postBody = null;

      // verify the required parameter 'fundsTransferId' is set
      if (fundsTransferId === undefined || fundsTransferId === null) {
        throw new Error("Missing the required parameter 'fundsTransferId' when calling getWithdrawal");
      }


      var pathParams = {
        'funds_transfer_id': fundsTransferId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Withdrawal;

      return this.apiClient.callApi(
        '/withdrawals/{withdrawal_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listBankAccounts operation.
     * @callback module:api/FundingApi~listBankAccountsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BankAccountsPaginated} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     *  Returns Bank accounts. As the number of Bank Accounts in the system can be potentially prohibitively large, the results are paginated. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.clientId The &#x60;id&#x60; of the Client entity. A &#x60;client_id&#x60; can be a &#x60;person_id&#x60;, &#x60;trust_id&#x60; or &#x60;corporation_id&#x60;
     * @param {Number} opts.offset The zero-based index of the first result to return (default to 0)
     * @param {Number} opts.limit The maximum number of results to return per page. (default to 25)
     * @param {String} opts.sortBy Attribute to sort results by.
     * @param {module:model/String} opts.sortOrder The sort direction of the results. (default to desc)
     * @param {Array.<String>} opts.externalIds Limits the results only to those with a &#x60;external_id&#x60; in the list.
     * @param {module:api/FundingApi~listBankAccountsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BankAccountsPaginated}
     */
    this.listBankAccounts = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'client_id': opts['clientId'],
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort_by': opts['sortBy'],
        'sort_order': opts['sortOrder'],
      };
      var collectionQueryParams = {
        'external_ids': {
          value: opts['externalIds'],
          collectionFormat: 'csv'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = BankAccountsPaginated;

      return this.apiClient.callApi(
        '/bank_accounts', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listDeposits operation.
     * @callback module:api/FundingApi~listDepositsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DepositsPaginated} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return all deposits. As the number of deposits can be potentially prohibitively large, the results are paginated. By default, the API will return the 25 latest Funds Transfers made in the last 2 weeks.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset The zero-based index of the first result to return (default to 0)
     * @param {Number} opts.limit The maximum number of results to return per page. (default to 25)
     * @param {String} opts.sortBy Attribute to sort results by.
     * @param {module:model/String} opts.sortOrder The sort direction of the results. (default to desc)
     * @param {String} opts.accountId The &#x60;id&#x60; of the Account entity.
     * @param {String} opts.startDate Limits the results returned to only those with a date equal or after this date. (default to 30 days ago)
     * @param {String} opts.endDate Limits the results returned to only those with a date not greater than this date. (default to today)
     * @param {module:api/FundingApi~listDepositsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DepositsPaginated}
     */
    this.listDeposits = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort_by': opts['sortBy'],
        'sort_order': opts['sortOrder'],
        'account_id': opts['accountId'],
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = DepositsPaginated;

      return this.apiClient.callApi(
        '/deposits', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listWithdrawals operation.
     * @callback module:api/FundingApi~listWithdrawalsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WithdrawalsPaginated} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all withdrawals
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset The zero-based index of the first result to return (default to 0)
     * @param {Number} opts.limit The maximum number of results to return per page. (default to 25)
     * @param {String} opts.sortBy Attribute to sort results by.
     * @param {module:model/String} opts.sortOrder The sort direction of the results. (default to desc)
     * @param {String} opts.accountId The &#x60;id&#x60; of the Account entity.
     * @param {String} opts.startDate Limits the results returned to only those with a date equal or after this date. (default to 30 days ago)
     * @param {String} opts.endDate Limits the results returned to only those with a date not greater than this date. (default to today)
     * @param {module:api/FundingApi~listWithdrawalsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WithdrawalsPaginated}
     */
    this.listWithdrawals = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort_by': opts['sortBy'],
        'sort_order': opts['sortOrder'],
        'account_id': opts['accountId'],
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = WithdrawalsPaginated;

      return this.apiClient.callApi(
        '/withdrawals', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
