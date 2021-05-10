import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Store } from '@ngrx/store';

import { AlertDialogComponent } from '../components/alert-dialog/alert-dialog.component';
import { DialogData } from '../model/DialogData';

import * as fromLayout from '../reducers';
import * as fromRoot from '../../../../reducers';
import { LayoutActions } from '../actions';
@Injectable()
export class LayoutService {
  private openedDialog: MatDialogRef<any>;

  openAlertDialog(alert: DialogData): Observable<any> {
    this.openedDialog = this.dialog.open(AlertDialogComponent, {
      width: '500px',
      data: {
        ...alert,
      },
    });

    this.openedDialog.afterClosed().subscribe((alert) => {
      this.store.dispatch(LayoutActions.closeAlertDialog());
    });
    return of({ alert });
  }

  constructor(public dialog: MatDialog, private store: Store<fromRoot.State & fromLayout.State>) {}
}
