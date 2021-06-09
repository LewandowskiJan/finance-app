import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TransferFooterComponent } from './transfer-footer.component';

describe('TransferFooterComponent', () => {
  let component: TransferFooterComponent;
  let fixture: ComponentFixture<TransferFooterComponent>;

  const mockTransferForm: FormGroup = new FormGroup({
    currency: new FormControl('PLN'),
  });

  const mockTransferLines: FormArray = new FormArray([
    new FormGroup({
      currency: new FormControl('PLN'),
    }),
  ]);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransferFooterComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferFooterComponent);
    component = fixture.componentInstance;
    component.transferForm = mockTransferForm;
    component.transferLines = mockTransferLines;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
