import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Transfer } from '../model/Transfer';

export const createTransfer = createAction('[Transfer] Create one', props<{ transfer: Transfer }>());
export const createTransferSuccess = createAction('[Transfer] Create success', props<{ transfer: Transfer }>());
export const createTransferFailure = createAction('[Transfer] Create failure', props<{ error: any }>());

export const deleteTransfer = createAction('[Transfer] Delete one', props<{ id: string }>());
export const deleteTransferSuccess = createAction('[Transfer] Delete success', props<{ id: string }>());
export const deleteTransferFailure = createAction('[Transfer] Delete failure', props<{ error: any }>());

export const createTransfers = createAction('[Transfers] Create many', props<{ transfers: Transfer[] }>());
export const readTransfers = createAction('[Transfers] Read');
export const updateTransfer = createAction('[Transfers] Update', props<{ updatingTransfer: Update<Transfer> }>());
export const deleteTransfers = createAction('[Transfers] Delete', props<{ transfers: Transfer[] }>());

export const createTransfersSuccess = createAction('[Transfers] Create success', props<{ transfers: Transfer[] }>());
export const readTransfersSuccess = createAction('[Transfers] Read success', props<{ transfers: Transfer[] }>());
export const updateTransferSuccess = createAction('[Transfers] Update success', props<{ updatingTransfer: Update<Transfer> }>());
export const deleteTransfersSuccess = createAction('[Transfers] Delete success', props<{ transfers: Transfer[] }>());

export const createTransfersFailure = createAction('[Transfers] Create failure', props<{ error: any }>());
export const readTransfersFailure = createAction('[Transfers] Read failure', props<{ error: any }>());
export const updateTransferFailure = createAction('[Transfers] Update failure', props<{ error: any }>());
export const deleteTransfersFailure = createAction('[Transfers] Delete failure', props<{ error: any }>());
