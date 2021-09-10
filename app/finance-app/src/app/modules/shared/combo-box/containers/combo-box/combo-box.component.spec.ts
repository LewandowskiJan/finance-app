import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { ComboBoxService } from '../../services/combo-box.service';

import { ComboBoxComponent } from './combo-box.component';

import {} from 'jasmine';

describe('ComboBoxComponent', () => {
  let component: ComboBoxComponent;
  let store: MockStore;
  let fixture: ComponentFixture<ComboBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComboBoxComponent],
      imports: [HttpClientTestingModule, MatAutocompleteModule, FormsModule, ReactiveFormsModule],
      providers: [provideMockStore(), ComboBoxService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboBoxComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();

    spyOn(store, 'dispatch');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
