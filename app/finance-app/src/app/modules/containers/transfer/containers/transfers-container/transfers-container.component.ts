import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { routeTransitionAnimations } from '../../../../shared/animations/route-transition-animations';

@Component({
  selector: 'app-transfer-container',
  templateUrl: './transfers-container.component.html',
  styleUrls: ['./transfers-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [routeTransitionAnimations],
})
export class TransfersContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animationState'];
  }
}
