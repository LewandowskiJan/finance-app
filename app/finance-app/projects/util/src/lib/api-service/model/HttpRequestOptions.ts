import { HttpQueryParams } from './HttpQueryParams';
import { HttpRequestMethods } from './HttpRequestMethods';

export interface HttpRequestOption {
  endpoint?: string;
  pathParam?: string | number;
  queryParam?: string | HttpQueryParams;
  method?: HttpRequestMethods;
  body?: any;
}
