import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, from } from 'rxjs';

import { Endpoint } from '../model/endpoint';
import { HttpRequestMethods } from '../model/http-request-methods';
import { HttpRequestOption } from '../model/http-request-options';
import { ApiUtilsService } from '../util/api-utils.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private endpoint: string;

  constructor(private readonly http: HttpClient) {
    this.endpoint = 'http://localhost:8081/api'; // this.baseUrlAccount;
  }

  public set setBaseUrl(url: string) {
    this.endpoint = url;
  }

  public request2<returnType>(endpoint: Endpoint): Observable<returnType> {
    return this.http[endpoint.method](this.endpoint + '/' + endpoint.url, endpoint.params) as Observable<returnType>;
  }

  public request<returnType>(url: string, options: HttpRequestOption): Observable<returnType> {
    const formattedQueryParam = ApiUtilsService.correctFormatForQueryUrl(options.queryParam);
    options.queryParam = formattedQueryParam;

    switch (options.method) {
      case HttpRequestMethods.GET:
      case HttpRequestMethods.DELETE:
        return this.getRemove<returnType>(url, options, options.method).pipe();
      case HttpRequestMethods.POST:
      case HttpRequestMethods.PATCH:
        return this.postPatch<returnType>(url, options, options.method);
    }
  }

  public getRemove<returnType>(url: string, options: HttpRequestOption, method: 'get' | 'delete' = 'get'): Observable<returnType> {
    return from(
      this.http[method](
        `${options.endpoint ? options.endpoint : this.endpoint}/${url}${options.pathParam ? '/' + options.pathParam : ''}${
          options.queryParam ? options.queryParam : ''
        }`
      )
    ) as Observable<returnType>;
  }

  public postPatch<returnType>(url: string, options: HttpRequestOption, method: 'post' | 'patch' = 'post'): Observable<returnType> {
    return this.http[method](
      `${options.endpoint ? options.endpoint : this.endpoint}/${url}${options.pathParam ? '/' + options.pathParam : ''}${
        options.queryParam ? options.queryParam : ''
      }`,
      options.body
    ) as Observable<returnType>;
  }
}
