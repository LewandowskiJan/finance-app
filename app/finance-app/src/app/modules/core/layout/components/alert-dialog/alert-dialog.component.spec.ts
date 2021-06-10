import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { AlertDialogComponent } from './alert-dialog.component';

import {} from 'jasmine';

describe('AlertDialogComponent', () => {
  let component: AlertDialogComponent;
  let store: MockStore;
  let fixture: ComponentFixture<AlertDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertDialogComponent],
      imports: [MatDialogModule],
      providers: [
        provideMockStore(),
        { provide: MAT_DIALOG_DATA, useValue: { alertData: { header: 'test header' } } },
        { provide: MatDialogRef, useValue: {} },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertDialogComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();

    spyOn(store, 'dispatch');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
