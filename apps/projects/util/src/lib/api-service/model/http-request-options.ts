import { HttpBody } from './body/http-body';
import { HttpQueryParams } from './http-query-params';
import { HttpRequestMethods } from './http-request-methods';

export interface HttpRequestOption {
  endpoint?: string;
  pathParam?: string | number;
  queryParam?: string | HttpQueryParams;
  method?: HttpRequestMethods;
  body?: HttpBody;
}
