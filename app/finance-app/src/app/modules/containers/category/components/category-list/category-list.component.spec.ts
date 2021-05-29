import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { CategoryListComponent } from './category-list.component';
import { MaterialModule } from '../../../../shared/material/material.module';
import { SLIDE_PANEL_CONFIGURATION_TOKEN } from '../../../../shared/slide-panel/token/slide-panel-configuration-token';
import { SlidePanelConfiguration } from '../../../../shared/slide-panel/model/slide-panel-configuration';
import { State } from '../../reducers';

import {} from 'jasmine';

const slidePanelConfigurationMock: SlidePanelConfiguration = {
  name: { enable: true, label: 'Category name' },
  alias: { enable: true, label: 'Category alias' },
  isExternal: { enable: false, label: 'Is external' },
  utfIcon: { enable: true, label: 'Icon' },
  button: { label: 'Add category' },
};

describe('CategoryListComponent', () => {
  let component: CategoryListComponent;
  let store: MockStore;
  let fixture: ComponentFixture<CategoryListComponent>;

  const initialState: State = {
    categoriesModule: {
      categoriesList: {
        loaded: true,
        loading: false,
        failure: false,
        error: null,
        ids: ['1234', '2345'],
        entities: {
          1234: {
            _id: '1234',
            name: 'category_1',
            utfIcon: '&#128126;',
            dateOfCreate: new Date(Date.now()),
            isActive: true,
          },
          2345: {
            _id: '2345',
            name: 'category_2',
            utfIcon: '&#127828;',
            dateOfCreate: new Date(Date.now()),
            isActive: false,
          },
        },
      },
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryListComponent],
      imports: [MaterialModule, NoopAnimationsModule, RouterTestingModule],
      providers: [provideMockStore({ initialState }), { provide: SLIDE_PANEL_CONFIGURATION_TOKEN, useValue: slidePanelConfigurationMock }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    store.dispatch({ type: '[Categories] Read', payload: initialState });
    spyOn(store, 'dispatch');
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
