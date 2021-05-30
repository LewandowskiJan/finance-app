import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { mapObjectToArray } from '@my-lib/util';

import { MaterialModule } from './../../../../shared/material/material.module';
import { SLIDE_PANEL_CONFIGURATION_TOKEN } from './../../../../shared/slide-panel/token/slide-panel-configuration-token';
import { SlidePanelConfiguration } from '../../../../shared/slide-panel/model/slide-panel-configuration';

import * as fromAccounts from '../../reducers';
import { AccountsComponent } from './accounts.component';

import {} from 'jasmine';
import { cold } from 'jasmine-marbles';

const slidePanelConfigurationMock: SlidePanelConfiguration = {
  name: { enable: true, label: 'Account name' },
  alias: { enable: true, label: 'Account alias' },
  isExternal: { enable: true, label: 'Is external' },
  utfIcon: { enable: false, label: 'Icon' },
  button: { label: 'Add account' },
};

describe('AccountsComponent', () => {
  let component: AccountsComponent;
  let store: MockStore;
  let fixture: ComponentFixture<AccountsComponent>;

  const initialState: fromAccounts.State = {
    accountsModule: {
      accountsList: {
        loaded: true,
        loading: false,
        failure: false,
        error: null,
        ids: ['1234', '2345'],
        entities: {
          1234: {
            _id: '1234',
            name: 'account_1',
            alias: 'alias_account_1',
            dateOfCreate: new Date(Date.now()),
            isActive: true,
            isExternal: false,
            balance: '1200.54',
            balanceHistory: null,
            currency: 'PLN',
          },
          2345: {
            _id: '2345',
            name: 'account_2',
            alias: 'alias_account_2',
            dateOfCreate: new Date(Date.now()),
            isActive: true,
            isExternal: true,
            balance: '139.14',
            balanceHistory: null,
            currency: 'PLN',
          },
        },
      },
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountsComponent],
      imports: [MaterialModule, ReactiveFormsModule, RouterTestingModule, NoopAnimationsModule],
      providers: [
        provideMockStore({ initialState }),
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        { provide: SLIDE_PANEL_CONFIGURATION_TOKEN, useValue: slidePanelConfigurationMock },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    store.dispatch({ type: '[Accounts] Read', payload: initialState });
    spyOn(store, 'dispatch');
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should get dispatch data', () => {
    const values = {
      a: mapObjectToArray(initialState.accountsModule.accountsList.entities),
    };

    expect(component.accounts$).toBeObservable(cold('(a)', values));
  });
});
