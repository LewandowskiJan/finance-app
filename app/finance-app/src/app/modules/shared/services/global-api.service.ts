import { Injectable } from '@angular/core';

import { catchError } from 'rxjs/operators';

import { Store } from '@ngrx/store';

import { Observable, throwError } from 'rxjs';

import { ApiService, HttpRequestOption } from '@my-lib/util';

import { environment } from '../../../../environments/environment';
import * as fromRoot from '../../../reducers';
import * as fromLayout from '../../core/layout/reducers';

import { Endpoint } from './../../../../../projects/util/src/lib/api-service/model/endpoint';

import { LayoutActions } from '@modules/core/layout/actions';
import { AlertStatus } from '@modules/core/layout/model/AlertStatus.enum';
import { DialogData } from '@modules/core/layout/model/DialogData';

@Injectable({
  providedIn: 'root',
})
export class GlobalApiService {
  constructor(private apiService: ApiService, private store: Store<fromRoot.State & fromLayout.State>) {
    this.apiService.setBaseUrl = environment.apiUrl;
  }

  public request2<returnType>(endpoint: Endpoint): Observable<returnType> {
    return this.apiService.request2<returnType>(endpoint).pipe(
      catchError((error) => {
        const dialogData: DialogData = {
          alertData: {
            header: 'Error',
            title: 'Something was wrong',
            message: error.error ? error.error.messages[0] : 'Network connection',
          },
          alertStatus: AlertStatus.ERROR,
        };

        this.store.dispatch(LayoutActions.openAlertDialog({ alert: dialogData }));
        return throwError(error);
      })
    );
  }

  public request<returnType, HttpErrorResponse>(url: string, options: HttpRequestOption): Observable<returnType | HttpErrorResponse> {
    return this.apiService.request<returnType>(url, options).pipe(
      catchError((error) => {
        const dialogData: DialogData = {
          alertData: {
            header: 'Error',
            title: 'Something was wrong',
            message: error.error ? error.error.messages[0] : 'Network connection',
          },
          alertStatus: AlertStatus.ERROR,
        };
        this.store.dispatch(LayoutActions.openAlertDialog({ alert: dialogData }));
        return throwError(error);
      })
    );
  }
}
