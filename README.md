# @wealthsimple/wealthsimple [![CircleCI](https://circleci.com/gh/wealthsimple/wealthsimple.js.svg?style=svg&circle-token=588c9a24bda879ba0199d8ac005a3cc8dc5f39ba)](https://circleci.com/gh/wealthsimple/wealthsimple.js)

A JavaScript client for Wealthsimple API

This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0
- Package version: 1.0
- Build date: 2018-02-01T01:04:48.335-05:00
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install @wealthsimple/wealthsimple --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your @wealthsimple/wealthsimple from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('@wealthsimple/wealthsimple')` in javascript files from the directory you ran the last
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Wealthsimple = require('@wealthsimple/wealthsimple');

var defaultClient = Wealthsimple.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = "YOUR API KEY"

var api = new Wealthsimple.AccountsApi()

var account = new Wealthsimple.AccountInput(); // {AccountInput} 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createAccount(account, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.sandbox.wealthsimple.com/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Wealthsimple.AccountsApi* | [**createAccount**](docs/AccountsApi.md#createAccount) | **POST** /accounts | 
*Wealthsimple.AccountsApi* | [**getAccount**](docs/AccountsApi.md#getAccount) | **GET** /accounts/{account_id} | 
*Wealthsimple.AccountsApi* | [**listAccounts**](docs/AccountsApi.md#listAccounts) | **GET** /accounts | 
*Wealthsimple.AssessmentsApi* | [**listAccountAssessments**](docs/AssessmentsApi.md#listAccountAssessments) | **GET** /account_assessments | 
*Wealthsimple.AssessmentsApi* | [**listClientAssessments**](docs/AssessmentsApi.md#listClientAssessments) | **GET** /client_assessments | 
*Wealthsimple.CorporationsApi* | [**createCorporation**](docs/CorporationsApi.md#createCorporation) | **POST** /corporations | 
*Wealthsimple.CorporationsApi* | [**getCorporation**](docs/CorporationsApi.md#getCorporation) | **GET** /corporations/{corporation_id} | 
*Wealthsimple.CorporationsApi* | [**listCorporations**](docs/CorporationsApi.md#listCorporations) | **GET** /corporations | 
*Wealthsimple.CorporationsApi* | [**updateCorporation**](docs/CorporationsApi.md#updateCorporation) | **PATCH** /corporations/{corporation_id} | 
*Wealthsimple.DailyValuesApi* | [**listDailyValues**](docs/DailyValuesApi.md#listDailyValues) | **GET** /daily_values | 
*Wealthsimple.DocumentsApi* | [**createDocument**](docs/DocumentsApi.md#createDocument) | **POST** /documents | 
*Wealthsimple.DocumentsApi* | [**getDocument**](docs/DocumentsApi.md#getDocument) | **GET** /documents/{document_id} | 
*Wealthsimple.DocumentsApi* | [**getDocumentBinary**](docs/DocumentsApi.md#getDocumentBinary) | **GET** /documents/{document_id}/file | 
*Wealthsimple.DocumentsApi* | [**listDocuments**](docs/DocumentsApi.md#listDocuments) | **GET** /documents | 
*Wealthsimple.FundingApi* | [**createABankAccount**](docs/FundingApi.md#createABankAccount) | **POST** /bank_accounts | 
*Wealthsimple.FundingApi* | [**createDeposit**](docs/FundingApi.md#createDeposit) | **POST** /deposits | 
*Wealthsimple.FundingApi* | [**createWithdrawal**](docs/FundingApi.md#createWithdrawal) | **POST** /withdrawals | 
*Wealthsimple.FundingApi* | [**getBankAccount**](docs/FundingApi.md#getBankAccount) | **GET** /bank_accounts/{bank_account_id} | 
*Wealthsimple.FundingApi* | [**getDeposit**](docs/FundingApi.md#getDeposit) | **GET** /deposits/{deposit_id} | 
*Wealthsimple.FundingApi* | [**getWithdrawal**](docs/FundingApi.md#getWithdrawal) | **GET** /withdrawals/{withdrawal_id} | 
*Wealthsimple.FundingApi* | [**listBankAccounts**](docs/FundingApi.md#listBankAccounts) | **GET** /bank_accounts | 
*Wealthsimple.FundingApi* | [**listDeposits**](docs/FundingApi.md#listDeposits) | **GET** /deposits | 
*Wealthsimple.FundingApi* | [**listWithdrawals**](docs/FundingApi.md#listWithdrawals) | **GET** /withdrawals | 
*Wealthsimple.HealthcheckApi* | [**healthcheck**](docs/HealthcheckApi.md#healthcheck) | **GET** /healthcheck | 
*Wealthsimple.InstitutionalTransfersApi* | [**getAccountTransfer**](docs/InstitutionalTransfersApi.md#getAccountTransfer) | **GET** /institutional_transfers/{institutional_transfer_id} | 
*Wealthsimple.InstitutionalTransfersApi* | [**listAccountTransfers**](docs/InstitutionalTransfersApi.md#listAccountTransfers) | **GET** /institutional_transfers | 
*Wealthsimple.InstitutionalTransfersApi* | [**listFinancialInstitutions**](docs/InstitutionalTransfersApi.md#listFinancialInstitutions) | **GET** /financial_institutions | 
*Wealthsimple.PeopleApi* | [**createPerson**](docs/PeopleApi.md#createPerson) | **POST** /people | 
*Wealthsimple.PeopleApi* | [**getPerson**](docs/PeopleApi.md#getPerson) | **GET** /people/{person_id} | 
*Wealthsimple.PeopleApi* | [**listPeople**](docs/PeopleApi.md#listPeople) | **GET** /people | 
*Wealthsimple.PeopleApi* | [**updatePerson**](docs/PeopleApi.md#updatePerson) | **PATCH** /people/{person_id} | 
*Wealthsimple.PositionsApi* | [**listPositions**](docs/PositionsApi.md#listPositions) | **GET** /positions | 
*Wealthsimple.SurveysApi* | [**getSurvey**](docs/SurveysApi.md#getSurvey) | **GET** /surveys/{survey_id} | 
*Wealthsimple.SurveysApi* | [**listSurveys**](docs/SurveysApi.md#listSurveys) | **GET** /surveys | 
*Wealthsimple.TransactionsApi* | [**listTransactions**](docs/TransactionsApi.md#listTransactions) | **GET** /transactions | 
*Wealthsimple.TrustsApi* | [**createTrust**](docs/TrustsApi.md#createTrust) | **POST** /trusts | 
*Wealthsimple.TrustsApi* | [**getTrust**](docs/TrustsApi.md#getTrust) | **GET** /trusts/{trust_id} | 
*Wealthsimple.TrustsApi* | [**listTrusts**](docs/TrustsApi.md#listTrusts) | **GET** /trusts | 
*Wealthsimple.TrustsApi* | [**updateTrust**](docs/TrustsApi.md#updateTrust) | **PATCH** /trusts/{trust_id} | 
*Wealthsimple.UsersApi* | [**createUser**](docs/UsersApi.md#createUser) | **POST** /users | 
*Wealthsimple.UsersApi* | [**getUser**](docs/UsersApi.md#getUser) | **GET** /users/{user_id} | 
*Wealthsimple.UsersApi* | [**listUsers**](docs/UsersApi.md#listUsers) | **GET** /users | 


## Documentation for Models

 - [Wealthsimple.AccountBase](docs/AccountBase.md)
 - [Wealthsimple.AccountCreatedAt](docs/AccountCreatedAt.md)
 - [Wealthsimple.AccountId](docs/AccountId.md)
 - [Wealthsimple.AccountNumber](docs/AccountNumber.md)
 - [Wealthsimple.AccountOwner](docs/AccountOwner.md)
 - [Wealthsimple.AccountOwners](docs/AccountOwners.md)
 - [Wealthsimple.AccountTransfer](docs/AccountTransfer.md)
 - [Wealthsimple.AccountTransferEvent](docs/AccountTransferEvent.md)
 - [Wealthsimple.AccountTransferId](docs/AccountTransferId.md)
 - [Wealthsimple.AccountType](docs/AccountType.md)
 - [Wealthsimple.AccountUpdatedAt](docs/AccountUpdatedAt.md)
 - [Wealthsimple.Address](docs/Address.md)
 - [Wealthsimple.Answer](docs/Answer.md)
 - [Wealthsimple.AnswerHint](docs/AnswerHint.md)
 - [Wealthsimple.AnswerId](docs/AnswerId.md)
 - [Wealthsimple.AnswerOptions](docs/AnswerOptions.md)
 - [Wealthsimple.AnswerUpdates](docs/AnswerUpdates.md)
 - [Wealthsimple.Answers](docs/Answers.md)
 - [Wealthsimple.Assessment](docs/Assessment.md)
 - [Wealthsimple.Asset](docs/Asset.md)
 - [Wealthsimple.BankAccountBase](docs/BankAccountBase.md)
 - [Wealthsimple.BankAccountCreatedAt](docs/BankAccountCreatedAt.md)
 - [Wealthsimple.BankAccountId](docs/BankAccountId.md)
 - [Wealthsimple.BankAccountType](docs/BankAccountType.md)
 - [Wealthsimple.BankAccountUpdatedAt](docs/BankAccountUpdatedAt.md)
 - [Wealthsimple.Citizenship](docs/Citizenship.md)
 - [Wealthsimple.Citizenships](docs/Citizenships.md)
 - [Wealthsimple.ClientBase](docs/ClientBase.md)
 - [Wealthsimple.ClientId](docs/ClientId.md)
 - [Wealthsimple.ClientStatus](docs/ClientStatus.md)
 - [Wealthsimple.ClientType](docs/ClientType.md)
 - [Wealthsimple.CorporationDirectors](docs/CorporationDirectors.md)
 - [Wealthsimple.CorporationId](docs/CorporationId.md)
 - [Wealthsimple.CorporationName](docs/CorporationName.md)
 - [Wealthsimple.CorporationOwner](docs/CorporationOwner.md)
 - [Wealthsimple.CorporationOwnerType](docs/CorporationOwnerType.md)
 - [Wealthsimple.CorporationOwners](docs/CorporationOwners.md)
 - [Wealthsimple.CountryCode](docs/CountryCode.md)
 - [Wealthsimple.CreatedAt](docs/CreatedAt.md)
 - [Wealthsimple.CreatedUpdatedAt](docs/CreatedUpdatedAt.md)
 - [Wealthsimple.Currency](docs/Currency.md)
 - [Wealthsimple.CustomIncrement](docs/CustomIncrement.md)
 - [Wealthsimple.DailyValue](docs/DailyValue.md)
 - [Wealthsimple.DateTime](docs/DateTime.md)
 - [Wealthsimple.DebitAccountId](docs/DebitAccountId.md)
 - [Wealthsimple.Dependent](docs/Dependent.md)
 - [Wealthsimple.Dependents](docs/Dependents.md)
 - [Wealthsimple.DocumentBase](docs/DocumentBase.md)
 - [Wealthsimple.DocumentId](docs/DocumentId.md)
 - [Wealthsimple.EffectiveDate](docs/EffectiveDate.md)
 - [Wealthsimple.Email](docs/Email.md)
 - [Wealthsimple.EmailPreferences](docs/EmailPreferences.md)
 - [Wealthsimple.Employment](docs/Employment.md)
 - [Wealthsimple.EmploymentEmployerInfo](docs/EmploymentEmployerInfo.md)
 - [Wealthsimple.EmploymentStatus](docs/EmploymentStatus.md)
 - [Wealthsimple.Error](docs/Error.md)
 - [Wealthsimple.ExternalId](docs/ExternalId.md)
 - [Wealthsimple.FinancialInstitution](docs/FinancialInstitution.md)
 - [Wealthsimple.FinancialInstitutionId](docs/FinancialInstitutionId.md)
 - [Wealthsimple.FinancialInstitutions](docs/FinancialInstitutions.md)
 - [Wealthsimple.FirstName](docs/FirstName.md)
 - [Wealthsimple.FullLegalName](docs/FullLegalName.md)
 - [Wealthsimple.FundsTransferBase](docs/FundsTransferBase.md)
 - [Wealthsimple.FundsTransferEvent](docs/FundsTransferEvent.md)
 - [Wealthsimple.FundsTransferId](docs/FundsTransferId.md)
 - [Wealthsimple.FundsTransferRejectReason](docs/FundsTransferRejectReason.md)
 - [Wealthsimple.FundsTransferScheduleId](docs/FundsTransferScheduleId.md)
 - [Wealthsimple.FundsTransferStatus](docs/FundsTransferStatus.md)
 - [Wealthsimple.FundsTransferType](docs/FundsTransferType.md)
 - [Wealthsimple.Gender](docs/Gender.md)
 - [Wealthsimple.Healthcheck](docs/Healthcheck.md)
 - [Wealthsimple.Insider](docs/Insider.md)
 - [Wealthsimple.Insiders](docs/Insiders.md)
 - [Wealthsimple.Institution](docs/Institution.md)
 - [Wealthsimple.InstitutionId](docs/InstitutionId.md)
 - [Wealthsimple.InstitutionNumber](docs/InstitutionNumber.md)
 - [Wealthsimple.LastName](docs/LastName.md)
 - [Wealthsimple.Locale](docs/Locale.md)
 - [Wealthsimple.MaritalStatus](docs/MaritalStatus.md)
 - [Wealthsimple.MaskedAccountNumber](docs/MaskedAccountNumber.md)
 - [Wealthsimple.MiddleNames](docs/MiddleNames.md)
 - [Wealthsimple.MimeType](docs/MimeType.md)
 - [Wealthsimple.ModelDate](docs/ModelDate.md)
 - [Wealthsimple.Money](docs/Money.md)
 - [Wealthsimple.Name](docs/Name.md)
 - [Wealthsimple.Paginated](docs/Paginated.md)
 - [Wealthsimple.Password](docs/Password.md)
 - [Wealthsimple.Percent](docs/Percent.md)
 - [Wealthsimple.PersonId](docs/PersonId.md)
 - [Wealthsimple.PhoneNumber](docs/PhoneNumber.md)
 - [Wealthsimple.PhoneNumbers](docs/PhoneNumbers.md)
 - [Wealthsimple.PoliticallyExposedPeople](docs/PoliticallyExposedPeople.md)
 - [Wealthsimple.PoliticallyExposedPerson](docs/PoliticallyExposedPerson.md)
 - [Wealthsimple.Position](docs/Position.md)
 - [Wealthsimple.PositionId](docs/PositionId.md)
 - [Wealthsimple.PreferredFirstName](docs/PreferredFirstName.md)
 - [Wealthsimple.ProcessDate](docs/ProcessDate.md)
 - [Wealthsimple.Province](docs/Province.md)
 - [Wealthsimple.QuestionId](docs/QuestionId.md)
 - [Wealthsimple.RangeLimits](docs/RangeLimits.md)
 - [Wealthsimple.RegulatedPeople](docs/RegulatedPeople.md)
 - [Wealthsimple.RegulatedPerson](docs/RegulatedPerson.md)
 - [Wealthsimple.Relation](docs/Relation.md)
 - [Wealthsimple.SpouseOrCommonLaw](docs/SpouseOrCommonLaw.md)
 - [Wealthsimple.StepType](docs/StepType.md)
 - [Wealthsimple.SurveyBase](docs/SurveyBase.md)
 - [Wealthsimple.SurveyDefinitionId](docs/SurveyDefinitionId.md)
 - [Wealthsimple.SurveyId](docs/SurveyId.md)
 - [Wealthsimple.SurveyQuestion](docs/SurveyQuestion.md)
 - [Wealthsimple.SurveyState](docs/SurveyState.md)
 - [Wealthsimple.SurveyUpdate](docs/SurveyUpdate.md)
 - [Wealthsimple.Tag](docs/Tag.md)
 - [Wealthsimple.Tags](docs/Tags.md)
 - [Wealthsimple.TargetPortfolio](docs/TargetPortfolio.md)
 - [Wealthsimple.TargetPortfolioId](docs/TargetPortfolioId.md)
 - [Wealthsimple.TaxDetail](docs/TaxDetail.md)
 - [Wealthsimple.TaxDetailId](docs/TaxDetailId.md)
 - [Wealthsimple.TaxIdentification](docs/TaxIdentification.md)
 - [Wealthsimple.TaxIdentificationNumbers](docs/TaxIdentificationNumbers.md)
 - [Wealthsimple.Transaction](docs/Transaction.md)
 - [Wealthsimple.TransactionId](docs/TransactionId.md)
 - [Wealthsimple.TransactionType](docs/TransactionType.md)
 - [Wealthsimple.TransitNumber](docs/TransitNumber.md)
 - [Wealthsimple.TrustId](docs/TrustId.md)
 - [Wealthsimple.TrustName](docs/TrustName.md)
 - [Wealthsimple.UpdatedAt](docs/UpdatedAt.md)
 - [Wealthsimple.UserBase](docs/UserBase.md)
 - [Wealthsimple.UserId](docs/UserId.md)
 - [Wealthsimple.VerificationBase](docs/VerificationBase.md)
 - [Wealthsimple.VerificationId](docs/VerificationId.md)
 - [Wealthsimple.VerificationMethod](docs/VerificationMethod.md)
 - [Wealthsimple.VerificationStatus](docs/VerificationStatus.md)
 - [Wealthsimple.WithdrawalReason](docs/WithdrawalReason.md)
 - [Wealthsimple.WithdrawalType](docs/WithdrawalType.md)
 - [Wealthsimple.Account](docs/Account.md)
 - [Wealthsimple.AccountCreatedResponse](docs/AccountCreatedResponse.md)
 - [Wealthsimple.AccountInput](docs/AccountInput.md)
 - [Wealthsimple.AccountTransferWithEvents](docs/AccountTransferWithEvents.md)
 - [Wealthsimple.AccountTransfersPaginated](docs/AccountTransfersPaginated.md)
 - [Wealthsimple.AccountValue](docs/AccountValue.md)
 - [Wealthsimple.AccountsPaginated](docs/AccountsPaginated.md)
 - [Wealthsimple.AdjustedBookValue](docs/AdjustedBookValue.md)
 - [Wealthsimple.AnswerOption](docs/AnswerOption.md)
 - [Wealthsimple.AssessmentPaginated](docs/AssessmentPaginated.md)
 - [Wealthsimple.AveragePrice](docs/AveragePrice.md)
 - [Wealthsimple.BankAccountInput](docs/BankAccountInput.md)
 - [Wealthsimple.BankAccountWithFundableAccounts](docs/BankAccountWithFundableAccounts.md)
 - [Wealthsimple.BankAccountsPaginated](docs/BankAccountsPaginated.md)
 - [Wealthsimple.BookValue](docs/BookValue.md)
 - [Wealthsimple.CompletedAt](docs/CompletedAt.md)
 - [Wealthsimple.ContributionValue](docs/ContributionValue.md)
 - [Wealthsimple.CorporationBase](docs/CorporationBase.md)
 - [Wealthsimple.CorporationsPaginated](docs/CorporationsPaginated.md)
 - [Wealthsimple.DailyValuesPaginated](docs/DailyValuesPaginated.md)
 - [Wealthsimple.DebitAccount](docs/DebitAccount.md)
 - [Wealthsimple.DebitBankAccountsPaginated](docs/DebitBankAccountsPaginated.md)
 - [Wealthsimple.Deposit](docs/Deposit.md)
 - [Wealthsimple.DepositRequest](docs/DepositRequest.md)
 - [Wealthsimple.Deposits](docs/Deposits.md)
 - [Wealthsimple.DepositsPaginated](docs/DepositsPaginated.md)
 - [Wealthsimple.DividendsEarned](docs/DividendsEarned.md)
 - [Wealthsimple.Document](docs/Document.md)
 - [Wealthsimple.DocumentInput](docs/DocumentInput.md)
 - [Wealthsimple.DocumentsPaginated](docs/DocumentsPaginated.md)
 - [Wealthsimple.EquityValue](docs/EquityValue.md)
 - [Wealthsimple.FeesPaid](docs/FeesPaid.md)
 - [Wealthsimple.GrossPosition](docs/GrossPosition.md)
 - [Wealthsimple.MarketPrice](docs/MarketPrice.md)
 - [Wealthsimple.MarketValue](docs/MarketValue.md)
 - [Wealthsimple.NetCash](docs/NetCash.md)
 - [Wealthsimple.NetEarnings](docs/NetEarnings.md)
 - [Wealthsimple.NetLiquidation](docs/NetLiquidation.md)
 - [Wealthsimple.NetLiquidationValue](docs/NetLiquidationValue.md)
 - [Wealthsimple.PeoplePaginated](docs/PeoplePaginated.md)
 - [Wealthsimple.PersonBase](docs/PersonBase.md)
 - [Wealthsimple.PositionMarketPrice](docs/PositionMarketPrice.md)
 - [Wealthsimple.PositionMarketValue](docs/PositionMarketValue.md)
 - [Wealthsimple.PositionsPaginated](docs/PositionsPaginated.md)
 - [Wealthsimple.Survey](docs/Survey.md)
 - [Wealthsimple.SurveyInput](docs/SurveyInput.md)
 - [Wealthsimple.SurveysPaginated](docs/SurveysPaginated.md)
 - [Wealthsimple.TargetPortfolioAllocation](docs/TargetPortfolioAllocation.md)
 - [Wealthsimple.TotalDeposits](docs/TotalDeposits.md)
 - [Wealthsimple.TotalDividends](docs/TotalDividends.md)
 - [Wealthsimple.TotalWithdrawals](docs/TotalWithdrawals.md)
 - [Wealthsimple.TransactionsPaginated](docs/TransactionsPaginated.md)
 - [Wealthsimple.TrustBase](docs/TrustBase.md)
 - [Wealthsimple.TrustsPaginated](docs/TrustsPaginated.md)
 - [Wealthsimple.User](docs/User.md)
 - [Wealthsimple.UserInput](docs/UserInput.md)
 - [Wealthsimple.UserPaginated](docs/UserPaginated.md)
 - [Wealthsimple.Verification](docs/Verification.md)
 - [Wealthsimple.VerificationInput](docs/VerificationInput.md)
 - [Wealthsimple.Withdrawal](docs/Withdrawal.md)
 - [Wealthsimple.WithdrawalRequest](docs/WithdrawalRequest.md)
 - [Wealthsimple.Withdrawals](docs/Withdrawals.md)
 - [Wealthsimple.WithdrawalsPaginated](docs/WithdrawalsPaginated.md)
 - [Wealthsimple.Corporation](docs/Corporation.md)
 - [Wealthsimple.CorporationInput](docs/CorporationInput.md)
 - [Wealthsimple.CorporationUpdate](docs/CorporationUpdate.md)
 - [Wealthsimple.DepositWithEvents](docs/DepositWithEvents.md)
 - [Wealthsimple.Person](docs/Person.md)
 - [Wealthsimple.PersonInput](docs/PersonInput.md)
 - [Wealthsimple.PersonUpdate](docs/PersonUpdate.md)
 - [Wealthsimple.Trust](docs/Trust.md)
 - [Wealthsimple.TrustInput](docs/TrustInput.md)
 - [Wealthsimple.TrustUpdate](docs/TrustUpdate.md)


## Documentation for Authorization


### Bearer

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

