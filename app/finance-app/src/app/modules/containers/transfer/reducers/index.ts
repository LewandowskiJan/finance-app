import { Action, combineReducers, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromTransfers from './transfers.reducer';

import { Transfer } from '../model/Transfer';

export const transfersModuleFeatureKey = 'transfersModule';

export interface TransferState {
  [fromTransfers.transfersFeatureKey]: fromTransfers.State;
}

export interface State {
  [transfersModuleFeatureKey]: TransferState;
}

export function reducers(state: TransferState | undefined, action: Action) {
  return combineReducers({
    [fromTransfers.transfersFeatureKey]: fromTransfers.reducer,
  })(state, action);
}

export const selectTransferState = createFeatureSelector<State, TransferState>(transfersModuleFeatureKey);

export const selectTransfersEntitiesState = createSelector(selectTransferState, (state) => state.transfers);

export const {
  selectIds: selectTransfersIds,
  selectEntities: selectTransfersEntities,
  selectAll: selectAllTransfers,
  selectTotal: selectTotalTransfers,
} = fromTransfers.adapter.getSelectors(selectTransfersEntitiesState);

export const selectTransfersCollection = createSelector(selectTransfersEntities, selectTransfersIds, (entities, ids: string[]) => {
  return ids.map((id) => entities[id]).filter((transfer): transfer is Transfer => transfer !== null);
});

export const selectError = createSelector(
  selectTransferState,
  (state) => state,
  (state: TransferState) => {
    return state[fromTransfers.transfersFeatureKey].error;
  }
);
