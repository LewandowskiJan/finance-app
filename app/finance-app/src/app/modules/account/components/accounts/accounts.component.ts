import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import * as fromAccounts from '../../reducers';
import * as fromRoot from '../../../../reducers';

import { compareAndPickDifference } from '@src/app/utils/helpers';

import { Account } from '../../model/Account';
import { AccountEditComponent } from './../account-edit/account-edit.component';
import { AccountsActions } from '../../actions';
import { Update } from '@ngrx/entity';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountsComponent implements OnInit {
  public accountForm: FormGroup;
  public accounts$: Observable<Account[]>;

  constructor(
    public dialog: MatDialog,
    private store: Store<fromRoot.State & fromAccounts.State>,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.accounts$ = this.store.pipe(select(fromAccounts.selectAccountsCollection));

    this.buildForm();
  }

  get name() {
    return this.accountForm.get('name');
  }

  get isExternal() {
    return this.accountForm.get('name');
  }

  ngOnInit(): void {
    this.showAccount();
  }

  public showAccount(): void {
    this.store.dispatch(AccountsActions.readAccounts());
  }

  public createAccount(): void {
    this.accountForm.updateValueAndValidity();
    if (!this.accountForm.valid) {
      return;
    }

    this.store.dispatch(
      AccountsActions.createAccount({
        account: this.accountForm.getRawValue(),
      })
    );
  }

  public deleteAccount(id: string): void {
    this.store.dispatch(AccountsActions.deleteAccount({ id }));
  }

  private buildForm(): void {
    this.accountForm = this.formBuilder.group({
      name: ['', Validators.required],
      isExternal: [false, Validators.required],
    });
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
