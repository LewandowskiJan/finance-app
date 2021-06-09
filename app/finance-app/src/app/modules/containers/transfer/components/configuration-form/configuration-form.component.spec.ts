import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { ConfigurationFormComponent } from './configuration-form.component';
import { Currency } from '../../../../shared/models/currency.enum';
import { State } from '../../reducers';

describe('ConfigurationFormComponent', () => {
  let component: ConfigurationFormComponent;
  let fixture: ComponentFixture<ConfigurationFormComponent>;
  let store: MockStore;

  const fg: FormGroup = new FormGroup({
    currency: new FormControl('PLN'),
    exchangeRate: new FormControl('1'),
    value: new FormControl('44'),
    accountFrom: new FormControl('444444'),
    date: new FormControl(new Date(Date.now())),
  });

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
      declarations: [ConfigurationFormComponent],
      providers: [provideMockStore({ initialState })],
      imports: [ReactiveFormsModule, FormsModule, NoopAnimationsModule, MatSelectModule, MatFormFieldModule, MatInputModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    store.dispatch({ type: '[Transfer Configuration] Create configuration', payload: initialState });
    spyOn(store, 'dispatch');
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationFormComponent);
    component = fixture.componentInstance;
    component.configurationForm = fg;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
