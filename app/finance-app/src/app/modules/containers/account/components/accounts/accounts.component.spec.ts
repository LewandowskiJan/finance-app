import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { MaterialModule } from '@modules/external/material/material.module';

import { AccountsComponent } from './accounts.component';
import { State } from './../../reducers';

import 'jest';

describe('AccountsComponent', () => {
  let component: AccountsComponent;
  let store: MockStore;
  let fixture: ComponentFixture<AccountsComponent>;

  const initialState: State = {
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
      providers: [provideMockStore({ initialState }), { provide: MAT_DIALOG_DATA, useValue: {} }, { provide: MatDialogRef, useValue: {} }],
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
});
