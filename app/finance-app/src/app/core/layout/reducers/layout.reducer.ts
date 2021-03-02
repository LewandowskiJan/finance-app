import { createReducer } from '@ngrx/store';

export const layoutFeatureKey = 'layout';

export interface State {
  [x: string]: any;
}

const initialState: State = {};

export const reducer = createReducer(initialState);
