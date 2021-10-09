import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';

import { Account } from '../model/Account';

export const createAccount = createAction('[Account] Create one', props<{ account: Account }>());
export const createAccountSuccess = createAction('[Account] Create success', props<{ account: Account }>());
export const createAccountFailure = createAction('[Account] Create failure', props<{ error: any }>());

export const deleteAccount = createAction('[Account] Delete one', props<{ id: string }>());
export const deleteAccountSuccess = createAction('[Account] Delete success', props<{ id: string }>());
export const deleteAccountFailure = createAction('[Account] Delete failure', props<{ error: any }>());

export const createAccounts = createAction('[Accounts] Create many', props<{ accounts: Account[] }>());
export const readAccounts = createAction('[Accounts] Read');
export const updateAccount = createAction('[Accounts] Update', props<{ updatingAccount: Update<Account> }>());
export const deleteAccounts = createAction('[Accounts] Delete', props<{ accounts: Account[] }>());

export const createAccountsSuccess = createAction('[Accounts] Create success', props<{ accounts: Account[] }>());
export const readAccountsSuccess = createAction('[Accounts] Read success', props<{ accounts: Account[] }>());
export const updateAccountSuccess = createAction('[Accounts] Update success', props<{ updatingAccount: Update<Account> }>());
export const deleteAccountsSuccess = createAction('[Accounts] Delete success', props<{ accounts: Account[] }>());

export const createAccountsFailure = createAction('[Accounts] Create failure', props<{ error: any }>());
export const readAccountsFailure = createAction('[Accounts] Read failure', props<{ error: any }>());
export const updateAccountFailure = createAction('[Accounts] Update failure', props<{ error: any }>());
export const deleteAccountsFailure = createAction('[Accounts] Delete failure', props<{ error: any }>());
