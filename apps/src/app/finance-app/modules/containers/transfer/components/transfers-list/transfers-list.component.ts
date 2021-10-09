import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import * as fromRoot from '../../../../../../reducers';
import { TransfersActions } from '../../actions';
import { Transfer } from '../../model/transfer';
import * as fromTransfers from '../../reducers';

@Component({
  selector: 'app-transfers-list',
  templateUrl: './transfers-list.component.html',
  styleUrls: ['./transfers-list.component.scss'],
})
export class TransfersListComponent implements OnInit {
  public transfers$: Observable<Transfer[]> = this.store.pipe(select(fromTransfers.selectAllTransfers));
  public displayedColumns: string[] = ['accountFrom', 'accountTo', 'date', 'value', 'exchangeRate', 'valueInPln'];
  constructor(private store: Store<fromRoot.State & fromTransfers.State>) {}

  ngOnInit(): void {
    this.store.dispatch(TransfersActions.reloadTransfers());
  }
}
