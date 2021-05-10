import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { MaterialModule } from '@modules/external/material/material.module';

import { AnimationGraphComponent } from './components/animation-graph/animation-graph.component';
import { FooterComponent } from './containers/footer/footer.component';
import { HeaderComponent } from './containers/header/header.component';
import { LayoutEffect } from './effects/layout.effect';
import { LayoutService } from './service/layout.service';
import { MainComponent } from './containers/main/main.component';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';

import { AlertDialogComponent } from './components/alert-dialog/alert-dialog.component';
import { CsvReaderModule } from './../../shared/csv-reader/csv-reader.module';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';

import * as fromLayout from './reducers';
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
    BrowserAnimationsModule,
    RouterModule,
    CommonModule,
    MaterialModule,
    CsvReaderModule,
    EffectsModule.forFeature([LayoutEffect]),
    StoreModule.forFeature(fromLayout.layoutModuleFeatureKey, fromLayout.reducers),
  ],
  providers: [LayoutService],
})
export class LayoutModule {}
