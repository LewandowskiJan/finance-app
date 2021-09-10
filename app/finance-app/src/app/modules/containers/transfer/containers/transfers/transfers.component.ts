import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { take } from 'rxjs/operators';

import { Update } from '@ngrx/entity';
import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import { compareAndPickDifference } from '@my-lib/util';

import * as fromRoot from '../../../../../reducers';
import { TransfersActions } from '../../actions';
import { Transfer } from '../../model/transfer';
import * as fromTransfers from '../../reducers';

import { TransferEditComponent } from './../../components/transfer-edit/transfer-edit.component';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransfersComponent implements OnInit {
  public transfers$: Observable<Transfer[]>;
  public transferList$: Observable<Transfer[]>;

  constructor(public dialog: MatDialog, private store: Store<fromRoot.State & fromTransfers.State>) {
    this.transfers$ = this.store.pipe(select(fromTransfers.selectTransfersCollection));
  }

  ngOnInit(): void {
    this.showTransfer();
  }

  public showTransfer(): void {
    this.store.dispatch(TransfersActions.readTransfers());
  }

  public deleteTransfer(id: string): void {
    this.store.dispatch(TransfersActions.deleteTransfer({ id }));
  }

  openEditTransferDialog(transfer: Transfer): void {
    const dialogRef = this.dialog.open(TransferEditComponent, {
      data: transfer,
      disableClose: true,
    });

    dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe((result) => {
        if (result) {
          this.updateTransfer(transfer, result.form.value);
        }
      });
  }

  private updateTransfer(transfer: Transfer, updates: Transfer): void {
    const differences: Partial<Transfer> = compareAndPickDifference<Partial<Transfer>>(transfer, updates);

    const updatingTransfer: Update<Transfer> = {
      id: updates._id,
      changes: { ...differences },
    };
    this.store.dispatch(TransfersActions.updateTransfer({ updatingTransfer }));
  }
}
