import { Injectable } from '@angular/core';

import { catchError, map, switchMap } from 'rxjs/operators';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Update } from '@ngrx/entity';

import { of } from 'rxjs';

import { AccountsActions } from '../actions';
import { Account } from '../model/Account';
import { AccountsService } from '../services/accounts.service';

@Injectable()
export class AccountsEffects {
  readAccounts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountsActions.readAccounts),
      switchMap(() =>
        this.accountsService.readAccounts().pipe(
          map((accounts: Account[]) => AccountsActions.readAccountsSuccess({ accounts })),
          catchError((error) => of(AccountsActions.readAccountsFailure({ error })))
        )
      )
    )
  );

  createAccount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountsActions.createAccount),
      map((action) => action.account),
      switchMap((account: Account) =>
        this.accountsService.createAccount(account).pipe(
          map((account: Account) => AccountsActions.createAccountSuccess({ account })),
          catchError((error) => of(AccountsActions.createAccountFailure({ error })))
        )
      )
    )
  );

  deleteAccount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountsActions.deleteAccount),
      map((action) => action.id),
      switchMap((id: string) =>
        this.accountsService.deleteAccount(id).pipe(
          map((id: string) => AccountsActions.deleteAccountSuccess({ id })),
          catchError((error) => of(AccountsActions.deleteAccountFailure({ error })))
        )
      )
    )
  );

  updateAccount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountsActions.updateAccount),
      map((action) => action.updatingAccount),
      switchMap((updatingAccount: Update<Account>) =>
        this.accountsService.updateAccount(updatingAccount).pipe(
          map((updatingAccount: Update<Account>) => AccountsActions.updateAccountSuccess({ updatingAccount })),
          catchError((error) => of(AccountsActions.updateAccountFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private accountsService: AccountsService) {}
}
