
(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AccountBase', 'model/AccountCreatedAt', 'model/AccountId', 'model/AccountNumber', 'model/AccountOwner', 'model/AccountOwners', 'model/AccountTransfer', 'model/AccountTransferEvent', 'model/AccountTransferId', 'model/AccountType', 'model/AccountUpdatedAt', 'model/Address', 'model/Answer', 'model/AnswerHint', 'model/AnswerId', 'model/AnswerOptions', 'model/AnswerUpdates', 'model/Answers', 'model/Assessment', 'model/Asset', 'model/BankAccountBase', 'model/BankAccountCreatedAt', 'model/BankAccountId', 'model/BankAccountType', 'model/BankAccountUpdatedAt', 'model/Citizenship', 'model/Citizenships', 'model/ClientBase', 'model/ClientId', 'model/ClientStatus', 'model/ClientType', 'model/CorporationDirectors', 'model/CorporationId', 'model/CorporationName', 'model/CorporationOwner', 'model/CorporationOwnerType', 'model/CorporationOwners', 'model/CountryCode', 'model/CreatedAt', 'model/CreatedUpdatedAt', 'model/Currency', 'model/CustomIncrement', 'model/DailyValue', 'model/DateTime', 'model/DebitAccountId', 'model/Dependent', 'model/Dependents', 'model/DocumentBase', 'model/DocumentId', 'model/EffectiveDate', 'model/Email', 'model/EmailPreferences', 'model/Employment', 'model/EmploymentEmployerInfo', 'model/EmploymentStatus', 'model/Error', 'model/ExternalId', 'model/FinancialInstitution', 'model/FinancialInstitutionId', 'model/FinancialInstitutions', 'model/FirstName', 'model/FullLegalName', 'model/FundsTransferBase', 'model/FundsTransferEvent', 'model/FundsTransferId', 'model/FundsTransferRejectReason', 'model/FundsTransferScheduleId', 'model/FundsTransferStatus', 'model/FundsTransferType', 'model/Gender', 'model/Healthcheck', 'model/Insider', 'model/Insiders', 'model/Institution', 'model/InstitutionId', 'model/InstitutionNumber', 'model/LastName', 'model/Locale', 'model/MaritalStatus', 'model/MaskedAccountNumber', 'model/MiddleNames', 'model/MimeType', 'model/ModelDate', 'model/Money', 'model/Name', 'model/Paginated', 'model/Password', 'model/Percent', 'model/PersonId', 'model/PhoneNumber', 'model/PhoneNumbers', 'model/PoliticallyExposedPeople', 'model/PoliticallyExposedPerson', 'model/Position', 'model/PositionId', 'model/PreferredFirstName', 'model/ProcessDate', 'model/Province', 'model/QuestionId', 'model/RangeLimits', 'model/RegulatedPeople', 'model/RegulatedPerson', 'model/Relation', 'model/SpouseOrCommonLaw', 'model/StepType', 'model/SurveyBase', 'model/SurveyDefinitionId', 'model/SurveyId', 'model/SurveyQuestion', 'model/SurveyState', 'model/SurveyUpdate', 'model/Tag', 'model/Tags', 'model/TargetPortfolio', 'model/TargetPortfolioId', 'model/TaxDetail', 'model/TaxDetailId', 'model/TaxIdentification', 'model/TaxIdentificationNumbers', 'model/Transaction', 'model/TransactionId', 'model/TransactionType', 'model/TransitNumber', 'model/TrustId', 'model/TrustName', 'model/UpdatedAt', 'model/UserBase', 'model/UserId', 'model/VerificationBase', 'model/VerificationId', 'model/VerificationMethod', 'model/VerificationStatus', 'model/WithdrawalReason', 'model/WithdrawalType', 'model/Account', 'model/AccountCreatedResponse', 'model/AccountInput', 'model/AccountTransferWithEvents', 'model/AccountTransfersPaginated', 'model/AccountValue', 'model/AccountsPaginated', 'model/AdjustedBookValue', 'model/AnswerOption', 'model/AssessmentPaginated', 'model/AveragePrice', 'model/BankAccountInput', 'model/BankAccountWithFundableAccounts', 'model/BankAccountsPaginated', 'model/BookValue', 'model/CompletedAt', 'model/ContributionValue', 'model/CorporationBase', 'model/CorporationsPaginated', 'model/DailyValuesPaginated', 'model/DebitAccount', 'model/DebitBankAccountsPaginated', 'model/Deposit', 'model/DepositRequest', 'model/Deposits', 'model/DepositsPaginated', 'model/DividendsEarned', 'model/Document', 'model/DocumentInput', 'model/DocumentsPaginated', 'model/EquityValue', 'model/FeesPaid', 'model/GrossPosition', 'model/MarketPrice', 'model/MarketValue', 'model/NetCash', 'model/NetEarnings', 'model/NetLiquidation', 'model/NetLiquidationValue', 'model/PeoplePaginated', 'model/PersonBase', 'model/PositionMarketPrice', 'model/PositionMarketValue', 'model/PositionsPaginated', 'model/Survey', 'model/SurveyInput', 'model/SurveysPaginated', 'model/TargetPortfolioAllocation', 'model/TotalDeposits', 'model/TotalDividends', 'model/TotalWithdrawals', 'model/TransactionsPaginated', 'model/TrustBase', 'model/TrustsPaginated', 'model/User', 'model/UserInput', 'model/UserPaginated', 'model/Verification', 'model/VerificationInput', 'model/Withdrawal', 'model/WithdrawalRequest', 'model/Withdrawals', 'model/WithdrawalsPaginated', 'model/Corporation', 'model/CorporationInput', 'model/CorporationUpdate', 'model/DepositWithEvents', 'model/Person', 'model/PersonInput', 'model/PersonUpdate', 'model/Trust', 'model/TrustInput', 'model/TrustUpdate', 'api/AccountsApi', 'api/AssessmentsApi', 'api/CorporationsApi', 'api/DailyValuesApi', 'api/DocumentsApi', 'api/FundingApi', 'api/HealthcheckApi', 'api/InstitutionalTransfersApi', 'api/PeopleApi', 'api/PositionsApi', 'api/SurveysApi', 'api/TransactionsApi', 'api/TrustsApi', 'api/UsersApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AccountBase'), require('./model/AccountCreatedAt'), require('./model/AccountId'), require('./model/AccountNumber'), require('./model/AccountOwner'), require('./model/AccountOwners'), require('./model/AccountTransfer'), require('./model/AccountTransferEvent'), require('./model/AccountTransferId'), require('./model/AccountType'), require('./model/AccountUpdatedAt'), require('./model/Address'), require('./model/Answer'), require('./model/AnswerHint'), require('./model/AnswerId'), require('./model/AnswerOptions'), require('./model/AnswerUpdates'), require('./model/Answers'), require('./model/Assessment'), require('./model/Asset'), require('./model/BankAccountBase'), require('./model/BankAccountCreatedAt'), require('./model/BankAccountId'), require('./model/BankAccountType'), require('./model/BankAccountUpdatedAt'), require('./model/Citizenship'), require('./model/Citizenships'), require('./model/ClientBase'), require('./model/ClientId'), require('./model/ClientStatus'), require('./model/ClientType'), require('./model/CorporationDirectors'), require('./model/CorporationId'), require('./model/CorporationName'), require('./model/CorporationOwner'), require('./model/CorporationOwnerType'), require('./model/CorporationOwners'), require('./model/CountryCode'), require('./model/CreatedAt'), require('./model/CreatedUpdatedAt'), require('./model/Currency'), require('./model/CustomIncrement'), require('./model/DailyValue'), require('./model/DateTime'), require('./model/DebitAccountId'), require('./model/Dependent'), require('./model/Dependents'), require('./model/DocumentBase'), require('./model/DocumentId'), require('./model/EffectiveDate'), require('./model/Email'), require('./model/EmailPreferences'), require('./model/Employment'), require('./model/EmploymentEmployerInfo'), require('./model/EmploymentStatus'), require('./model/Error'), require('./model/ExternalId'), require('./model/FinancialInstitution'), require('./model/FinancialInstitutionId'), require('./model/FinancialInstitutions'), require('./model/FirstName'), require('./model/FullLegalName'), require('./model/FundsTransferBase'), require('./model/FundsTransferEvent'), require('./model/FundsTransferId'), require('./model/FundsTransferRejectReason'), require('./model/FundsTransferScheduleId'), require('./model/FundsTransferStatus'), require('./model/FundsTransferType'), require('./model/Gender'), require('./model/Healthcheck'), require('./model/Insider'), require('./model/Insiders'), require('./model/Institution'), require('./model/InstitutionId'), require('./model/InstitutionNumber'), require('./model/LastName'), require('./model/Locale'), require('./model/MaritalStatus'), require('./model/MaskedAccountNumber'), require('./model/MiddleNames'), require('./model/MimeType'), require('./model/ModelDate'), require('./model/Money'), require('./model/Name'), require('./model/Paginated'), require('./model/Password'), require('./model/Percent'), require('./model/PersonId'), require('./model/PhoneNumber'), require('./model/PhoneNumbers'), require('./model/PoliticallyExposedPeople'), require('./model/PoliticallyExposedPerson'), require('./model/Position'), require('./model/PositionId'), require('./model/PreferredFirstName'), require('./model/ProcessDate'), require('./model/Province'), require('./model/QuestionId'), require('./model/RangeLimits'), require('./model/RegulatedPeople'), require('./model/RegulatedPerson'), require('./model/Relation'), require('./model/SpouseOrCommonLaw'), require('./model/StepType'), require('./model/SurveyBase'), require('./model/SurveyDefinitionId'), require('./model/SurveyId'), require('./model/SurveyQuestion'), require('./model/SurveyState'), require('./model/SurveyUpdate'), require('./model/Tag'), require('./model/Tags'), require('./model/TargetPortfolio'), require('./model/TargetPortfolioId'), require('./model/TaxDetail'), require('./model/TaxDetailId'), require('./model/TaxIdentification'), require('./model/TaxIdentificationNumbers'), require('./model/Transaction'), require('./model/TransactionId'), require('./model/TransactionType'), require('./model/TransitNumber'), require('./model/TrustId'), require('./model/TrustName'), require('./model/UpdatedAt'), require('./model/UserBase'), require('./model/UserId'), require('./model/VerificationBase'), require('./model/VerificationId'), require('./model/VerificationMethod'), require('./model/VerificationStatus'), require('./model/WithdrawalReason'), require('./model/WithdrawalType'), require('./model/Account'), require('./model/AccountCreatedResponse'), require('./model/AccountInput'), require('./model/AccountTransferWithEvents'), require('./model/AccountTransfersPaginated'), require('./model/AccountValue'), require('./model/AccountsPaginated'), require('./model/AdjustedBookValue'), require('./model/AnswerOption'), require('./model/AssessmentPaginated'), require('./model/AveragePrice'), require('./model/BankAccountInput'), require('./model/BankAccountWithFundableAccounts'), require('./model/BankAccountsPaginated'), require('./model/BookValue'), require('./model/CompletedAt'), require('./model/ContributionValue'), require('./model/CorporationBase'), require('./model/CorporationsPaginated'), require('./model/DailyValuesPaginated'), require('./model/DebitAccount'), require('./model/DebitBankAccountsPaginated'), require('./model/Deposit'), require('./model/DepositRequest'), require('./model/Deposits'), require('./model/DepositsPaginated'), require('./model/DividendsEarned'), require('./model/Document'), require('./model/DocumentInput'), require('./model/DocumentsPaginated'), require('./model/EquityValue'), require('./model/FeesPaid'), require('./model/GrossPosition'), require('./model/MarketPrice'), require('./model/MarketValue'), require('./model/NetCash'), require('./model/NetEarnings'), require('./model/NetLiquidation'), require('./model/NetLiquidationValue'), require('./model/PeoplePaginated'), require('./model/PersonBase'), require('./model/PositionMarketPrice'), require('./model/PositionMarketValue'), require('./model/PositionsPaginated'), require('./model/Survey'), require('./model/SurveyInput'), require('./model/SurveysPaginated'), require('./model/TargetPortfolioAllocation'), require('./model/TotalDeposits'), require('./model/TotalDividends'), require('./model/TotalWithdrawals'), require('./model/TransactionsPaginated'), require('./model/TrustBase'), require('./model/TrustsPaginated'), require('./model/User'), require('./model/UserInput'), require('./model/UserPaginated'), require('./model/Verification'), require('./model/VerificationInput'), require('./model/Withdrawal'), require('./model/WithdrawalRequest'), require('./model/Withdrawals'), require('./model/WithdrawalsPaginated'), require('./model/Corporation'), require('./model/CorporationInput'), require('./model/CorporationUpdate'), require('./model/DepositWithEvents'), require('./model/Person'), require('./model/PersonInput'), require('./model/PersonUpdate'), require('./model/Trust'), require('./model/TrustInput'), require('./model/TrustUpdate'), require('./api/AccountsApi'), require('./api/AssessmentsApi'), require('./api/CorporationsApi'), require('./api/DailyValuesApi'), require('./api/DocumentsApi'), require('./api/FundingApi'), require('./api/HealthcheckApi'), require('./api/InstitutionalTransfersApi'), require('./api/PeopleApi'), require('./api/PositionsApi'), require('./api/SurveysApi'), require('./api/TransactionsApi'), require('./api/TrustsApi'), require('./api/UsersApi'));
  }
}(function(ApiClient, AccountBase, AccountCreatedAt, AccountId, AccountNumber, AccountOwner, AccountOwners, AccountTransfer, AccountTransferEvent, AccountTransferId, AccountType, AccountUpdatedAt, Address, Answer, AnswerHint, AnswerId, AnswerOptions, AnswerUpdates, Answers, Assessment, Asset, BankAccountBase, BankAccountCreatedAt, BankAccountId, BankAccountType, BankAccountUpdatedAt, Citizenship, Citizenships, ClientBase, ClientId, ClientStatus, ClientType, CorporationDirectors, CorporationId, CorporationName, CorporationOwner, CorporationOwnerType, CorporationOwners, CountryCode, CreatedAt, CreatedUpdatedAt, Currency, CustomIncrement, DailyValue, DateTime, DebitAccountId, Dependent, Dependents, DocumentBase, DocumentId, EffectiveDate, Email, EmailPreferences, Employment, EmploymentEmployerInfo, EmploymentStatus, Error, ExternalId, FinancialInstitution, FinancialInstitutionId, FinancialInstitutions, FirstName, FullLegalName, FundsTransferBase, FundsTransferEvent, FundsTransferId, FundsTransferRejectReason, FundsTransferScheduleId, FundsTransferStatus, FundsTransferType, Gender, Healthcheck, Insider, Insiders, Institution, InstitutionId, InstitutionNumber, LastName, Locale, MaritalStatus, MaskedAccountNumber, MiddleNames, MimeType, ModelDate, Money, Name, Paginated, Password, Percent, PersonId, PhoneNumber, PhoneNumbers, PoliticallyExposedPeople, PoliticallyExposedPerson, Position, PositionId, PreferredFirstName, ProcessDate, Province, QuestionId, RangeLimits, RegulatedPeople, RegulatedPerson, Relation, SpouseOrCommonLaw, StepType, SurveyBase, SurveyDefinitionId, SurveyId, SurveyQuestion, SurveyState, SurveyUpdate, Tag, Tags, TargetPortfolio, TargetPortfolioId, TaxDetail, TaxDetailId, TaxIdentification, TaxIdentificationNumbers, Transaction, TransactionId, TransactionType, TransitNumber, TrustId, TrustName, UpdatedAt, UserBase, UserId, VerificationBase, VerificationId, VerificationMethod, VerificationStatus, WithdrawalReason, WithdrawalType, Account, AccountCreatedResponse, AccountInput, AccountTransferWithEvents, AccountTransfersPaginated, AccountValue, AccountsPaginated, AdjustedBookValue, AnswerOption, AssessmentPaginated, AveragePrice, BankAccountInput, BankAccountWithFundableAccounts, BankAccountsPaginated, BookValue, CompletedAt, ContributionValue, CorporationBase, CorporationsPaginated, DailyValuesPaginated, DebitAccount, DebitBankAccountsPaginated, Deposit, DepositRequest, Deposits, DepositsPaginated, DividendsEarned, Document, DocumentInput, DocumentsPaginated, EquityValue, FeesPaid, GrossPosition, MarketPrice, MarketValue, NetCash, NetEarnings, NetLiquidation, NetLiquidationValue, PeoplePaginated, PersonBase, PositionMarketPrice, PositionMarketValue, PositionsPaginated, Survey, SurveyInput, SurveysPaginated, TargetPortfolioAllocation, TotalDeposits, TotalDividends, TotalWithdrawals, TransactionsPaginated, TrustBase, TrustsPaginated, User, UserInput, UserPaginated, Verification, VerificationInput, Withdrawal, WithdrawalRequest, Withdrawals, WithdrawalsPaginated, Corporation, CorporationInput, CorporationUpdate, DepositWithEvents, Person, PersonInput, PersonUpdate, Trust, TrustInput, TrustUpdate, AccountsApi, AssessmentsApi, CorporationsApi, DailyValuesApi, DocumentsApi, FundingApi, HealthcheckApi, InstitutionalTransfersApi, PeopleApi, PositionsApi, SurveysApi, TransactionsApi, TrustsApi, UsersApi) {
  'use strict';

  /**
   * _IntroductionWelcome_to_the_Wealthsimple_API_reference_Wealthsimple_API_provides_the_basic_building_blocks_for_creating_and_funding_investment_accounts_as_well_as_retrieving_account_values_and_transaction_data_The_API_is_built_around_REST_conventions_and_is_designed_to_have_predictable_resource_oriented_endpoints__Keep_reading_below_for_more_information_on_each_specific_call_Note__The_API_is_currently_in_the_Request_For_Comments__RFC_phase_and_is_not_yet_ready_for_public_consumption__Many_endpoints_have_not_yet_been_implemented_and_will_return_501_Not_Yet_Implemented_status_code___The_API_is_currently_focused_on_read_only_operations__We_will_eventually_expand_it_to_allow_for_creatingupdatingdeleting_resources__API_hostshttpsapi_sandbox_wealthsimple_com__Sandboxhttpsapi_production_wealthsimple_com__ProductionThe_Sandbox_environment_is_unrestricted_and_should_be_used_for_all_testing__When_youre_getting_ready_to_launch_into_Production_please_request_Production_API_access_by_reaching_out_to_a_hrefmailtoapi_supportwealthsimple_comAPI_supporta__AuthenticationAll_resources_within_the_API_require_authentication_via_standard_OAuth_2_grant_flows_The_Wealthsimple_API_supports_client_credentials_authorization_code_and_password_grant_types__Using_password_is_strongly_discouraged_and_should_be_reserved_for_special_circumstances_such_as_creating_a_new_user__immediately_authenticating_as_them_More_information_about_OAuth_2_grant_flows_can_be_found_in__Section_4_of_the_OAuth_2_RFC_httpstools_ietf_orghtmlrfc6749section_4__UserlessApplication_only_AuthenticationFor_all_non_resource_owner_specific_endpoints_where_you_do_not_need_to_act_on_users_behalf_you_can_choose_to_authenticate_only_using_your_application_credentials__Request_an_access_tokenjsonPOST_httpsapi_sandbox_wealthsimple_comv1oauthtoken__client_id_YOUR_CLIENT_ID__client_secret_YOUR_CLIENT_SECRET__grant_type_client_credentialsWe_also_support_client_application_authentication_via_the_Authorization_header__The_format_is_HTTP_Basic_authentication_with_the_value_being_a_base64_encoding_of_YOUR_CLIENT_IDYOUR_CLIENT_SECRET_POST_httpsapi_sandbox_wealthsimple_comv1oauthtokenAuthorization_Basic_czZCaGRSa3F0MzpnWDFmQmF0M2JWContent_Type_applicationx_www_form_urlencoded_Example_responsejson__access_token_de6780bc506a0446309bd9362820ba8aed28aa506c71eedbe1c5c4f9dd350e54__token_type_bearer__expires_in_7200__created_at_1500123132_Using_the_tokenYou_can_now_access_protected_anonymoususerless_level_API_endpoints_by_passing_the_token_in_the_headers_like_sojsonHeadersAuthroization_Bearer_ACCESS_TOKEN_Authenticating_as_a_User_in_your_Application__Resource_OwnerFor_any_action_where_you_need_to_act_on_a_users_behalf_you_can_go_through_the_authorization_code_or_password_grant_flow_to_obtain_an_access_token_associated_with_a_resource_owner__Most_of_our_endpoints_are_designed_to_be_called_by_a_user_While_the_password_grant_flow_is_supported_it_is_recommended_you_authenticate_using_authorization_code__If_you_must_use_password_we_strongly_discourage_you_storing_the_users_password_even_if_encrypted__There_are_severe_security_implications_by_doing_so__Access_Token_via_User_Authorization_Obtain_User_Authorization_ApprovalYour_OAuth_application_must_redirect_the_user_to_the_authorization_endpoint__It_will_inform_the_user_your_application_wishes_to_gain_access_to_their_account__If_they_approve_access_the_user_will_be_redirected_to_your_applications_YOUR_CALLBACK_URI_with_the_authorization_code_The_YOUR_CALLBACK_URI_for_your_application_is_defined_ahead_of_time_when_your_credentials_were_issued_and_the_requests_redirect_uri_must_match_whats_been_configured_Note_If_a_user_has_previously_authorized_your_application_the_prompt_will_be_skipped_and_the_user_is_redirected_with_the_code_automatically_Below_is_the_URL_your_application_must_direct_the_user_toGET_httpsstaging_wealthsimple_comauthorizeclient_idYOUR_CLIENT_ID____redirect_uriYOUR_CALLBACK_URI____stateYOUR_CSRF_TOKEN____response_typecodeNote_For_production_the_URL_is_httpsmy_wealthsimple_comauthorizeThe_state_parameter_is_optional_but_recommended_to_guard_against_CSRF_attacks__It_is_a_random_value_chosen_by_your_application_to_maintain_state_between_the_request_and_callback__It_ensures_the_callback_the_application_receives_is_the_one_initiated_by_your_request__Example_ResponseUser_is_presented_our_authorization_page_for_approval__Since_we_use_a_single_page_application_it_will_redirect_to_where_the_app_livesHTTP1_1_302_FoundLocation_httpsstaging_wealthsimple_comappauthorizeclient_idYOUR_CLIENT_ID____redirect_uriYOUR_CALLBACK_URI____stateYOUR_CSRF_TOKEN____response_typecodeIf_they_have_an_active_Wealthsimple_session_theyll_be_displayed_the_prompt_otherwise_theyll_be_presented_with_our_login_page_first_Once_they_approve_access_they_will_be_redirected_back_to_your_appHTTP1_1_302_FoundLocation_YOUR_CALLBACK_URIcode6309bd71eedaa59362820babc506a0448aed28678006cdebe1c5c4f9dd350e54stateYOUR_CSRF_TOKEN_Example_Response__Previously_ApprovedUser_is_immediately_redirected_back_to_your_app_no_prompt_required_no_single_page_application_loading_HTTP1_1_302_FoundLocation_YOUR_CALLBACK_URIcode6309bd71eedaa59362820babc506a0448aed28678006cdebe1c5c4f9dd350e54stateYOUR_CSRF_TOKEN_Example_Response__User_Denies_AccessThe_API_will_still_redirect_to_your_application_but_with_error_set__You_can_use_this_to_gracefully_inform_the_user_why_you_need_authorizationHTTP1_1_302_FoundLocation_YOUR_CALLBACK_URIerroraccess_deniederror_descriptionTheresourceownerorauthorizationserverdeniedtherequest_state1234_Exchange_Authorization_Code_for_Access_TokenThe_application_upon_receiving_the_authorization_code_from_the_callback_in_the_authorization_step_should_post_to_the_token_endpoint_to_exchange_it_for_a_long_lived_access_tokenPOST_httpsapi_sandbox_wealthsimple_comv1oauthtoken__grant_type_authorization_code__client_id_YOUR_CLIENT_ID__client_secret_YOUR_CLIENT_SECRET__redirect_uri__YOUR_CALLBACK_URI__code_6309bd71eedaa59362820babc506a0448aed28678006cdebe1c5c4f9dd350e54The_application_must_authenticate_itself_with_its_client_secret_and_pass_the_code_parameter_received_prior__Example_responsejson__access_token_de6780bc506a0446309bd9362820ba8aed28aa506c71eedbe1c5c4f9dd350e54__token_type_bearer__expires_in_7200__created_at_1500123132_Access_Token_via_User_CredentialsjsonPOST_httpsapi_sandbox_wealthsimple_comv1oauthtoken__grant_type_password__client_id_YOUR_CLIENT_ID__client_secret_YOUR_CLIENT_SECRET__username_USERNAME_OF_USER__password_PASSWORD_OF_USEROr_alternatively_you_can_use_HTTP_Basic_to_authenticate_your_application_client_as_described_in_the_application_authentication_sectionjsonPOST_httpsapi_sandbox_wealthsimple_comv1oauthtokenAuthorization_Basic_czZCaGRSa3F0MzpnWDFmQmF0M2JW__grant_type_password__username_USERNAME_OF_USER__password_PASSWORD_OF_USERWe_expect_you_identify_your_client_application_during_the_password_grant_flow_so_we_properly_enforce_which_users_can_authenticate_through_your_application__Example_responsejson__access_token_de6780bc506a0446309bd9362820ba8aed28aa506c71eedbe1c5c4f9dd350e54__token_type_bearer__expires_in_7200__created_at_1500123132_Users_with_Two_Factor_AuthenticationSome_users_may_have_enabled__Two_Factor_Authentication_httpsen_wikipedia_orgwikiMulti_factor_authentication__2FA_for_additional_security__We_currently_support_two_methods_of_2FA_mobile_SMS_codes_and_mobile_authenticator_apps_like__Google_Authenticator_httpsplay_google_comstoreappsdetailsidcom_google_android_apps_authenticator2hlen__When_authenticating_with_password_for_a_user_with_2FA_enabled_the_endpoint_will_fail_with_a_401_Unauthorized_even_if_you_provided_the_correct_username__password__At_first_glance_this_appears_indistinguishable_from_a_response_when_an_invalid_username_or_password_is_provided_In_order_to_maintain_OAuth_2_spec_we_set_the_X_Wealthsimple_OTP_response_header_so_your_application_can_determine_if_a_2FA_code__OTP_is_required_or_if_its_just_bad_credentials__In_this_scenario_your_application_should_prompt_the_user_for_their_OTP_code_and_replay_your_original_password_request_with_the_header_X_Wealthsimple_OTP_set_to_the_value_of_the_OTP_given_by_the_user_The_structure_of_the_response_X_Wealthsimple_OTP_header_is_semicolon_delimited_and_is_comprised_of_3_parts_the_message_the_2FA_method_the_user_is_using_and_the_last_4_digits_of_their_phone__if_applicable__The_method_can_be_either_app_or_sms_currently_and_you_can_use_this_to_gracefully_tell_the_user_what_do_to_get_their_OTP_codeX_Wealthsimple_OTP_MESSAGE_methodMETHOD_digitsDIGITS_MESSAGE_will_either_be_required_if_you_dont_send_the_OTP_code_or_invalid_if_the_OTP_provided_is_bad__METHOD_currently_will_either_be_app_for_Google_Authenticator_or_sms_if_theyre_using_a_mobile_device_DIGITS_will_be_the_users_last_4_digits_of_their_2FA_phone_number_on_file__This_field_may_not_be_present_if_user_is_using_app___Note___If_the_user_is_using_sms_they_will_automatically_receive_a_text_message_from_us_every_time_your_application_attempts_to_authenticate_without_providing_an_OTP_code__Authentication_Example_with_Two_Factor_AuthenticationRequestjsonPOST_httpsapi_sandbox_wealthsimple_comv1oauthtokenAuthorization_Basic_czZCaGRSa3F0MzpnWDFmQmF0M2JW__grant_type_password__username_USERNAME_OF_USER__password_PASSWORD_OF_USERResponseHTTP1_0_401_UnauthorizedX_Wealthsimple_OTP_required_methodsms_digits7375____error_invalid_grant____error_description_The_provided_authorization_grant_is_invalid_expired_revoked_does_not_match_the_redirection_URI_used_in_the_authorization_request_or_was_issued_to_another_client_At_this_point_the_user_will_have_received_an_OTP_code_on_their_mobile_device_which_they_provide_to_the_application_Subsequent_RequestjsonPOST_httpsapi_sandbox_wealthsimple_comv1oauthtokenAuthorization_Basic_czZCaGRSa3F0MzpnWDFmQmF0M2JWX_Wealthsimple_OTP_682932__grant_type_password__username_USERNAME_OF_USER__password_PASSWORD_OF_USERSubsequent_Responsejson__access_token_de6780bc506a0446309bd9362820ba8aed28aa506c71eedbe1c5c4f9dd350e54__token_type_bearer__expires_in_7200__created_at_1500123132_Using_the_Access_TokenYou_can_now_access_protected_user_centric_API_endpoints_by_passing_the_token_in_the_Authorization_headerAuthorization_Bearer_ACCESS_TOKEN_Viewing_your_Authentication_InfoWe_have_an_endpoint_you_can_call_should_your_application_need_more_information_about_the_authentication_its_been_granted__This_can_especially_be_the_case_for_when_authenticated_as_a_resource_owner_as_they_have_a_unique_identifier_you_can_use_GET_httpsapi_sandbox_wealthsimple_comv1oauthtokeninfoAuthorization_Bearer_ACCESS_TOKENIf_you_authenticated_as_your_application_and_not_as_a_user_then_resource_owner_id_will_be_set_to_null__Example_responsejson____token_________id_4655________resource_owner_id_user_n5vhwz7ti9q________application_id_24________token_de6780bc506a0446309bd9362820ba8aed28aa506c71eedbe1c5c4f9dd350e54________refresh_token_null________expires_in_7200________revoked_at_null________created_at_2017_08_17T213351_884Z________scopes_________previous_refresh_token_________application_family_id_dunder_mifflin_____PaginationMany_of_the_GET_APIs_that_return_a_collection_of_results_are_paginated_because_the_size_of_result_set_can_be_prohibitively_large___These_APIs_take_a_first_result_and_max_results_as_queryparameters___The_first_result_is_an_index_offset_and_the_max_results_determines_the_upper_limit_on_how_many_results_will_be_returned_per_call___If_the_API_has_additional_query_parametersit_is_important_to_resend_them_on_subsequent_page_requests_otherwise_the_result_set_will_differ___That_being_said_some_queries_are_inherently_unstable___For_example_if_you_query_for_Clientsand_the_sort_order_is_descending_if_the_creation_date_parameter_is_not_fixed_as_new_Clients_are_added_to_the_system_it_will_push_older_clients_into_subsequent_pages__ErrorsWealthsimple_uses_conventional_HTTP_response_codes_to_indicate_the_success_or_failure_of_an_API_request__In_general_codes_in_the_2xx_range_indicate_success_codes_in_the_4xx_range_indicate_an_error_that_failed_given_the_information_provided__e_g__a_required_parameter_was_omitted_missing_additional_information_etc__and_codes_in_the_5xx_range_indicate_an_error_with_Wealthsimples_servers_Not_all_errors_map_cleanly_onto_HTTP_response_codes_however__When_a_request_is_valid_but_does_not_complete_successfully_we_return_a_402_error_code_and_will_include_a_code_in_the_error_for_you_to_understand_why___Refer_to_the_list_of_codes_in_the_documentation_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var Wealthsimple = require('index'); // See note below*.
   * var xxxSvc = new Wealthsimple.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new Wealthsimple.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new Wealthsimple.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new Wealthsimple.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AccountBase model constructor.
     * @property {module:model/AccountBase}
     */
    AccountBase: AccountBase,
    /**
     * The AccountCreatedAt model constructor.
     * @property {module:model/AccountCreatedAt}
     */
    AccountCreatedAt: AccountCreatedAt,
    /**
     * The AccountId model constructor.
     * @property {module:model/AccountId}
     */
    AccountId: AccountId,
    /**
     * The AccountNumber model constructor.
     * @property {module:model/AccountNumber}
     */
    AccountNumber: AccountNumber,
    /**
     * The AccountOwner model constructor.
     * @property {module:model/AccountOwner}
     */
    AccountOwner: AccountOwner,
    /**
     * The AccountOwners model constructor.
     * @property {module:model/AccountOwners}
     */
    AccountOwners: AccountOwners,
    /**
     * The AccountTransfer model constructor.
     * @property {module:model/AccountTransfer}
     */
    AccountTransfer: AccountTransfer,
    /**
     * The AccountTransferEvent model constructor.
     * @property {module:model/AccountTransferEvent}
     */
    AccountTransferEvent: AccountTransferEvent,
    /**
     * The AccountTransferId model constructor.
     * @property {module:model/AccountTransferId}
     */
    AccountTransferId: AccountTransferId,
    /**
     * The AccountType model constructor.
     * @property {module:model/AccountType}
     */
    AccountType: AccountType,
    /**
     * The AccountUpdatedAt model constructor.
     * @property {module:model/AccountUpdatedAt}
     */
    AccountUpdatedAt: AccountUpdatedAt,
    /**
     * The Address model constructor.
     * @property {module:model/Address}
     */
    Address: Address,
    /**
     * The Answer model constructor.
     * @property {module:model/Answer}
     */
    Answer: Answer,
    /**
     * The AnswerHint model constructor.
     * @property {module:model/AnswerHint}
     */
    AnswerHint: AnswerHint,
    /**
     * The AnswerId model constructor.
     * @property {module:model/AnswerId}
     */
    AnswerId: AnswerId,
    /**
     * The AnswerOptions model constructor.
     * @property {module:model/AnswerOptions}
     */
    AnswerOptions: AnswerOptions,
    /**
     * The AnswerUpdates model constructor.
     * @property {module:model/AnswerUpdates}
     */
    AnswerUpdates: AnswerUpdates,
    /**
     * The Answers model constructor.
     * @property {module:model/Answers}
     */
    Answers: Answers,
    /**
     * The Assessment model constructor.
     * @property {module:model/Assessment}
     */
    Assessment: Assessment,
    /**
     * The Asset model constructor.
     * @property {module:model/Asset}
     */
    Asset: Asset,
    /**
     * The BankAccountBase model constructor.
     * @property {module:model/BankAccountBase}
     */
    BankAccountBase: BankAccountBase,
    /**
     * The BankAccountCreatedAt model constructor.
     * @property {module:model/BankAccountCreatedAt}
     */
    BankAccountCreatedAt: BankAccountCreatedAt,
    /**
     * The BankAccountId model constructor.
     * @property {module:model/BankAccountId}
     */
    BankAccountId: BankAccountId,
    /**
     * The BankAccountType model constructor.
     * @property {module:model/BankAccountType}
     */
    BankAccountType: BankAccountType,
    /**
     * The BankAccountUpdatedAt model constructor.
     * @property {module:model/BankAccountUpdatedAt}
     */
    BankAccountUpdatedAt: BankAccountUpdatedAt,
    /**
     * The Citizenship model constructor.
     * @property {module:model/Citizenship}
     */
    Citizenship: Citizenship,
    /**
     * The Citizenships model constructor.
     * @property {module:model/Citizenships}
     */
    Citizenships: Citizenships,
    /**
     * The ClientBase model constructor.
     * @property {module:model/ClientBase}
     */
    ClientBase: ClientBase,
    /**
     * The ClientId model constructor.
     * @property {module:model/ClientId}
     */
    ClientId: ClientId,
    /**
     * The ClientStatus model constructor.
     * @property {module:model/ClientStatus}
     */
    ClientStatus: ClientStatus,
    /**
     * The ClientType model constructor.
     * @property {module:model/ClientType}
     */
    ClientType: ClientType,
    /**
     * The CorporationDirectors model constructor.
     * @property {module:model/CorporationDirectors}
     */
    CorporationDirectors: CorporationDirectors,
    /**
     * The CorporationId model constructor.
     * @property {module:model/CorporationId}
     */
    CorporationId: CorporationId,
    /**
     * The CorporationName model constructor.
     * @property {module:model/CorporationName}
     */
    CorporationName: CorporationName,
    /**
     * The CorporationOwner model constructor.
     * @property {module:model/CorporationOwner}
     */
    CorporationOwner: CorporationOwner,
    /**
     * The CorporationOwnerType model constructor.
     * @property {module:model/CorporationOwnerType}
     */
    CorporationOwnerType: CorporationOwnerType,
    /**
     * The CorporationOwners model constructor.
     * @property {module:model/CorporationOwners}
     */
    CorporationOwners: CorporationOwners,
    /**
     * The CountryCode model constructor.
     * @property {module:model/CountryCode}
     */
    CountryCode: CountryCode,
    /**
     * The CreatedAt model constructor.
     * @property {module:model/CreatedAt}
     */
    CreatedAt: CreatedAt,
    /**
     * The CreatedUpdatedAt model constructor.
     * @property {module:model/CreatedUpdatedAt}
     */
    CreatedUpdatedAt: CreatedUpdatedAt,
    /**
     * The Currency model constructor.
     * @property {module:model/Currency}
     */
    Currency: Currency,
    /**
     * The CustomIncrement model constructor.
     * @property {module:model/CustomIncrement}
     */
    CustomIncrement: CustomIncrement,
    /**
     * The DailyValue model constructor.
     * @property {module:model/DailyValue}
     */
    DailyValue: DailyValue,
    /**
     * The DateTime model constructor.
     * @property {module:model/DateTime}
     */
    DateTime: DateTime,
    /**
     * The DebitAccountId model constructor.
     * @property {module:model/DebitAccountId}
     */
    DebitAccountId: DebitAccountId,
    /**
     * The Dependent model constructor.
     * @property {module:model/Dependent}
     */
    Dependent: Dependent,
    /**
     * The Dependents model constructor.
     * @property {module:model/Dependents}
     */
    Dependents: Dependents,
    /**
     * The DocumentBase model constructor.
     * @property {module:model/DocumentBase}
     */
    DocumentBase: DocumentBase,
    /**
     * The DocumentId model constructor.
     * @property {module:model/DocumentId}
     */
    DocumentId: DocumentId,
    /**
     * The EffectiveDate model constructor.
     * @property {module:model/EffectiveDate}
     */
    EffectiveDate: EffectiveDate,
    /**
     * The Email model constructor.
     * @property {module:model/Email}
     */
    Email: Email,
    /**
     * The EmailPreferences model constructor.
     * @property {module:model/EmailPreferences}
     */
    EmailPreferences: EmailPreferences,
    /**
     * The Employment model constructor.
     * @property {module:model/Employment}
     */
    Employment: Employment,
    /**
     * The EmploymentEmployerInfo model constructor.
     * @property {module:model/EmploymentEmployerInfo}
     */
    EmploymentEmployerInfo: EmploymentEmployerInfo,
    /**
     * The EmploymentStatus model constructor.
     * @property {module:model/EmploymentStatus}
     */
    EmploymentStatus: EmploymentStatus,
    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error: Error,
    /**
     * The ExternalId model constructor.
     * @property {module:model/ExternalId}
     */
    ExternalId: ExternalId,
    /**
     * The FinancialInstitution model constructor.
     * @property {module:model/FinancialInstitution}
     */
    FinancialInstitution: FinancialInstitution,
    /**
     * The FinancialInstitutionId model constructor.
     * @property {module:model/FinancialInstitutionId}
     */
    FinancialInstitutionId: FinancialInstitutionId,
    /**
     * The FinancialInstitutions model constructor.
     * @property {module:model/FinancialInstitutions}
     */
    FinancialInstitutions: FinancialInstitutions,
    /**
     * The FirstName model constructor.
     * @property {module:model/FirstName}
     */
    FirstName: FirstName,
    /**
     * The FullLegalName model constructor.
     * @property {module:model/FullLegalName}
     */
    FullLegalName: FullLegalName,
    /**
     * The FundsTransferBase model constructor.
     * @property {module:model/FundsTransferBase}
     */
    FundsTransferBase: FundsTransferBase,
    /**
     * The FundsTransferEvent model constructor.
     * @property {module:model/FundsTransferEvent}
     */
    FundsTransferEvent: FundsTransferEvent,
    /**
     * The FundsTransferId model constructor.
     * @property {module:model/FundsTransferId}
     */
    FundsTransferId: FundsTransferId,
    /**
     * The FundsTransferRejectReason model constructor.
     * @property {module:model/FundsTransferRejectReason}
     */
    FundsTransferRejectReason: FundsTransferRejectReason,
    /**
     * The FundsTransferScheduleId model constructor.
     * @property {module:model/FundsTransferScheduleId}
     */
    FundsTransferScheduleId: FundsTransferScheduleId,
    /**
     * The FundsTransferStatus model constructor.
     * @property {module:model/FundsTransferStatus}
     */
    FundsTransferStatus: FundsTransferStatus,
    /**
     * The FundsTransferType model constructor.
     * @property {module:model/FundsTransferType}
     */
    FundsTransferType: FundsTransferType,
    /**
     * The Gender model constructor.
     * @property {module:model/Gender}
     */
    Gender: Gender,
    /**
     * The Healthcheck model constructor.
     * @property {module:model/Healthcheck}
     */
    Healthcheck: Healthcheck,
    /**
     * The Insider model constructor.
     * @property {module:model/Insider}
     */
    Insider: Insider,
    /**
     * The Insiders model constructor.
     * @property {module:model/Insiders}
     */
    Insiders: Insiders,
    /**
     * The Institution model constructor.
     * @property {module:model/Institution}
     */
    Institution: Institution,
    /**
     * The InstitutionId model constructor.
     * @property {module:model/InstitutionId}
     */
    InstitutionId: InstitutionId,
    /**
     * The InstitutionNumber model constructor.
     * @property {module:model/InstitutionNumber}
     */
    InstitutionNumber: InstitutionNumber,
    /**
     * The LastName model constructor.
     * @property {module:model/LastName}
     */
    LastName: LastName,
    /**
     * The Locale model constructor.
     * @property {module:model/Locale}
     */
    Locale: Locale,
    /**
     * The MaritalStatus model constructor.
     * @property {module:model/MaritalStatus}
     */
    MaritalStatus: MaritalStatus,
    /**
     * The MaskedAccountNumber model constructor.
     * @property {module:model/MaskedAccountNumber}
     */
    MaskedAccountNumber: MaskedAccountNumber,
    /**
     * The MiddleNames model constructor.
     * @property {module:model/MiddleNames}
     */
    MiddleNames: MiddleNames,
    /**
     * The MimeType model constructor.
     * @property {module:model/MimeType}
     */
    MimeType: MimeType,
    /**
     * The ModelDate model constructor.
     * @property {module:model/ModelDate}
     */
    ModelDate: ModelDate,
    /**
     * The Money model constructor.
     * @property {module:model/Money}
     */
    Money: Money,
    /**
     * The Name model constructor.
     * @property {module:model/Name}
     */
    Name: Name,
    /**
     * The Paginated model constructor.
     * @property {module:model/Paginated}
     */
    Paginated: Paginated,
    /**
     * The Password model constructor.
     * @property {module:model/Password}
     */
    Password: Password,
    /**
     * The Percent model constructor.
     * @property {module:model/Percent}
     */
    Percent: Percent,
    /**
     * The PersonId model constructor.
     * @property {module:model/PersonId}
     */
    PersonId: PersonId,
    /**
     * The PhoneNumber model constructor.
     * @property {module:model/PhoneNumber}
     */
    PhoneNumber: PhoneNumber,
    /**
     * The PhoneNumbers model constructor.
     * @property {module:model/PhoneNumbers}
     */
    PhoneNumbers: PhoneNumbers,
    /**
     * The PoliticallyExposedPeople model constructor.
     * @property {module:model/PoliticallyExposedPeople}
     */
    PoliticallyExposedPeople: PoliticallyExposedPeople,
    /**
     * The PoliticallyExposedPerson model constructor.
     * @property {module:model/PoliticallyExposedPerson}
     */
    PoliticallyExposedPerson: PoliticallyExposedPerson,
    /**
     * The Position model constructor.
     * @property {module:model/Position}
     */
    Position: Position,
    /**
     * The PositionId model constructor.
     * @property {module:model/PositionId}
     */
    PositionId: PositionId,
    /**
     * The PreferredFirstName model constructor.
     * @property {module:model/PreferredFirstName}
     */
    PreferredFirstName: PreferredFirstName,
    /**
     * The ProcessDate model constructor.
     * @property {module:model/ProcessDate}
     */
    ProcessDate: ProcessDate,
    /**
     * The Province model constructor.
     * @property {module:model/Province}
     */
    Province: Province,
    /**
     * The QuestionId model constructor.
     * @property {module:model/QuestionId}
     */
    QuestionId: QuestionId,
    /**
     * The RangeLimits model constructor.
     * @property {module:model/RangeLimits}
     */
    RangeLimits: RangeLimits,
    /**
     * The RegulatedPeople model constructor.
     * @property {module:model/RegulatedPeople}
     */
    RegulatedPeople: RegulatedPeople,
    /**
     * The RegulatedPerson model constructor.
     * @property {module:model/RegulatedPerson}
     */
    RegulatedPerson: RegulatedPerson,
    /**
     * The Relation model constructor.
     * @property {module:model/Relation}
     */
    Relation: Relation,
    /**
     * The SpouseOrCommonLaw model constructor.
     * @property {module:model/SpouseOrCommonLaw}
     */
    SpouseOrCommonLaw: SpouseOrCommonLaw,
    /**
     * The StepType model constructor.
     * @property {module:model/StepType}
     */
    StepType: StepType,
    /**
     * The SurveyBase model constructor.
     * @property {module:model/SurveyBase}
     */
    SurveyBase: SurveyBase,
    /**
     * The SurveyDefinitionId model constructor.
     * @property {module:model/SurveyDefinitionId}
     */
    SurveyDefinitionId: SurveyDefinitionId,
    /**
     * The SurveyId model constructor.
     * @property {module:model/SurveyId}
     */
    SurveyId: SurveyId,
    /**
     * The SurveyQuestion model constructor.
     * @property {module:model/SurveyQuestion}
     */
    SurveyQuestion: SurveyQuestion,
    /**
     * The SurveyState model constructor.
     * @property {module:model/SurveyState}
     */
    SurveyState: SurveyState,
    /**
     * The SurveyUpdate model constructor.
     * @property {module:model/SurveyUpdate}
     */
    SurveyUpdate: SurveyUpdate,
    /**
     * The Tag model constructor.
     * @property {module:model/Tag}
     */
    Tag: Tag,
    /**
     * The Tags model constructor.
     * @property {module:model/Tags}
     */
    Tags: Tags,
    /**
     * The TargetPortfolio model constructor.
     * @property {module:model/TargetPortfolio}
     */
    TargetPortfolio: TargetPortfolio,
    /**
     * The TargetPortfolioId model constructor.
     * @property {module:model/TargetPortfolioId}
     */
    TargetPortfolioId: TargetPortfolioId,
    /**
     * The TaxDetail model constructor.
     * @property {module:model/TaxDetail}
     */
    TaxDetail: TaxDetail,
    /**
     * The TaxDetailId model constructor.
     * @property {module:model/TaxDetailId}
     */
    TaxDetailId: TaxDetailId,
    /**
     * The TaxIdentification model constructor.
     * @property {module:model/TaxIdentification}
     */
    TaxIdentification: TaxIdentification,
    /**
     * The TaxIdentificationNumbers model constructor.
     * @property {module:model/TaxIdentificationNumbers}
     */
    TaxIdentificationNumbers: TaxIdentificationNumbers,
    /**
     * The Transaction model constructor.
     * @property {module:model/Transaction}
     */
    Transaction: Transaction,
    /**
     * The TransactionId model constructor.
     * @property {module:model/TransactionId}
     */
    TransactionId: TransactionId,
    /**
     * The TransactionType model constructor.
     * @property {module:model/TransactionType}
     */
    TransactionType: TransactionType,
    /**
     * The TransitNumber model constructor.
     * @property {module:model/TransitNumber}
     */
    TransitNumber: TransitNumber,
    /**
     * The TrustId model constructor.
     * @property {module:model/TrustId}
     */
    TrustId: TrustId,
    /**
     * The TrustName model constructor.
     * @property {module:model/TrustName}
     */
    TrustName: TrustName,
    /**
     * The UpdatedAt model constructor.
     * @property {module:model/UpdatedAt}
     */
    UpdatedAt: UpdatedAt,
    /**
     * The UserBase model constructor.
     * @property {module:model/UserBase}
     */
    UserBase: UserBase,
    /**
     * The UserId model constructor.
     * @property {module:model/UserId}
     */
    UserId: UserId,
    /**
     * The VerificationBase model constructor.
     * @property {module:model/VerificationBase}
     */
    VerificationBase: VerificationBase,
    /**
     * The VerificationId model constructor.
     * @property {module:model/VerificationId}
     */
    VerificationId: VerificationId,
    /**
     * The VerificationMethod model constructor.
     * @property {module:model/VerificationMethod}
     */
    VerificationMethod: VerificationMethod,
    /**
     * The VerificationStatus model constructor.
     * @property {module:model/VerificationStatus}
     */
    VerificationStatus: VerificationStatus,
    /**
     * The WithdrawalReason model constructor.
     * @property {module:model/WithdrawalReason}
     */
    WithdrawalReason: WithdrawalReason,
    /**
     * The WithdrawalType model constructor.
     * @property {module:model/WithdrawalType}
     */
    WithdrawalType: WithdrawalType,
    /**
     * The Account model constructor.
     * @property {module:model/Account}
     */
    Account: Account,
    /**
     * The AccountCreatedResponse model constructor.
     * @property {module:model/AccountCreatedResponse}
     */
    AccountCreatedResponse: AccountCreatedResponse,
    /**
     * The AccountInput model constructor.
     * @property {module:model/AccountInput}
     */
    AccountInput: AccountInput,
    /**
     * The AccountTransferWithEvents model constructor.
     * @property {module:model/AccountTransferWithEvents}
     */
    AccountTransferWithEvents: AccountTransferWithEvents,
    /**
     * The AccountTransfersPaginated model constructor.
     * @property {module:model/AccountTransfersPaginated}
     */
    AccountTransfersPaginated: AccountTransfersPaginated,
    /**
     * The AccountValue model constructor.
     * @property {module:model/AccountValue}
     */
    AccountValue: AccountValue,
    /**
     * The AccountsPaginated model constructor.
     * @property {module:model/AccountsPaginated}
     */
    AccountsPaginated: AccountsPaginated,
    /**
     * The AdjustedBookValue model constructor.
     * @property {module:model/AdjustedBookValue}
     */
    AdjustedBookValue: AdjustedBookValue,
    /**
     * The AnswerOption model constructor.
     * @property {module:model/AnswerOption}
     */
    AnswerOption: AnswerOption,
    /**
     * The AssessmentPaginated model constructor.
     * @property {module:model/AssessmentPaginated}
     */
    AssessmentPaginated: AssessmentPaginated,
    /**
     * The AveragePrice model constructor.
     * @property {module:model/AveragePrice}
     */
    AveragePrice: AveragePrice,
    /**
     * The BankAccountInput model constructor.
     * @property {module:model/BankAccountInput}
     */
    BankAccountInput: BankAccountInput,
    /**
     * The BankAccountWithFundableAccounts model constructor.
     * @property {module:model/BankAccountWithFundableAccounts}
     */
    BankAccountWithFundableAccounts: BankAccountWithFundableAccounts,
    /**
     * The BankAccountsPaginated model constructor.
     * @property {module:model/BankAccountsPaginated}
     */
    BankAccountsPaginated: BankAccountsPaginated,
    /**
     * The BookValue model constructor.
     * @property {module:model/BookValue}
     */
    BookValue: BookValue,
    /**
     * The CompletedAt model constructor.
     * @property {module:model/CompletedAt}
     */
    CompletedAt: CompletedAt,
    /**
     * The ContributionValue model constructor.
     * @property {module:model/ContributionValue}
     */
    ContributionValue: ContributionValue,
    /**
     * The CorporationBase model constructor.
     * @property {module:model/CorporationBase}
     */
    CorporationBase: CorporationBase,
    /**
     * The CorporationsPaginated model constructor.
     * @property {module:model/CorporationsPaginated}
     */
    CorporationsPaginated: CorporationsPaginated,
    /**
     * The DailyValuesPaginated model constructor.
     * @property {module:model/DailyValuesPaginated}
     */
    DailyValuesPaginated: DailyValuesPaginated,
    /**
     * The DebitAccount model constructor.
     * @property {module:model/DebitAccount}
     */
    DebitAccount: DebitAccount,
    /**
     * The DebitBankAccountsPaginated model constructor.
     * @property {module:model/DebitBankAccountsPaginated}
     */
    DebitBankAccountsPaginated: DebitBankAccountsPaginated,
    /**
     * The Deposit model constructor.
     * @property {module:model/Deposit}
     */
    Deposit: Deposit,
    /**
     * The DepositRequest model constructor.
     * @property {module:model/DepositRequest}
     */
    DepositRequest: DepositRequest,
    /**
     * The Deposits model constructor.
     * @property {module:model/Deposits}
     */
    Deposits: Deposits,
    /**
     * The DepositsPaginated model constructor.
     * @property {module:model/DepositsPaginated}
     */
    DepositsPaginated: DepositsPaginated,
    /**
     * The DividendsEarned model constructor.
     * @property {module:model/DividendsEarned}
     */
    DividendsEarned: DividendsEarned,
    /**
     * The Document model constructor.
     * @property {module:model/Document}
     */
    Document: Document,
    /**
     * The DocumentInput model constructor.
     * @property {module:model/DocumentInput}
     */
    DocumentInput: DocumentInput,
    /**
     * The DocumentsPaginated model constructor.
     * @property {module:model/DocumentsPaginated}
     */
    DocumentsPaginated: DocumentsPaginated,
    /**
     * The EquityValue model constructor.
     * @property {module:model/EquityValue}
     */
    EquityValue: EquityValue,
    /**
     * The FeesPaid model constructor.
     * @property {module:model/FeesPaid}
     */
    FeesPaid: FeesPaid,
    /**
     * The GrossPosition model constructor.
     * @property {module:model/GrossPosition}
     */
    GrossPosition: GrossPosition,
    /**
     * The MarketPrice model constructor.
     * @property {module:model/MarketPrice}
     */
    MarketPrice: MarketPrice,
    /**
     * The MarketValue model constructor.
     * @property {module:model/MarketValue}
     */
    MarketValue: MarketValue,
    /**
     * The NetCash model constructor.
     * @property {module:model/NetCash}
     */
    NetCash: NetCash,
    /**
     * The NetEarnings model constructor.
     * @property {module:model/NetEarnings}
     */
    NetEarnings: NetEarnings,
    /**
     * The NetLiquidation model constructor.
     * @property {module:model/NetLiquidation}
     */
    NetLiquidation: NetLiquidation,
    /**
     * The NetLiquidationValue model constructor.
     * @property {module:model/NetLiquidationValue}
     */
    NetLiquidationValue: NetLiquidationValue,
    /**
     * The PeoplePaginated model constructor.
     * @property {module:model/PeoplePaginated}
     */
    PeoplePaginated: PeoplePaginated,
    /**
     * The PersonBase model constructor.
     * @property {module:model/PersonBase}
     */
    PersonBase: PersonBase,
    /**
     * The PositionMarketPrice model constructor.
     * @property {module:model/PositionMarketPrice}
     */
    PositionMarketPrice: PositionMarketPrice,
    /**
     * The PositionMarketValue model constructor.
     * @property {module:model/PositionMarketValue}
     */
    PositionMarketValue: PositionMarketValue,
    /**
     * The PositionsPaginated model constructor.
     * @property {module:model/PositionsPaginated}
     */
    PositionsPaginated: PositionsPaginated,
    /**
     * The Survey model constructor.
     * @property {module:model/Survey}
     */
    Survey: Survey,
    /**
     * The SurveyInput model constructor.
     * @property {module:model/SurveyInput}
     */
    SurveyInput: SurveyInput,
    /**
     * The SurveysPaginated model constructor.
     * @property {module:model/SurveysPaginated}
     */
    SurveysPaginated: SurveysPaginated,
    /**
     * The TargetPortfolioAllocation model constructor.
     * @property {module:model/TargetPortfolioAllocation}
     */
    TargetPortfolioAllocation: TargetPortfolioAllocation,
    /**
     * The TotalDeposits model constructor.
     * @property {module:model/TotalDeposits}
     */
    TotalDeposits: TotalDeposits,
    /**
     * The TotalDividends model constructor.
     * @property {module:model/TotalDividends}
     */
    TotalDividends: TotalDividends,
    /**
     * The TotalWithdrawals model constructor.
     * @property {module:model/TotalWithdrawals}
     */
    TotalWithdrawals: TotalWithdrawals,
    /**
     * The TransactionsPaginated model constructor.
     * @property {module:model/TransactionsPaginated}
     */
    TransactionsPaginated: TransactionsPaginated,
    /**
     * The TrustBase model constructor.
     * @property {module:model/TrustBase}
     */
    TrustBase: TrustBase,
    /**
     * The TrustsPaginated model constructor.
     * @property {module:model/TrustsPaginated}
     */
    TrustsPaginated: TrustsPaginated,
    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User: User,
    /**
     * The UserInput model constructor.
     * @property {module:model/UserInput}
     */
    UserInput: UserInput,
    /**
     * The UserPaginated model constructor.
     * @property {module:model/UserPaginated}
     */
    UserPaginated: UserPaginated,
    /**
     * The Verification model constructor.
     * @property {module:model/Verification}
     */
    Verification: Verification,
    /**
     * The VerificationInput model constructor.
     * @property {module:model/VerificationInput}
     */
    VerificationInput: VerificationInput,
    /**
     * The Withdrawal model constructor.
     * @property {module:model/Withdrawal}
     */
    Withdrawal: Withdrawal,
    /**
     * The WithdrawalRequest model constructor.
     * @property {module:model/WithdrawalRequest}
     */
    WithdrawalRequest: WithdrawalRequest,
    /**
     * The Withdrawals model constructor.
     * @property {module:model/Withdrawals}
     */
    Withdrawals: Withdrawals,
    /**
     * The WithdrawalsPaginated model constructor.
     * @property {module:model/WithdrawalsPaginated}
     */
    WithdrawalsPaginated: WithdrawalsPaginated,
    /**
     * The Corporation model constructor.
     * @property {module:model/Corporation}
     */
    Corporation: Corporation,
    /**
     * The CorporationInput model constructor.
     * @property {module:model/CorporationInput}
     */
    CorporationInput: CorporationInput,
    /**
     * The CorporationUpdate model constructor.
     * @property {module:model/CorporationUpdate}
     */
    CorporationUpdate: CorporationUpdate,
    /**
     * The DepositWithEvents model constructor.
     * @property {module:model/DepositWithEvents}
     */
    DepositWithEvents: DepositWithEvents,
    /**
     * The Person model constructor.
     * @property {module:model/Person}
     */
    Person: Person,
    /**
     * The PersonInput model constructor.
     * @property {module:model/PersonInput}
     */
    PersonInput: PersonInput,
    /**
     * The PersonUpdate model constructor.
     * @property {module:model/PersonUpdate}
     */
    PersonUpdate: PersonUpdate,
    /**
     * The Trust model constructor.
     * @property {module:model/Trust}
     */
    Trust: Trust,
    /**
     * The TrustInput model constructor.
     * @property {module:model/TrustInput}
     */
    TrustInput: TrustInput,
    /**
     * The TrustUpdate model constructor.
     * @property {module:model/TrustUpdate}
     */
    TrustUpdate: TrustUpdate,
    /**
     * The AccountsApi service constructor.
     * @property {module:api/AccountsApi}
     */
    AccountsApi: AccountsApi,
    /**
     * The AssessmentsApi service constructor.
     * @property {module:api/AssessmentsApi}
     */
    AssessmentsApi: AssessmentsApi,
    /**
     * The CorporationsApi service constructor.
     * @property {module:api/CorporationsApi}
     */
    CorporationsApi: CorporationsApi,
    /**
     * The DailyValuesApi service constructor.
     * @property {module:api/DailyValuesApi}
     */
    DailyValuesApi: DailyValuesApi,
    /**
     * The DocumentsApi service constructor.
     * @property {module:api/DocumentsApi}
     */
    DocumentsApi: DocumentsApi,
    /**
     * The FundingApi service constructor.
     * @property {module:api/FundingApi}
     */
    FundingApi: FundingApi,
    /**
     * The HealthcheckApi service constructor.
     * @property {module:api/HealthcheckApi}
     */
    HealthcheckApi: HealthcheckApi,
    /**
     * The InstitutionalTransfersApi service constructor.
     * @property {module:api/InstitutionalTransfersApi}
     */
    InstitutionalTransfersApi: InstitutionalTransfersApi,
    /**
     * The PeopleApi service constructor.
     * @property {module:api/PeopleApi}
     */
    PeopleApi: PeopleApi,
    /**
     * The PositionsApi service constructor.
     * @property {module:api/PositionsApi}
     */
    PositionsApi: PositionsApi,
    /**
     * The SurveysApi service constructor.
     * @property {module:api/SurveysApi}
     */
    SurveysApi: SurveysApi,
    /**
     * The TransactionsApi service constructor.
     * @property {module:api/TransactionsApi}
     */
    TransactionsApi: TransactionsApi,
    /**
     * The TrustsApi service constructor.
     * @property {module:api/TrustsApi}
     */
    TrustsApi: TrustsApi,
    /**
     * The UsersApi service constructor.
     * @property {module:api/UsersApi}
     */
    UsersApi: UsersApi
  };

  return exports;
}));
