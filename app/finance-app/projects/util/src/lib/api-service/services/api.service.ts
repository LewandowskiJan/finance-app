import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { Observable, from } from 'rxjs';

import { HttpQueryParams } from '../model/HttpQueryParams';
import { HttpRequestMethods } from '../model/HttpRequestMethods';
import { HttpRequestOption } from '../model/HttpRequestOptions';

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

  public request<returnType, HttpErrorResponse>(url: string, options: HttpRequestOption): Observable<returnType | HttpErrorResponse> {
    const formattedQueryParam = this.correctFormatForQueryUrl(options.queryParam);
    options.queryParam = formattedQueryParam;

    switch (options.method) {
      case HttpRequestMethods.GET:
      case HttpRequestMethods.DELETE:
        return this.getRemove<returnType, HttpErrorResponse>(url, options, options.method).pipe();
      case HttpRequestMethods.POST:
      case HttpRequestMethods.PATCH:
        return this.postPatch<returnType, HttpErrorResponse>(url, options, options.method);
    }
  }

  public getRemove<returnType, HttpErrorResponse>(
    url: string,
    options: HttpRequestOption,
    method: 'get' | 'delete' = 'get'
  ): Observable<returnType | HttpErrorResponse> {
    return from(
      this.http[method](
        `${options.endpoint ? options.endpoint : this.endpoint}/${url}${options.pathParam ? '/' + options.pathParam : ''}${
          options.queryParam ? options.queryParam : ''
        }`
      )
    ) as Observable<returnType | HttpErrorResponse>;
  }

  public postPatch<returnType, HttpErrorResponse>(
    url: string,
    options: HttpRequestOption,
    method: 'post' | 'patch' = 'post'
  ): Observable<returnType | HttpErrorResponse> {
    return this.http[method](
      `${options.endpoint ? options.endpoint : this.endpoint}/${url}${options.pathParam ? '/' + options.pathParam : ''}${
        options.queryParam ? options.queryParam : ''
      }`,
      options.body
    ) as Observable<returnType | HttpErrorResponse>;
  }

  private correctFormatForQueryUrl(httpQueryParams: HttpQueryParams | string): string {
    if (this.isNull(httpQueryParams)) {
      return '';
    }
    const qpAsStr = this.mapQueryParamsToUrl(httpQueryParams);
    return qpAsStr.length === 0 ? '' : `?${qpAsStr.join('&')}`;
  }

  private mapQueryParamsToUrl(httpQueryParams: HttpQueryParams | string): Array<string> {
    return Object.keys(httpQueryParams).map((key: string) => {
      return `${key}=${httpQueryParams[key]}`;
    });
  }

  private isNull(value: any) {
    return value === null || value === undefined;
  }
}
