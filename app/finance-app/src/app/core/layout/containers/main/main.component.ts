import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  @ViewChild('drawer', { static: true }) public drawer!: MatDrawer;
  loading = false;
  toggled$: Observable<any>;

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
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
    });
  }

  ngOnInit(): void {}
}
