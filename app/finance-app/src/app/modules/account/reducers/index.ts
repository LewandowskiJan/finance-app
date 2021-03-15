import { Action, combineReducers, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromAccounts from './accounts.reducer';
import * as fromRoot from './../../../reducers';

import { Account } from '../model/Account';

export const accountsModuleFeatureKey = 'accountsModule';

export interface AccountState {
  [fromAccounts.accountsFeatureKey]: fromAccounts.State;
}

export interface State extends fromRoot.State {
  [accountsModuleFeatureKey]: AccountState;
}

export function reducers(state: AccountState | undefined, action: Action) {
  return combineReducers({
    [fromAccounts.accountsFeatureKey]: fromAccounts.reducer,
  })(state, action);
}

export const selectAccountState = createFeatureSelector<State, AccountState>(accountsModuleFeatureKey);

export const selectAccountsEntitiesState = createSelector(selectAccountState, (state) => state.accountsList);

export const {
  selectIds: selectAccountsIds,
  selectEntities: selectAccountsEntities,
  selectAll: selectAllAccounts,
  selectTotal: selectTotalAccounts,
} = fromAccounts.adapter.getSelectors(selectAccountsEntitiesState);

export const selectAccountsCollection = createSelector(selectAccountsEntities, selectAccountsIds, (entities, ids: string[]) => {
  return ids.map((id) => entities[id]).filter((account): account is Account => account !== null);
});

export const selectError = createSelector(
  selectAccountState,
  (state) => state,
  (state: AccountState) => {
    return state[fromAccounts.accountsFeatureKey].error;
  }
);
