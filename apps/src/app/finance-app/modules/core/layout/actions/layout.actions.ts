import { createAction, props } from '@ngrx/store';

import { DialogData } from '../model/DialogData';

export const openSideNavigation = createAction('[Layout] Open Sidenav');
export const closeSideNavigation = createAction('[Layout] Close Sidenav');

export const openAlertDialog = createAction('[Layout] Open alert dialog', props<{ alert: DialogData }>());
export const openAlertDialogSuccess = createAction('[Layout] Open alert dialog success', props<{ alert: DialogData }>());
export const closeAlertDialog = createAction('[Layout] Close alert dialog');
