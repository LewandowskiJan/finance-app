import { HttpRequestMethods } from './http-request-methods';

export interface Endpoint {
  url: string;
  method: HttpRequestMethods;
  body?: any;
  params?: any;
}
