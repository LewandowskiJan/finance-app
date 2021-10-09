import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProjectBannerComponent } from './components/project-banner/project-banner.component';
import { LandingPageComponent } from './containers/landing-page/landing-page.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';

@NgModule({
  declarations: [LandingPageComponent, ProjectBannerComponent],
  exports: [LandingPageComponent],
  imports: [CommonModule, LandingPageRoutingModule],
})
export class LandingPageModule {}
