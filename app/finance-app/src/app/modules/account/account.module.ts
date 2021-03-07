import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { MaterialModule } from '@src/app/external-modules/material/material.module';

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
    StoreModule.forFeature(fromAccount.accountsModuleFeatureKey, fromAccount.reducers),
    EffectsModule.forFeature([AccountsEffects]),
  ],
  providers: [AccountsService],
})
export class AccountModule {}
