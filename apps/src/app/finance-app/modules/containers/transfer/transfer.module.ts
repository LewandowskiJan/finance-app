import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ReactiveComponentModule } from '@ngrx/component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { MaterialModule } from '../../../../core/material/material.module';
import { BannerModule } from '../../shared/banner/banner.module';
import { ComboBoxModule } from '../../shared/combo-box/combo-box.module';
import { ImportanceTagModule } from '../../shared/importance-tag/importance-tag.module';
import { LabelModule } from '../../shared/label/label.module';
import { SlidePanelModule } from '../../shared/slide-panel/slide-panel.module';

import { TransfersListComponent } from './components/transfers-list/transfers-list.component';
import { TransfersComponent } from './containers/transfers/transfers.component';
import { TransfersEffects } from './effects/transfers.effects';
import * as fromTransfer from './reducers';
import { TransferRoutingModule } from './transfer-routing.module';

@NgModule({
  declarations: [TransfersComponent, TransfersListComponent],
  imports: [
    TransferRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ComboBoxModule,
    StoreModule.forFeature(fromTransfer.transfersModuleFeatureKey, fromTransfer.reducers),
    EffectsModule.forFeature([TransfersEffects]),
    SlidePanelModule,
    BannerModule,
    ReactiveComponentModule,
    ImportanceTagModule,
    LabelModule,
  ],
  bootstrap: [TransfersComponent],
})
export class TransferModule {}
