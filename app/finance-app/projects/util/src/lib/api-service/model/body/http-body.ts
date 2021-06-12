import { HttpRequestBodyQueryOption } from './http-request-body-query-options';

export interface HttpBody {
  [key: string]: any;
  options?: HttpRequestBodyQueryOption;
}
