import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { Update } from '@ngrx/entity';
import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import { compareAndPickDifference } from '@my-lib/util';

import { AccountsActions } from '../../actions';
import { Account } from '../../model/Account';
import * as fromAccounts from '../../reducers';

import * as fromRoot from '../../../../../../reducers';
import { AccountEditComponent } from './../account-edit/account-edit.component';

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

  openEditAccountDialog(account: Account): void {
    const dialogRef = this.dialog.open(AccountEditComponent, {
      data: account,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.updateAccount(account, result.form.value);
      }
    });
  }

  private updateAccount(account: Account, updates: Account): void {
    const differences: Partial<Account> = compareAndPickDifference<Partial<Account>>(account, updates);

    const updatingAccount: Update<Account> = {
      id: updates._id,
      changes: { ...differences },
    };
    this.store.dispatch(AccountsActions.updateAccount({ updatingAccount }));
  }
}
