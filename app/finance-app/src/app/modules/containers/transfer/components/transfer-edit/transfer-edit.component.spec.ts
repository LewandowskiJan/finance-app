import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { TransferEditComponent } from './transfer-edit.component';

import 'jest';

describe('TransferEditComponent', () => {
  let component: TransferEditComponent;
  let store: MockStore;
  let fixture: ComponentFixture<TransferEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransferEditComponent],
      imports: [ReactiveFormsModule, MatDialogModule, MatDatepickerModule, NoopAnimationsModule, MatNativeDateModule, FormsModule],
      providers: [
        provideMockStore(),
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferEditComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();

    spyOn(store, 'dispatch');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
