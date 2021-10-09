import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

import { Update } from '@ngrx/entity';

import { Observable } from 'rxjs';

import { Endpoint, HttpRequestMethods } from '@my-lib/util';

import { SearchStrategy } from '../../../../modules/core/enums/SearchStrategy.enum';
import { GlobalApiService } from '../../../../modules/shared/services/global-api.service';
import { Transfer } from '../model/transfer';

@Injectable({ providedIn: 'any' })
export class TransfersService {
  constructor(private apiService: GlobalApiService) {}

  readTransfers(): Observable<Transfer[] | HttpErrorResponse> {
    return this.apiService.request2<Transfer[]>(this.transferAllGet());
  }

  // readTransfers(): Observable<Transfer[] | HttpErrorResponse> {
  //   return this.apiService.request2<Transfer[]>(this.transferAllGet(), {
  //     method: HttpRequestMethods.POST,
  //     body: {
  //       options: {
  //         limit: 25,
  //         sort: { date: -1 },
  //         search: { date: { $lt: new Date() } },
  //         searchStrategy: SearchStrategy.MATCH_ALL,
  //       },
  //     },
  //   });
  // }

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

  public transferAllGet(): Endpoint {
    return {
      url: 'account/transfer/all',
      method: HttpRequestMethods.GET,
      params: '',
      body: {
        options: {
          limit: 25,
          sort: { date: -1 },
          search: { date: { $lt: new Date() } },
          searchStrategy: SearchStrategy.MATCH_ALL,
        },
      },
    };
  }
}
