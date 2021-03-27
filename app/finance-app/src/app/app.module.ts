import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { localStorageSync } from 'ngrx-store-localstorage';

import { MaterialModule } from '@modules/external/material/material.module';
import { RxAngularModule } from '@modules/external/rx-angular/rx-angular.module';

import { AccountModule } from '@modules/containers/account/account.module';
import { CategoryModule } from '@modules/containers/category/category.module';
import { ComboBoxModule } from './modules/shared/combo-box/combo-box.module';
import { TestConnectionService } from '@modules/containers/test-page/services/test-connection.service';
import { TransferModule } from './modules/containers/transfer/transfer.module';

import { LayoutModule } from '@modules/core/layout/layout.module';

import { ApiService } from './modules/domain/services/api.service';
import { SlidePanelModule } from '@modules/shared/slide-panel/slide-panel.module';

import { environment } from '@environments/environment';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { localStorageKeys } from './configuration/localStorageKeys';

import { ROOT_REDUCERS } from './reducers';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: [...localStorageKeys],
    rehydrate: true,
  })(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RxAngularModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutModule,
    CategoryModule,
    AccountModule,
    TransferModule,
    SlidePanelModule,
    ComboBoxModule,

    /**
     * StoreModule.forRoot is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    StoreModule.forRoot(ROOT_REDUCERS, { metaReducers }),

    /**
     * @ngrx/router-store keeps router state up-to-date in the store.
     */
    StoreRouterConnectingModule.forRoot(),

    /**
     * Store devtools instrument the store retaining past versions of state
     * and recalculating new states. This enables powerful time-travel
     * debugging.
     *
     * To use the debugger, install the Redux Devtools extension for either
     * Chrome or Firefox
     *
     * See: https://github.com/zalmoxisus/redux-devtools-extension
     */
    StoreDevtoolsModule.instrument({
      name: 'NgRx demo setup App',
      // In a production build you would want to disable the Store Devtools
      logOnly: environment.production,
    }),

    /**
     * EffectsModule.forRoot() is imported once in the root module and
     * sets up the effects class to be initialized immediately when the
     * application starts.
     *
     * See: https://ngrx.io/guide/effects#registering-root-effects
     */
    EffectsModule.forRoot([]),
  ],
  providers: [TestConnectionService, ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
