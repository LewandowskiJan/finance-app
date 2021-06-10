import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import * as fromLayout from '../../reducers';
import * as fromRoot from '../../../../../reducers';
import { LayoutActions } from '../../actions';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  private isNavigationOpen$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State & fromLayout.State>) {
    this.isNavigationOpen$ = this.store.pipe(select(fromLayout.selectSideNavigationState));
  }

  public toggleMenu(): void {
    this.isNavigationOpen$.pipe(take(1)).subscribe((isOpen) => {
      isOpen ? this.store.dispatch(LayoutActions.closeSideNavigation()) : this.store.dispatch(LayoutActions.openSideNavigation());
    });
  }
}
