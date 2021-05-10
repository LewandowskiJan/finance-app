import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Update } from '@ngrx/entity';

import { ApiService } from '@src/app/modules/domain/services/api.service';
import { HttpRequestMethods } from '@src/app/modules/domain/model/HttpRequestMethods';

import { Transfer } from '../model/Transfer';

@Injectable()
export class TransfersService {
  constructor(private apiService: ApiService) {}

  readTransfers(): Observable<Transfer[] | HttpErrorResponse> {
    return this.apiService.request<Transfer[], HttpErrorResponse>('account/transfer/all', {
      method: HttpRequestMethods.GET,
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
