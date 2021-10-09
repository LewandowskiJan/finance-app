import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';

import { Transfer } from '../model/transfer';

export const reloadTransfers = createAction('[Transfer] Read transfers');
export const reloadTransfersSuccess = createAction('[Transfer] Read success', props<{ transfers: Transfer[] }>());
export const reloadTransfersFailure = createAction('[Transfer] Read failure', props<{ error: any }>());

export const createTransfer = createAction('[Transfer] Create one', props<{ transfer: Transfer }>());
export const createTransferSuccess = createAction('[Transfer] Create success', props<{ transfer: Transfer }>());
export const createTransferFailure = createAction('[Transfer] Create failure', props<{ error: any }>());

export const deleteTransfer = createAction('[Transfer] Delete one', props<{ id: string }>());
export const deleteTransferSuccess = createAction('[Transfer] Delete success', props<{ id: string }>());
export const deleteTransferFailure = createAction('[Transfer] Delete failure', props<{ error: any }>());

export const updateTransfer = createAction('[Transfers] Update', props<{ updatingTransfer: Update<Transfer> }>());
export const updateTransferSuccess = createAction('[Transfers] Update success', props<{ updatingTransfer: Update<Transfer> }>());
export const updateTransferFailure = createAction('[Transfers] Update failure', props<{ error: any }>());
