import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EffectsModule } from '@ngrx/effects';

import { MaterialModule } from '@external-modules/material/material.module';

import { AnimationGraphComponent } from './components/animation-graph/animation-graph.component';
import { FooterComponent } from './containers/footer/footer.component';
import { HeaderComponent } from './containers/header/header.component';
import { LayoutEffect } from './effects/layout.effect';
import { LayoutService } from './service/layout.service';
import { MainComponent } from './containers/main/main.component';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, MainComponent, WelcomePageComponent, AnimationGraphComponent, SideNavigationComponent],
  exports: [FooterComponent, HeaderComponent, MainComponent],
  imports: [BrowserAnimationsModule, RouterModule, CommonModule, MaterialModule, EffectsModule.forFeature([LayoutEffect])],
  providers: [LayoutService],
})
export class LayoutModule {}
