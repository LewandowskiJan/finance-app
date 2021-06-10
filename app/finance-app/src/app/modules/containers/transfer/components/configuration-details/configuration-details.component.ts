import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';

import * as fromTransfers from '../../reducers';
import { TransferConfiguration } from './../../model/transfer-configuration';

@Component({
  selector: 'app-configuration-details',
  templateUrl: './configuration-details.component.html',
  styleUrls: ['./configuration-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigurationDetailsComponent implements OnInit {
  public configuration$: Observable<{ configuration: TransferConfiguration }>;

  constructor(private store: Store<fromTransfers.State>) {
    this.configuration$ = this.store.pipe(
      select(fromTransfers.selectConfigurationState),
      map((response: any) => response.configuration)
    );
  }

  ngOnInit(): void {}
}
