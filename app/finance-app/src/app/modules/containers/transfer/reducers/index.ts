import { combineReducers, createFeatureSelector, createSelector } from '@ngrx/store';

import { Transfer } from '../model/transfer';

import * as fromConfiguration from './configuration.reducer';
import * as fromTransfers from './transfers.reducer';

export const transfersModuleFeatureKey = 'transfersModule';

export interface TransferState {
  [fromTransfers.transfersFeatureKey]: fromTransfers.State;
  [fromConfiguration.transfersConfigurationFeatureKey]: fromConfiguration.State;
}

export interface State {
  [transfersModuleFeatureKey]: TransferState;
}

export const reducers = combineReducers({
  [fromTransfers.transfersFeatureKey]: fromTransfers.reducer,
  [fromConfiguration.transfersConfigurationFeatureKey]: fromConfiguration.reducer,
});

export const selectTransferState = createFeatureSelector<State, TransferState>(transfersModuleFeatureKey);

export const selectTransfersEntitiesState = createSelector(selectTransferState, (state) => state.transfers);

export const selectConfigurationState = createSelector(selectTransferState, (state) => state.transfersConfiguration);

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
