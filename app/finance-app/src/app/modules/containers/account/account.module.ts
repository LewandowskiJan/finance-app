import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EffectsModule } from '@ngrx/effects';
import { ReactiveComponentModule } from '@ngrx/component';
import { StoreModule } from '@ngrx/store';

import { BannerModule } from './../../shared/banner/banner.module';
import { ComboBoxModule } from './../../shared/combo-box/combo-box.module';
import { MaterialModule } from '@modules/shared/material/material.module';
import { SlidePanelModule } from '@modules/shared/slide-panel/slide-panel.module';

import { AccountContainerComponent } from './containers/account-container/account-container.component';
import { AccountRoutingModule } from './account-routing.module';
import { AccountsEffects } from './effects/accounts.effects';

import * as fromAccount from './reducers';
import { AccountEditComponent } from './components/account-edit/account-edit.component';
import { AccountSlidePanelConfiguration } from './configuration/account-slide-panel-configuration';
import { AccountsComponent } from './components/accounts/accounts.component';
import { SLIDE_PANEL_CONFIGURATION_TOKEN } from '@modules/shared/slide-panel/token/slide-panel-configuration-token';

@NgModule({
  declarations: [AccountContainerComponent, AccountEditComponent, AccountsComponent],
  exports: [],
  imports: [
    AccountRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ComboBoxModule,
    StoreModule.forFeature(fromAccount.accountsListFeatureKey, fromAccount.reducers),
    EffectsModule.forFeature([AccountsEffects]),
    SlidePanelModule,
    ReactiveComponentModule,
    BannerModule,
  ],
  providers: [{ provide: SLIDE_PANEL_CONFIGURATION_TOKEN, useValue: AccountSlidePanelConfiguration }],
})
export class AccountModule {}
