import { HttpQuerySearch } from './http-query-search';
import { HttpQuerySort } from './http-query-sort';

export interface HttpRequestBodyQueryOption {
  [key: string]: any;
  limit?: number;
  sort?: HttpQuerySort;
  search?: HttpQuerySearch;
}
