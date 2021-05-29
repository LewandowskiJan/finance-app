import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { AccountContainerComponent } from './account-container.component';
import { MaterialModule } from '../../../../shared/material/material.module';
import { State } from '../../reducers';

import {} from 'jasmine';

describe('AccountContainerComponent', () => {
  let component: AccountContainerComponent;
  let store: MockStore;
  let fixture: ComponentFixture<AccountContainerComponent>;

  const initialState: State = {
    accountsModule: {
      accountsList: {
        loaded: true,
        loading: false,
        failure: false,
        error: null,
        ids: [],
        entities: {},
      },
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountContainerComponent],
      imports: [RouterTestingModule],
      providers: [provideMockStore({ initialState }), MaterialModule, NoopAnimationsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    store.dispatch({ type: '[Accounts] Read', payload: initialState });
    spyOn(store, 'dispatch');
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
