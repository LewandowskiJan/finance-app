import { Component, Input, OnInit } from '@angular/core';

import { BannerType } from '../../model/banner-type.enum';
import { bannerIconConfiguration } from './../../configuration/banner-icon.configuration';

@Component({
  selector: 'app-base-banner',
  templateUrl: './base-banner.component.html',
  styleUrls: ['./base-banner.component.scss'],
})
export class BaseBannerComponent implements OnInit {
  @Input() bannerType: BannerType;

  public icon: string;

  constructor() {}

  ngOnInit(): void {
    this.icon = bannerIconConfiguration[this.bannerType];
  }
}
