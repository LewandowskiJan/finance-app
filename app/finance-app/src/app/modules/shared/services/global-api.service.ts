import { Injectable } from '@angular/core';

import { catchError } from 'rxjs/operators';

import { Store } from '@ngrx/store';

import { Observable, throwError } from 'rxjs';

import { ApiService, HttpRequestOption } from '@my-lib/util';

import { environment } from '../../../../environments/environment';
import * as fromRoot from '../../../reducers';
import * as fromLayout from '../../core/layout/reducers';

import { LayoutActions } from '@modules/core/layout/actions';
import { AlertStatus } from '@modules/core/layout/model/AlertStatus.enum';
import { DialogData } from '@modules/core/layout/model/DialogData';

@Injectable({
  providedIn: 'root',
})
export class GlobalApiService {
  constructor(private apiService: ApiService, private store: Store<fromRoot.State & fromLayout.State>) {
    this.apiService.setBaseUrl = environment.accountApiUrl;
  }

  public request<returnType, HttpErrorResponse>(url: string, options: HttpRequestOption): Observable<returnType | HttpErrorResponse> {
    return this.apiService.request<returnType, HttpErrorResponse>(url, options).pipe(
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
