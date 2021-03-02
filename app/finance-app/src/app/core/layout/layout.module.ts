import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EffectsModule } from '@ngrx/effects';

import { MaterialModule } from '@external-modules/material/material.module';

import { AnimationGraphComponent } from './components/animation-graph/animation-graph.component';
import { FooterComponent } from './containers/footer/footer.component';
import { HeaderComponent } from './containers/header/header.component';
import { LayoutEffect } from './effects/layout.effect';
import { MainComponent } from './containers/main/main.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, MainComponent, WelcomePageComponent, AnimationGraphComponent],
  exports: [FooterComponent, HeaderComponent, MainComponent],
  imports: [RouterModule, CommonModule, MaterialModule, EffectsModule.forFeature([LayoutEffect])],
})
export class LayoutModule {}
