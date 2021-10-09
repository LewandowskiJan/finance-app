import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { switchMap, catchError } from 'rxjs/operators';

import { EMPTY, interval, Observable } from 'rxjs';

import { BannerType } from '@app/finance-app/modules/shared/banner/model/banner-type.enum';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomePageComponent implements OnInit {
  public bannerType: typeof BannerType = BannerType;
  public data$: Observable<any>;
  public interval$: Observable<any>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // this.interval$ = interval(10000);
    // this.data$ = this.interval$.pipe(switchMap(() => this.http.get('http://192.168.0.25:5000/')));
  }
}
