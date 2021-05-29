import { Component } from '@angular/core';

import { BannerType } from '../../model/banner-type.enum';

@Component({
  selector: 'app-network-error-banner',
  templateUrl: './network-error-banner.component.html',
  styleUrls: ['./network-error-banner.component.scss'],
})
export class NetworkErrorBannerComponent {
  public bannerType: typeof BannerType = BannerType;
}
