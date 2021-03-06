import { createReducer, on } from '@ngrx/store';

import { DialogData } from '../model/DialogData';
import { LayoutActions } from '../actions';

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

export const selectSidenavDisplay = (state: State) => state.isSideNavigationOpen;
export const selectState = (state: State) => state;
export const selectLightTheme = (state: State) => state.showLightTheme;
