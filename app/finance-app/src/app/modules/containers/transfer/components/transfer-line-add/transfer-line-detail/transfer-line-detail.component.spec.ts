import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { TransferLineDetailComponent } from './transfer-line-detail.component';

describe('TransferLineDetailComponent', () => {
  let component: TransferLineDetailComponent;
  let fixture: ComponentFixture<TransferLineDetailComponent>;

  const fg: FormGroup = new FormGroup({
    value: new FormControl('12345'),
    categoryId: new FormControl('12345'),
    expensesGroupId: new FormControl('12345'),
    productId: new FormControl('12345'),
    projectId: new FormControl('12345'),
    targetId: new FormControl('12345'),
    eventId: new FormControl('12345'),
    importance: new FormControl('12345'),
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransferLineDetailComponent],
      imports: [ReactiveFormsModule, FormsModule, NoopAnimationsModule, MatSelectModule, MatFormFieldModule, MatInputModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferLineDetailComponent);
    component = fixture.componentInstance;
    component.transferLineForm = fg;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
