import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from './../material/material.module';
import { RxAngularModule } from './../rx-angular/rx-angular.module';

import { CheckResultComponent } from './components/check-result/check-result.component';
import { TestCardComponent } from './components/test-card/test-card.component';
import { TestCardsComponent } from './components/test-cards/test-cards.component';
import { TestConnectionService } from './services/test-connection.service';
import { TestPageComponent } from './containers/test-page/test-page.component';
import { TestPageRoutingModule } from './test-page-routing.module';

@NgModule({
  declarations: [TestPageComponent, TestCardsComponent, TestCardComponent, CheckResultComponent],
  exports: [TestPageRoutingModule],
  imports: [CommonModule, RxAngularModule, MaterialModule],
  providers: [TestConnectionService],
})
export class TestPageModule {}
