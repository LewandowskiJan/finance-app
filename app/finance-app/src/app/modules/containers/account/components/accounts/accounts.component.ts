import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';

import { Store, select } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Observable } from 'rxjs';

import * as fromAccounts from '../../reducers';
import * as fromRoot from './../../../../../reducers';

import { compareAndPickDifference } from '@my-lib/util';

import { Account } from '../../model/Account';
import { AccountEditComponent } from './../account-edit/account-edit.component';
import { AccountsActions } from '../../actions';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountsComponent implements OnInit {
  public accounts$: Observable<Account[]>;

  constructor(public dialog: MatDialog, private store: Store<fromRoot.State & fromAccounts.State>, private router: Router) {
    this.accounts$ = this.store.pipe(select(fromAccounts.selectAccountsCollection));
  }

  ngOnInit(): void {
    this.showAccount();
  }

  public showAccount(): void {
    this.store.dispatch(AccountsActions.readAccounts());
  }

  public createAccount(formValue: Account): void {
    this.store.dispatch(
      AccountsActions.createAccount({
        account: formValue,
      })
    );
  }

  public deleteAccount(id: string): void {
    this.store.dispatch(AccountsActions.deleteAccount({ id }));
  }

  openEditAccountDialog(account: Account) {
    const dialogRef = this.dialog.open(AccountEditComponent, {
      data: account,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.updateAccount(account, result.form.value);
      }
    });
  }

  private updateAccount(account: Account, updates: Account) {
    const differences: Partial<Account> = compareAndPickDifference<Partial<Account>>(account, updates);

    const updatingAccount: Update<Account> = {
      id: updates._id,
      changes: { ...differences },
    };
    this.store.dispatch(AccountsActions.updateAccount({ updatingAccount }));
  }
}
