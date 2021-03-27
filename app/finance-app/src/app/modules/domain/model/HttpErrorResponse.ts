import { HttpStatus } from './HttpStatus';
export interface HttpErrorResponse {
  errors: {
    status: HttpStatus;
    validators: {
      fields: [
        {
          [key: string]: {
            name: string;
            message: string;
            properties: {
              message: string;
              type: string;
              path: string;
            };
            kind: string;
            path: string;
          };
        }
      ];
    };
    globals: {
      _message: string;
      name: string;
      message: string;
    };
  };
}
