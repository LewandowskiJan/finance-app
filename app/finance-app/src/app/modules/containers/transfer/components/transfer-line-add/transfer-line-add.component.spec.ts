import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { TransferLineAddComponent } from './transfer-line-add.component';

import {} from 'jasmine';

describe('TransferLineAddComponent', () => {
  let component: TransferLineAddComponent;
  let fixture: ComponentFixture<TransferLineAddComponent>;

  const fg: FormGroup = new FormGroup({
    value: new FormControl('123'),
    currency: new FormControl('PLN'),
    categoryId: new FormControl('cat1'),
    expensesGroupId: new FormControl('group1'),
    productId: new FormControl('prod1'),
    projectId: new FormControl('proj1'),
    targetId: new FormControl('target1'),
    eventId: new FormControl('event1'),
    importance: new FormControl('2'),
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransferLineAddComponent],
      imports: [ReactiveFormsModule, FormsModule, NoopAnimationsModule, MatSelectModule, MatFormFieldModule, MatInputModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferLineAddComponent);
    component = fixture.componentInstance;
    component.transferLineForm = fg;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
