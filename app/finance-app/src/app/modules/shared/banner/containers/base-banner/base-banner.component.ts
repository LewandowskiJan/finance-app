import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { BannerType } from '../../model/banner-type.enum';

import { bannerIconConfiguration } from './../../configuration/banner-icon.configuration';

@Component({
  selector: 'app-base-banner',
  templateUrl: './base-banner.component.html',
  styleUrls: ['./base-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseBannerComponent implements OnInit {
  @Input() bannerType: BannerType;

  public icon: string;

  constructor() {}

  ngOnInit(): void {
    this.icon = bannerIconConfiguration[this.bannerType];
  }
}
