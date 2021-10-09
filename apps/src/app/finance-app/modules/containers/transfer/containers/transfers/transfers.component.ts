import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import * as fromRoot from '../../../../../../reducers';
import * as fromTransfers from '../../reducers';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransfersComponent implements OnInit {
  public errors$: Observable<string> = this.store.pipe(select(fromTransfers.selectError));

  constructor(public dialog: MatDialog, private store: Store<fromRoot.State & fromTransfers.State>) {}

  ngOnInit(): void {}
}
