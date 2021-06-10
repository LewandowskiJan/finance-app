import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DATE_LOCALE, MatDateFormats } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Transfer } from '../../model/transfer';

export const MY_FORMATS: MatDateFormats = {
  parse: {
    dateInput: 'mm/DD/YYYY',
  },
  display: {
    dateInput: 'YYYY/mm/dd',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'app-transfer-edit',
  templateUrl: './transfer-edit.component.html',
  styleUrls: ['./transfer-edit.component.scss'],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransferEditComponent implements OnInit {
  public transferForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<TransferEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Transfer,
    private formBuilder: FormBuilder
  ) {}

  get currency(): FormControl {
    return this.transferForm.get('currency') as FormControl;
  }

  get exchangeRate(): FormControl {
    return this.transferForm.get('exchangeRate') as FormControl;
  }

  get value(): FormControl {
    return this.transferForm.get('value') as FormControl;
  }

  get accountFrom(): FormControl {
    return this.transferForm.get('accountFrom') as FormControl;
  }

  get accountTo(): FormControl {
    return this.transferForm.get('accountTo') as FormControl;
  }

  get date(): FormControl {
    return this.transferForm.get('date') as FormControl;
  }

  get valueInPln(): FormControl {
    return this.transferForm.get('valueInPln') as FormControl;
  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.transferForm = this.formBuilder.group({
      _id: [this.data._id, Validators.required],
      currency: [this.data.currency, Validators.required],
      exchangeRate: [this.data.exchangeRate, Validators.required],
      value: [this.data.value, Validators.compose([(Validators.required, Validators.pattern('^[0-9]{1,8}([.][0-9]{1,4})?$'))])],
      accountFrom: [this.data.accountFrom, Validators.required],
      accountTo: [this.data.accountTo, Validators.required],
      date: [this.data.date, Validators.required],
      valueInPln: [this.data.valueInPln, Validators.required],
    });
  }
}
