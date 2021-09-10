import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '@modules/shared/material/material.module';

import { NetworkErrorBannerComponent } from './components/network-error-banner/network-error-banner.component';
import { NoDataInfoBannerComponent } from './components/no-data-info-banner/no-data-info-banner.component';
import { BaseBannerComponent } from './containers/base-banner/base-banner.component';

@NgModule({
  declarations: [BaseBannerComponent, NetworkErrorBannerComponent, NoDataInfoBannerComponent],
  imports: [CommonModule, MaterialModule],
  exports: [BaseBannerComponent, NetworkErrorBannerComponent, NoDataInfoBannerComponent],
})
export class BannerModule {}
