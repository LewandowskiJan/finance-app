import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../../../../core/material/material.module';

import { CheckResultComponent } from './components/check-result/check-result.component';
import { TestCardComponent } from './components/test-card/test-card.component';
import { TestCardsComponent } from './components/test-cards/test-cards.component';
import { TestPageComponent } from './containers/test-page/test-page.component';
import { TestConnectionService } from './services/test-connection.service';
import { TestPageRoutingModule } from './test-page-routing.module';

@NgModule({
  declarations: [TestPageComponent, TestCardsComponent, TestCardComponent, CheckResultComponent],
  exports: [TestPageRoutingModule],
  imports: [CommonModule, MaterialModule],
  providers: [TestConnectionService],
})
export class TestPageModule {}
