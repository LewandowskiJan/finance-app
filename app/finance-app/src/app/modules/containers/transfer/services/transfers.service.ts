import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Update } from '@ngrx/entity';

import { HttpRequestMethods } from '@my-lib/util';

import { GlobalApiService } from '@src/app/modules/shared/services/global-api.service';

import { Transfer } from '../model/Transfer';

@Injectable({ providedIn: 'any' })
export class TransfersService {
  constructor(private apiService: GlobalApiService) {}

  readTransfers(): Observable<Transfer[] | HttpErrorResponse> {
    return this.apiService.request<Transfer[], HttpErrorResponse>('account/transfer/all', {
      method: HttpRequestMethods.POST,
      body: { options: { limit: 25 } },
    });
  }

  createTransfer(transfer: Transfer): Observable<Transfer | HttpErrorResponse> {
    return this.apiService.request<Transfer, HttpErrorResponse>('account/transfer/add', {
      method: HttpRequestMethods.POST,
      body: transfer,
    });
  }

  deleteTransfer(id: string): Observable<string | HttpErrorResponse> {
    return this.apiService
      .request<string, HttpErrorResponse>('account/transfer', {
        method: HttpRequestMethods.DELETE,
        pathParam: id,
      })
      .pipe(map((res) => id));
  }

  updateTransfer(updatingTransfer: Update<Transfer>): Observable<Update<Transfer> | HttpErrorResponse> {
    return this.apiService
      .request<Transfer, HttpErrorResponse>('account/transfer', {
        method: HttpRequestMethods.POST,
        pathParam: updatingTransfer.id,
        body: updatingTransfer.changes,
      })
      .pipe(
        map((transfer: Transfer) => {
          return {
            id: transfer._id,
            changes: { ...transfer },
          };
        })
      );
  }
}
