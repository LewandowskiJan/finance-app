import { ChangeDetectionStrategy, Component } from '@angular/core';

import { take } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import * as fromRoot from '../../../../../../reducers';
import { LayoutActions } from '../../actions';
import * as fromLayout from '../../reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private isNavigationOpen$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State & fromLayout.State>) {
    this.isNavigationOpen$ = this.store.pipe(select(fromLayout.selectSideNavigationState));
  }

  public toggleMenu(): void {
    console.log('asd');
    this.isNavigationOpen$.pipe(take(1)).subscribe((isOpen) => {
      isOpen ? this.store.dispatch(LayoutActions.closeSideNavigation()) : this.store.dispatch(LayoutActions.openSideNavigation());
    });
  }
}
