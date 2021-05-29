import { Component, OnInit } from '@angular/core';

import { BannerType } from '@modules/shared/banner/model/banner-type.enum';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
})
export class WelcomePageComponent implements OnInit {
  public bannerType: typeof BannerType = BannerType;

  constructor() {}

  ngOnInit(): void {}
}
