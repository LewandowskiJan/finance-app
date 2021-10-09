import { NgModule } from '@angular/core';

import { AppContentComponent } from './components/app-content/app-content.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppSideMenuComponent } from './components/app-side-menu/app-side-menu.component';
import { LayoutComponent } from './containers/layout/layout.component';

@NgModule({
  declarations: [LayoutComponent, AppHeaderComponent, AppFooterComponent, AppContentComponent, AppSideMenuComponent],
  imports: [],
  exports: [LayoutComponent],
})
export class LayoutModule {}
