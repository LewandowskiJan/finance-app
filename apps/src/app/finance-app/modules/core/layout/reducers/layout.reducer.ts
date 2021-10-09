import { createReducer, on } from '@ngrx/store';

import { LayoutActions } from '../actions';
import { DialogData } from '../model/DialogData';

export const layoutFeatureKey = 'layout';

export interface State {
  [x: string]: any;
  isSideNavigationOpen: boolean;
  alert: DialogData;
}

const initialState: State = {
  isSideNavigationOpen: false,
  alert: null,
};

export const reducer = createReducer(
  initialState,
  on(LayoutActions.openSideNavigation, (state) => ({ ...state, isSideNavigationOpen: true })),
  on(LayoutActions.closeSideNavigation, (state) => ({ ...state, isSideNavigationOpen: false })),

  on(LayoutActions.openAlertDialog, (state, alert) => ({ ...state, ...alert })),
  on(LayoutActions.openAlertDialogSuccess, (state, alert) => ({ ...state, ...alert })),

  on(LayoutActions.closeAlertDialog, (state) => ({ ...state, alert: null }))
);

export const selectSidenavDisplay = (state: State): boolean => state.isSideNavigationOpen;
export const selectState = (state: State): State => state;
export const selectLightTheme = (state: State): boolean => state.showLightTheme;
