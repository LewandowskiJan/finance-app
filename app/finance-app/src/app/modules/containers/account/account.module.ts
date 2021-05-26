import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ComboBoxModule } from './../../shared/combo-box/combo-box.module';
import { MaterialModule } from '@modules/shared/material/material.module';
import { SlidePanelModule } from '@modules/shared/slide-panel/slide-panel.module';

import { AccountContainerComponent } from './containers/account-container/account-container.component';
import { AccountRoutingModule } from './account-routing.module';
import { AccountsEffects } from './effects/accounts.effects';
import { AccountsService } from './services/accounts.service';

import * as fromAccount from './reducers';
import { AccountEditComponent } from './components/account-edit/account-edit.component';
import { AccountsComponent } from './components/accounts/accounts.component';

@NgModule({
  declarations: [AccountContainerComponent, AccountEditComponent, AccountsComponent],
  exports: [],
  imports: [
    RouterModule,
    AccountRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ComboBoxModule,
    StoreModule.forFeature(fromAccount.accountsListFeatureKey, fromAccount.reducers),
    EffectsModule.forFeature([AccountsEffects]),
    SlidePanelModule,
  ],
  providers: [AccountsService],
})
export class AccountModule {}
