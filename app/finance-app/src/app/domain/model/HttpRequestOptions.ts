import { HttpQueryParams } from './HttpQueryParams';
import { HttpRequestMethods } from './HttpRequestMethods';

export interface HttpRequestOption {
  pathParam?: string | number;
  queryParam?: string | HttpQueryParams;
  method?: HttpRequestMethods;
  body?: any;
}
