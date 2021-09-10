import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import * as fromRoot from '../../../../../reducers';
import * as fromLayout from '../../reducers';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  @ViewChild('drawer', { static: true }) public drawer!: MatDrawer;
  public loading = false;
  public toggled$: Observable<any>;

  public alert$: any;

  constructor(private store: Store<fromRoot.State & fromLayout.State>, private router: Router) {
    this.alert$ = this.store.pipe(select(fromLayout.selectAlert));
    this.toggled$ = this.store.pipe(select(fromLayout.selectSideNavigationState));

    this.router.events.subscribe((event: Event) => {
      this.pageLoading(event);
    });
  }

  ngOnInit(): void {
    this.toggled$.subscribe((isSideNavigationOpen: boolean) => {
      isSideNavigationOpen ? this.drawer.open() : this.drawer.close();
    });
  }

  private pageLoading(event: Event): void {
    switch (true) {
      case event instanceof NavigationStart: {
        this.loading = true;
        break;
      }

      case event instanceof NavigationEnd:
      case event instanceof NavigationCancel:
      case event instanceof NavigationError: {
        this.loading = false;
        break;
      }
      default: {
        break;
      }
    }
  }
}
