import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { AddButtonComponent } from './add-button.component';

import 'jest';

describe('AddButtonComponent', () => {
  let component: AddButtonComponent;
  let store: MockStore;
  let fixture: ComponentFixture<AddButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddButtonComponent],
      imports: [BrowserAnimationsModule],
      providers: [provideMockStore()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddButtonComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();

    spyOn(store, 'dispatch');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
