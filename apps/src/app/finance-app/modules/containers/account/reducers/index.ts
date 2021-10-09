import { Action, combineReducers, createFeatureSelector, createSelector } from '@ngrx/store';

import { Account } from '../model/Account';

import * as fromAccounts from './accounts.reducer';

export const accountsListFeatureKey = 'accountsModule';

export interface AccountState {
  [fromAccounts.accountsFeatureKey]: fromAccounts.State;
}

export interface State {
  [accountsListFeatureKey]: AccountState;
}

export function reducers(state: AccountState | undefined, action: Action): AccountState {
  return combineReducers({
    [fromAccounts.accountsFeatureKey]: fromAccounts.reducer,
  })(state, action);
}

export const selectAccountState = createFeatureSelector<State, AccountState>(accountsListFeatureKey);

export const selectAccountsEntitiesState = createSelector(selectAccountState, (state) => state.accountsList);

export const {
  selectIds: selectAccountIds,
  selectEntities: selectAccountEntities,
  selectAll: selectAllAccount,
  selectTotal: selectTotalAccounts,
} = fromAccounts.adapter.getSelectors(selectAccountsEntitiesState);

export const selectAccountsCollection = createSelector(selectAccountEntities, selectAccountIds, (entities, selectIds: any[]) => {
  return selectIds.map((id) => entities[id]).filter((account): account is Account => account !== null);
});

export const selectError = createSelector(
  selectAccountState,
  (state) => state,
  (state: AccountState) => {
    return state[fromAccounts.accountsFeatureKey].error;
  }
);
