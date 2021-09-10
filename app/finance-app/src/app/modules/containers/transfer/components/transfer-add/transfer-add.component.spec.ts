import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { TransferAddComponent } from './transfer-add.component';

import {} from 'jasmine';

describe('TransferAddComponent', () => {
  let component: TransferAddComponent;
  let store: MockStore;
  let fixture: ComponentFixture<TransferAddComponent>;

  const fg: FormGroup = new FormGroup({
    accountTo: new FormControl('5555555'),
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransferAddComponent],
      imports: [ReactiveFormsModule, NoopAnimationsModule],
      providers: [FormBuilder, provideMockStore()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    spyOn(store, 'dispatch');
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferAddComponent);
    component = fixture.componentInstance;
    component.transferForm = fg;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
