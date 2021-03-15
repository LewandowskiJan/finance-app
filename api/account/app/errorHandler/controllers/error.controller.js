const { HttpErrorStatus } = require('../models/HttpErrorStatus');
const { MongoDbErrorStatus } = require('../models/MongoDbErrorStatus.enum');
const { MongooseErrorStatus } = require('../models/MongooseErrorStatus.enum');

//handle email or usename duplicates
const handleDuplicateKeyError = (err, res) => {
  const field = Object.keys(err.keyValue);
  const code = HttpErrorStatus.CONFLICT;
  const error = `An account with that ${field} already exists.`;
  res.status(code).send({ messages: error, fields: field });
};
//handle field formatting, empty fields, and mismatched passwords
const handleValidationError = (err, res) => {
  let errors = Object.values(err.errors).map((el) => el.message);
  let fields = Object.values(err.errors).map((el) => el.path);
  let code = HttpErrorStatus.BAD_REQUEST;
  if (errors.length > 1) {
    const formattedErrors = errors;
    res.status(code).send({ messages: formattedErrors, fields: fields });
  } else {
    res.status(code).send({ messages: errors, fields: fields });
  }
};
//error controller function
module.exports = (err, req, res, next) => {
  try {
    if (err.name === MongooseErrorStatus.VALIDATION_ERROR) return (err = handleValidationError(err, res));
    if (err.code && err.code == MongoDbErrorStatus.DUPLICATE_KEY_ERROR)
      return (err = handleDuplicateKeyError(err, res));
  } catch (err) {
    res.status(HttpErrorStatus.INTERNAL_ERROR).send('An unknown error occurred.');
  }
};
