import { Response, Request } from 'express';

import { HttpErrorStatus } from '../models/http-error-status.enum';
import { MongoDbErrorStatus } from '../models/mongo-db-error-status.enum';
import { MongooseErrorStatus } from '../models/mongoose-error-status.enum';
import { OperationErrorStatus } from '../models/operation-error-status.enum';

const handleDuplicateKeyError = (err: any, response: Response) => {
  const field = Object.keys(err.keyValue);
  const code = HttpErrorStatus.CONFLICT;
  const error = `An account with that ${field} already exists.`;
  response.status(code).send({ messages: error, fields: field });
};

const handleValidationError = (err: any, response: Response) => {
  const errors = Object.values(err.errors).map((el: any) => el.message);
  const fields = Object.values(err.errors).map((el: any) => el.path);
  const code = HttpErrorStatus.BAD_REQUEST;
  if (errors.length > 1) {
    const formattedErrors = errors;
    response.status(code).send({ messages: formattedErrors, fields });
  } else {
    response.status(code).send({ messages: errors, fields });
  }
};

const handleNoMoneyError = (err: any, response: Response) => {
  const code = HttpErrorStatus.BAD_REQUEST;
  response.status(code).send({ error: OperationErrorStatus.LACK_OF_FOUNDS_ERROR, messages: 'No enough money' });
};

// error controller function
export function errorController(error: any, request: Request, response: Response, next: any): void {
  try {
    if (error.name === MongooseErrorStatus.VALIDATION_ERROR) return (error = handleValidationError(error, response));
    if (error.code && error.code == MongoDbErrorStatus.DUPLICATE_KEY_ERROR) {
      return (error = handleDuplicateKeyError(error, response));
    }
    if (error.message === OperationErrorStatus.LACK_OF_FOUNDS_ERROR)
      return (error = handleNoMoneyError(error, response));
  } catch (error) {
    response
      .status(HttpErrorStatus.INTERNAL_ERROR)
      .send({ error: OperationErrorStatus.OPERATION_FAILED, messages: 'An unknown error occurred.' });
  }
}
