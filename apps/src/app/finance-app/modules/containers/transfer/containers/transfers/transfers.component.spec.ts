import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';

import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { Currency } from '../../../../shared/models/currency.enum';
import { State } from '../../reducers';

import { TransfersComponent } from './transfers.component';

import {} from 'jasmine';

describe('TransfersComponent', () => {
  let component: TransfersComponent;
  let store: MockStore;
  let fixture: ComponentFixture<TransfersComponent>;

  const initialState: State = {
    transfersModule: {
      transfersConfiguration: {
        loaded: true,
        loading: false,
        failure: false,
        error: null,
        configuration: {
          accountFrom: '606604517506a15a68f32830',
          accountFromName: 'Delikatesy',
          accountTo: '6071783408842102e4d55704',
          accountToName: 'Konto Millenium',
          currency: Currency.PLN,
          exchangeRate: '1',
          balance: '1200',
          value: '100',
          date: new Date(),
        },
      },
      transfers: {
        loaded: true,
        loading: false,
        failure: false,
        error: null,
        ids: ['1234', '2345'],
        entities: {
          1234: {
            _id: '1234',
            currency: 'EUR',
            exchangeRate: '4.52',
            transferLineIds: ['60520c5774357155a0759867', '60520c5774357155a0759868'],
            value: '21',
            accountFrom: '6050b71216557c113c3301ec',
            accountTo: '6050b71716557c113c3301ee',
            date: new Date(Date.now()),
            valueInPln: '94.9200',
          },
          2345: {
            _id: '2345',
            currency: 'EUR',
            exchangeRate: '4.52',
            transferLineIds: ['60520c6674357155a075986a', '60520c6674357155a075986b'],
            value: '12',
            accountFrom: '6050b71216557c113c3301ec',
            accountTo: '6050b71716557c113c3301ee',
            date: new Date(Date.now()),
            valueInPln: '54.2400',
          },
        },
      },
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransfersComponent],
      imports: [MatDialogModule, RouterTestingModule],
      providers: [provideMockStore({ initialState }), { provide: MAT_DIALOG_DATA, useValue: {} }, { provide: MatDialogRef, useValue: {} }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    store.dispatch({ type: '[Transfers] Read', payload: initialState });
    spyOn(store, 'dispatch');
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransfersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
