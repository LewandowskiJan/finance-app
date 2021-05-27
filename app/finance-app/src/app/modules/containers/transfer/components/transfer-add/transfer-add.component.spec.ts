import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { TransferAddComponent } from './transfer-add.component';

import {} from 'jasmine';

describe('TransferAddComponent', () => {
  let component: TransferAddComponent;
  let store: MockStore;
  let fixture: ComponentFixture<TransferAddComponent>;

  const fg: FormGroup = new FormGroup({
    currency: new FormControl('PLN'),
    exchangeRate: new FormControl('1'),
    value: new FormControl('44'),
    accountFrom: new FormControl('444444'),
    accountTo: new FormControl('5555555'),
    date: new FormControl(new Date(Date.now())),
    valueInPln: new FormControl('123.213'),
    transferLines: new FormArray([]),
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransferAddComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        NoopAnimationsModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatDialogModule,
        MatNativeDateModule,
      ],
      providers: [FormBuilder, provideMockStore(), { provide: MAT_DIALOG_DATA, useValue: {} }, { provide: MatDialogRef, useValue: {} }],
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
