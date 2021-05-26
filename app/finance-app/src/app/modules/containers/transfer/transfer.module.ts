import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ComboBoxModule } from '../../shared/combo-box/combo-box.module';
import { MaterialModule } from '../../shared/material/material.module';
import { SlidePanelModule } from './../../shared/slide-panel/slide-panel.module';

import { TransferRoutingModule } from './transfer-routing.module';
import { TransfersContainerComponent } from './containers/transfers-container/transfers-container.component';
import { TransfersEffects } from './effects/transfers.effects';

import * as fromTransfer from './reducers';
import { TransferAddComponent } from './components/transfer-add/transfer-add.component';
import { TransferEditComponent } from './components/transfer-edit/transfer-edit.component';
import { TransferFormContainerComponent } from './containers/transfer-form-container/transfer-form-container.component';
import { TransferLineAddComponent } from './components/transfer-line-add/transfer-line-add.component';
import { TransfersComponent } from './containers/transfers/transfers.component';

@NgModule({
  declarations: [
    TransfersContainerComponent,
    TransferEditComponent,
    TransfersComponent,
    TransferFormContainerComponent,
    TransferAddComponent,
    TransferLineAddComponent,
  ],
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
  bootstrap: [TransfersContainerComponent],
})
export class TransferModule {}
