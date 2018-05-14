class ApiError extends Error {
  constructor(response) {
    super(response.toString());

    this.response = response;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError);
    }
  }
}

module.exports = ApiError;
