import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { MaterialModule } from '../../../../shared/material/material.module';
import * as fromAccounts from '../../reducers';

import { AccountContainerComponent } from './account-container.component';

import {} from 'jasmine';

describe('AccountContainerComponent', () => {
  let component: AccountContainerComponent;
  let store: MockStore;
  let fixture: ComponentFixture<AccountContainerComponent>;

  const initialState: fromAccounts.State = {
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
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select error and display banner', () => {
    fromAccounts.selectError.setResult(true);

    store.refreshState();
    fixture.detectChanges();

    const component: DebugElement = fixture.debugElement;
    const banner = component.query(By.css('app-network-error-banner'));

    expect(banner).toBeDefined();
  });

  it('should not select error and not display banner', () => {
    fromAccounts.selectError.setResult(false);

    store.refreshState();
    fixture.detectChanges();

    const component: DebugElement = fixture.debugElement;
    const banner = component.query(By.css('app-network-error-banner'));

    expect(banner).toBeNull();
  });
});
