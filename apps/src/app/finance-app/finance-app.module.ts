import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AccountModule } from './modules/containers/account/account.module';
import { CategoryModule } from './modules/containers/category/category.module';
import { TransferModule } from './modules/containers/transfer/transfer.module';
import { LayoutModule } from './modules/core/layout/layout.module';
import { ComboBoxModule } from './modules/shared/combo-box/combo-box.module';
import { MaterialModule } from './modules/shared/material/material.module';
import { SlidePanelModule } from './modules/shared/slide-panel/slide-panel.module';

import { FinanceAppRoutingModule } from './finance-app-routing.module';
import { FinanceAppComponent } from './finance-app.component';

@NgModule({
  declarations: [FinanceAppComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FinanceAppRoutingModule,
    LayoutModule,
    CategoryModule,
    AccountModule,
    TransferModule,
    SlidePanelModule,
    ComboBoxModule,
    MaterialModule,
  ],
  bootstrap: [FinanceAppComponent],
})
export class FinanceAppModule {}
