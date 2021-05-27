import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpRequestMethods } from '@my-lib/util';

import { GlobalApiService } from '../../services/global-api.service';

@Injectable({
  providedIn: 'root',
})
export class ComboBoxService {
  constructor(private apiService: GlobalApiService) {}

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
