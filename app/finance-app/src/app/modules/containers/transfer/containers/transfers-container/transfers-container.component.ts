import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { routeTransitionAnimations } from '../../../../shared/animations/route-transition-animations';
import * as fromTransfers from '../../reducers';

import * as fromRoot from '@app/reducers';

@Component({
  selector: 'app-transfer-container',
  templateUrl: './transfers-container.component.html',
  styleUrls: ['./transfers-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [routeTransitionAnimations],
})
export class TransfersContainerComponent implements OnInit {
  public errors$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State & fromTransfers.State>) {}

  ngOnInit(): void {
    this.errors$ = this.store.select(fromTransfers.selectError);
  }

  public prepareRoute(outlet: RouterOutlet): any {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animationState'];
  }
}
