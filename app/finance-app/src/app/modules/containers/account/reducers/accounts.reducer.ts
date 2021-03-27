import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { Account } from '../model/Account';
import { AccountsActions } from '../actions';

export const accountsFeatureKey = 'accountsList';

/**
 * @ngrx/entity provides a predefined interface for handling
 * a structured dictionary of records. This interface
 * includes an array of ids, and a dictionary of the provided
 * model type by id. This interface is extended to include
 * any additional interface properties.
 */
export interface State extends EntityState<Account> {
  loaded: boolean;
  loading: boolean;
  failure: boolean;
  error: any;
}

/**
 * createEntityAdapter creates an object of many helper
 * functions for single or multiple operations
 * against the dictionary of records. The configuration
 * object takes a record id selector function and
 * a sortComparer option which is set to a compare
 * function if the records are to be sorted.
 */
export const adapter: EntityAdapter<Account> = createEntityAdapter<Account>({
  selectId: (account: Account) => account._id,
  sortComparer: false,
});

/**
 * getInitialState returns the default initial state
 * for the generated entity state. Initial state
 * additional properties can also be defined.
 */
export const initialState: State = adapter.getInitialState({
  loaded: false,
  loading: false,
  failure: false,
  error: null,
});

export const reducer = createReducer(
  initialState,

  on(AccountsActions.readAccounts, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    failure: false,
    error: null,
  })),

  on(AccountsActions.readAccountsSuccess, (state, { accounts }) =>
    adapter.setAll(accounts, {
      ...state,
      loading: false,
      loaded: true,
      failure: false,
      error: null,
    })
  ),

  on(AccountsActions.deleteAccount, (state, { id }) => ({
    ...state,
    loading: true,
    loaded: false,
    failure: false,
    error: null,
  })),

  on(AccountsActions.deleteAccountSuccess, (state, { id }) =>
    adapter.removeOne(id, {
      ...state,
      loading: false,
      loaded: true,
      failure: false,
      error: null,
    })
  ),

  on(AccountsActions.deleteAccountFailure, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: true,
    failure: true,
    error,
  })),

  on(AccountsActions.updateAccountSuccess, (state, { updatingAccount }) =>
    adapter.updateOne(updatingAccount, {
      ...state,
      loading: false,
      loaded: true,
      failure: false,
      error: null,
    })
  ),

  on(AccountsActions.readAccountsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: true,
    failure: true,
    error: error,
  })),

  on(AccountsActions.createAccount, (state, { account }) => ({
    ...state,
    loading: true,
    loaded: false,
    failure: false,
    error: null,
  })),

  on(AccountsActions.createAccountSuccess, (state, { account }) =>
    adapter.addOne(account, { ...state, loading: false, loaded: true, failure: false, error: null })
  )
);

export const getIds = (state: State) => state.ids;
