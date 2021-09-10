import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

import { Update } from '@ngrx/entity';

import { Observable } from 'rxjs';

import { HttpRequestMethods } from '@my-lib/util';

import { Account } from '../model/Account';

import { GlobalApiService } from '@src/app/modules/shared/services/global-api.service';


@Injectable({
  providedIn: 'any',
})
export class AccountsService {
  constructor(private apiService: GlobalApiService) {}

  readAccounts(): Observable<Account[] | HttpErrorResponse> {
    return this.apiService.request<Account[], HttpErrorResponse>('account/account/all', {
      method: HttpRequestMethods.POST,
      body: { options: { limit: 10 } },
    });
  }

  createAccount(category: Account): Observable<Account | HttpErrorResponse> {
    return this.apiService.request<Account, HttpErrorResponse>('account/account/add', {
      method: HttpRequestMethods.POST,
      body: category,
    });
  }

  deleteAccount(id: string): Observable<string | HttpErrorResponse> {
    return this.apiService
      .request<string, HttpErrorResponse>('account/account', {
        method: HttpRequestMethods.DELETE,
        pathParam: id,
      })
      .pipe(map((res) => id));
  }

  updateAccount(updatingAccount: Update<Account>): Observable<Update<Account> | HttpErrorResponse> {
    return this.apiService
      .request<Account, HttpErrorResponse>('account/account', {
        method: HttpRequestMethods.POST,
        pathParam: updatingAccount.id,
        body: updatingAccount.changes,
      })
      .pipe(
        map((account: Account) => {
          return {
            id: account._id,
            changes: { ...account },
          };
        })
      );
  }
}
