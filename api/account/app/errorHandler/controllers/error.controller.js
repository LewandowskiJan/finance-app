const {HttpErrorStatus} = require('../models/HttpErrorStatus');
const {MongoDbErrorStatus} = require('../models/MongoDbErrorStatus.enum');
const {MongooseErrorStatus} = require('../models/MongooseErrorStatus.enum');
const {OperationErrorStatus} = require('../models/OperationErrorStatus.enum');

const handleDuplicateKeyError = (err, res) => {
  const field = Object.keys(err.keyValue);
  const code = HttpErrorStatus.CONFLICT;
  const error = `An account with that ${field} already exists.`;
  res.status(code).send({messages: error, fields: field});
};

const handleValidationError = (err, res) => {
  const errors = Object.values(err.errors).map((el) => el.message);
  const fields = Object.values(err.errors).map((el) => el.path);
  const code = HttpErrorStatus.BAD_REQUEST;
  if (errors.length > 1) {
    const formattedErrors = errors;
    res.status(code).send({messages: formattedErrors, fields: fields});
  } else {
    res.status(code).send({messages: errors, fields: fields});
  }
};

const handleNoMoneyError = (err, res) => {
  const code = HttpErrorStatus.BAD_REQUEST;
  res.status(code).send({error: OperationErrorStatus.LACK_OF_FOUNDS_ERROR, messages: 'No enough money'});
};

// error controller function
module.exports = (err, req, res, next) => {
  try {
    if (err.name === MongooseErrorStatus.VALIDATION_ERROR) return (err = handleValidationError(err, res));
    if (err.code && err.code == MongoDbErrorStatus.DUPLICATE_KEY_ERROR) {
      return (err = handleDuplicateKeyError(err, res));
    }
    if (err.message === OperationErrorStatus.LACK_OF_FOUNDS_ERROR) return (err = handleNoMoneyError(err, res));
  } catch (err) {
    res
        .status(HttpErrorStatus.INTERNAL_ERROR)
        .send({error: OperationErrorStatus.OPERATION_FAILED, messages: 'An unknown error occurred.'});
  }
};
