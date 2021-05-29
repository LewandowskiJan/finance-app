import { Component } from '@angular/core';

import { BannerType } from '../../model/banner-type.enum';

@Component({
  selector: 'app-no-data-info-banner',
  templateUrl: './no-data-info-banner.component.html',
  styleUrls: ['./no-data-info-banner.component.scss'],
})
export class NoDataInfoBannerComponent {
  public bannerType: typeof BannerType = BannerType;
}
