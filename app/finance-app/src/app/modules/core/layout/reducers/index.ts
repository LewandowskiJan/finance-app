import { Action, combineReducers, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromLayout from './layout.reducer';
import * as fromRoot from '../../../../reducers';

export const layoutModuleFeatureKey = 'layoutModule';

export interface LayoutState {
  [fromLayout.layoutFeatureKey]: fromLayout.State;
}

export interface State extends fromRoot.State {
  [layoutModuleFeatureKey]: LayoutState;
}

export function reducers(state: LayoutState | undefined, action: Action) {
  return combineReducers({
    [fromLayout.layoutFeatureKey]: fromLayout.reducer,
  })(state, action);
}

export const selectLayoutState = createFeatureSelector<State, LayoutState>(layoutModuleFeatureKey);

export const selectSideNavigationState = createSelector(
  selectLayoutState,
  (state) => state,
  (state: LayoutState) => {
    return state[fromLayout.layoutFeatureKey].isSideNavigationOpen;
  }
);

export const selectAlert = createSelector(
  selectLayoutState,
  (state) => state,
  (state: LayoutState) => {
    return state[fromLayout.layoutFeatureKey].alert;
  }
);
