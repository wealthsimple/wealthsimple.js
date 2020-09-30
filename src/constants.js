module.exports = {
  API_VERSIONS: ['v1'],
  ENVIRONMENTS: ['development', 'sandbox', 'production'],
  OTP_HEADER: 'x-wealthsimple-otp',
  OTP_CLAIM_HEADER: 'x-wealthsimple-otp-claim',
  CREATE_TOKEN_MUTATION: 'mutation createToken($input: TokenCreateArgs!) { createToken(input: $input) { access_token application_family_id application_uid client_canonical_id email expires_in identity_canonical_id profiles { invest { default } trade { default } mercer { default } empower { default } koho { default } } refresh_token resource_owner_id scope token_type user_canonical_id }}',
};
