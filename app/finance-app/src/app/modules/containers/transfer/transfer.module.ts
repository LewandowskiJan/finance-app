import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ReactiveComponentModule } from '@ngrx/component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';


import { BannerModule } from '@modules/shared/banner/banner.module';
import { ComboBoxModule } from '@modules/shared/combo-box/combo-box.module';
import { ImportanceTagModule } from '@modules/shared/importance-tag/importance-tag.module';
import { LabelModule } from '@modules/shared/label/label.module';
import { MaterialModule } from '@modules/shared/material/material.module';
import { SlidePanelModule } from '@modules/shared/slide-panel/slide-panel.module';

import { ConfigurationDetailsComponent } from './components/configuration-details/configuration-details.component';
import { ConfigurationFormComponent } from './components/configuration-form/configuration-form.component';
import { BalanceResultComponent } from './components/transfer-add/balance-result/balance-result.component';
import { TransferAddComponent } from './components/transfer-add/transfer-add.component';
import { TransferEditComponent } from './components/transfer-edit/transfer-edit.component';
import { TransferFooterComponent } from './components/transfer-footer/transfer-footer.component';
import { TransferLineAddComponent } from './components/transfer-line-add/transfer-line-add.component';
import { TransferLineDetailComponent } from './components/transfer-line-add/transfer-line-detail/transfer-line-detail.component';
import { TransferFormContainerComponent } from './containers/transfer-form-container/transfer-form-container.component';
import { TransfersContainerComponent } from './containers/transfers-container/transfers-container.component';
import { TransfersComponent } from './containers/transfers/transfers.component';
import { TransfersEffects } from './effects/transfers.effects';
import * as fromTransfer from './reducers';
import { TransferRoutingModule } from './transfer-routing.module';

@NgModule({
  declarations: [
    TransfersContainerComponent,
    TransferEditComponent,
    TransfersComponent,
    TransferFormContainerComponent,
    TransferAddComponent,
    TransferLineAddComponent,
    ConfigurationFormComponent,
    ConfigurationDetailsComponent,
    BalanceResultComponent,
    TransferFooterComponent,
    TransferLineDetailComponent,
  ],
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
    LabelModule
  ],
  bootstrap: [TransfersContainerComponent],
})
export class TransferModule {}
