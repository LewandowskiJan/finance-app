import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { HttpRequestMethods } from '@modules/domain/model/HttpRequestMethods';

import { Observable } from 'rxjs';

import { ApiService } from './../../../domain/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class ComboBoxService {
  constructor(private apiService: ApiService) {}

  public search(value: any, apiUrl: string): Observable<any[] | HttpErrorResponse> {
    return this.apiService.request<any[], HttpErrorResponse>(apiUrl, {
      queryParam: value,
      method: HttpRequestMethods.GET,
    });
  }

  public create(value: any, apiUrl: string): Observable<any[] | HttpErrorResponse> {
    return this.apiService.request<any[], HttpErrorResponse>(apiUrl, {
      body: value,
      method: HttpRequestMethods.POST,
    });
  }
}
