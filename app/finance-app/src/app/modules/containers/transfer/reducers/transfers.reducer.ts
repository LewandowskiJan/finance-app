import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { TransfersActions } from '../actions';
import { Transfer } from '../model/transfer';

export const transfersFeatureKey = 'transfers';

/**
 * @ngrx/entity provides a predefined interface for handling
 * a structured dictionary of records. This interface
 * includes an array of ids, and a dictionary of the provided
 * model type by id. This interface is extended to include
 * any additional interface properties.
 */
export interface State extends EntityState<Transfer> {
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
export const adapter: EntityAdapter<Transfer> = createEntityAdapter<Transfer>({
  selectId: (transfer: Transfer) => transfer._id,
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

  on(TransfersActions.readTransfers, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    failure: false,
    error: null,
  })),

  on(TransfersActions.readTransfersSuccess, (state, { transfers }) =>
    adapter.setAll(transfers, {
      ...state,
      loading: false,
      loaded: true,
      failure: false,
      error: null,
    })
  ),

  on(TransfersActions.deleteTransfer, (state, { id }) => ({
    ...state,
    loading: true,
    loaded: false,
    failure: false,
    error: null,
  })),

  on(TransfersActions.deleteTransferSuccess, (state, { id }) =>
    adapter.removeOne(id, {
      ...state,
      loading: false,
      loaded: true,
      failure: false,
      error: null,
    })
  ),

  on(TransfersActions.deleteTransferFailure, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: true,
    failure: true,
    error,
  })),

  on(TransfersActions.updateTransferSuccess, (state, { updatingTransfer }) =>
    adapter.updateOne(updatingTransfer, {
      ...state,
      loading: false,
      loaded: true,
      failure: false,
      error: null,
    })
  ),

  on(TransfersActions.readTransfersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: true,
    failure: true,
    error: error,
  })),

  on(TransfersActions.createTransfer, (state, { transfer }) => ({
    ...state,
    loading: true,
    loaded: false,
    failure: false,
    error: null,
  })),

  on(TransfersActions.createTransferSuccess, (state, { transfer }) =>
    adapter.addOne(transfer, { ...state, loading: false, loaded: true, failure: false, error: null })
  )
);
