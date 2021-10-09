import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { BannerModule } from '../../shared/banner/banner.module';
import { CsvReaderModule } from '../../shared/csv-reader/csv-reader.module';
import { MaterialModule } from '../../shared/material/material.module';

import { AlertDialogComponent } from './components/alert-dialog/alert-dialog.component';
import { AnimationGraphComponent } from './components/animation-graph/animation-graph.component';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { FooterComponent } from './containers/footer/footer.component';
import { HeaderComponent } from './containers/header/header.component';
import { MainComponent } from './containers/main/main.component';
import { LayoutEffect } from './effects/layout.effect';
import * as fromLayout from './reducers';
import { LayoutService } from './service/layout.service';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    MainComponent,
    WelcomePageComponent,
    AnimationGraphComponent,
    SideNavigationComponent,
    AlertDialogComponent,
  ],
  exports: [FooterComponent, HeaderComponent, MainComponent],
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule,
    CsvReaderModule,
    EffectsModule.forFeature([LayoutEffect]),
    StoreModule.forFeature(fromLayout.layoutModuleFeatureKey, fromLayout.reducers),
    BannerModule,
  ],
  providers: [LayoutService],
})
export class LayoutModule {}
