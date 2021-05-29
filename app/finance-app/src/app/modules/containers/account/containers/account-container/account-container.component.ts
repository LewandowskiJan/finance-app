import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';

import * as fromAccounts from '../../reducers';
import * as fromRoot from '@app/reducers';

@Component({
  selector: 'app-account-container',
  templateUrl: './account-container.component.html',
  styleUrls: ['./account-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountContainerComponent implements OnInit {
  public errors$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State & fromAccounts.State>) {}

  ngOnInit(): void {
    this.errors$ = this.store.pipe(select(fromAccounts.selectError));
  }
}
