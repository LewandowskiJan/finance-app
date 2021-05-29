import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { TransfersContainerComponent } from './transfers-container.component';

import {} from 'jasmine';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { State } from '../../reducers';

describe('TransferContainerComponent', () => {
  let component: TransfersContainerComponent;
  let fixture: ComponentFixture<TransfersContainerComponent>;
  let store: MockStore;

  const initialState: State = {
    transfersModule: {
      transfers: {
        loaded: true,
        loading: false,
        failure: false,
        error: null,
        ids: ['1234', '2345'],
        entities: {
          1234: {
            _id: 'string',
            currency: 'PLN',
            exchangeRate: '1',
            value: '123.321',
            accountFrom: '222222222',
            accountTo: '11111111111',
            date: new Date(),
            valueInPln: '123.321',
            transferLineIds: [],
            transferLines: [],
          },
          2345: {
            _id: 'string',
            currency: 'PLN',
            exchangeRate: '1',
            value: '553.1',
            accountFrom: '3333',
            accountTo: '5555',
            date: new Date(),
            valueInPln: '883.3991',
            transferLineIds: [],
            transferLines: [],
          },
        },
      },
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransfersContainerComponent],
      imports: [RouterTestingModule, NoopAnimationsModule],
      providers: [provideMockStore({ initialState })],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    store.dispatch({ type: '[Transfers] Read', payload: initialState });
    spyOn(store, 'dispatch');
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransfersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
