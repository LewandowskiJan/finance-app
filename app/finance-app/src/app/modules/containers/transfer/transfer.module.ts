import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ComboBoxModule } from '../../shared/combo-box/combo-box.module';
import { MaterialModule } from './../../external/material/material.module';
import { SlidePanelModule } from './../../shared/slide-panel/slide-panel.module';

import { TransferRoutingModule } from './transfer-routing.module';
import { TransfersContainerComponent } from './containers/transfers-container/transfers-container.component';
import { TransfersEffects } from './effects/transfers.effects';
import { TransfersService } from './services/transfers.service';

import * as fromTransfer from './reducers';
import { TransferEditComponent } from './components/transfer-edit/transfer-edit.component';
import { TransfersComponent } from './components/transfers/transfers.component';

@NgModule({
  declarations: [TransfersContainerComponent, TransferEditComponent, TransfersComponent],
  exports: [],
  imports: [
    RouterModule,
    TransferRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ComboBoxModule,
    StoreModule.forFeature(fromTransfer.transfersModuleFeatureKey, fromTransfer.reducers),
    EffectsModule.forFeature([TransfersEffects]),
    SlidePanelModule,
  ],
  providers: [TransfersService],
})
export class TransferModule {}