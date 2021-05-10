import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Update } from '@ngrx/entity';

import { ApiService } from '@src/app/modules/domain/services/api.service';
import { HttpRequestMethods } from '@src/app/modules/domain/model/HttpRequestMethods';

import { Account } from '../model/Account';

@Injectable()
export class AccountsService {
  constructor(private apiService: ApiService) {}

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
