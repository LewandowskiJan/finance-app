import { createAction, props } from '@ngrx/store';

import { TransferConfiguration } from '../model/transfer-configuration';

export const createConfiguration = createAction(
  '[Transfer Configuration] Create configuration',
  props<{ configuration: TransferConfiguration }>()
);

export const getConfiguration = createAction('[Transfer Configuration] Get configuration');
