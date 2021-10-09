import { Injectable } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { Store } from '@ngrx/store';

import { Observable, of } from 'rxjs';

import { DialogData } from '../models/DialogData';
import { LayoutActions } from '../store/actions';

import { AlertDialogComponent } from './../../../../../../src/app/modules/core/layout/components/alert-dialog/alert-dialog.component';

@Injectable({
  providedIn: 'root',
})
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
