import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  get currency() {
    return this.transferForm.get('currency');
  }

  get exchangeRate() {
    return this.transferForm.get('exchangeRate');
  }

  get value() {
    return this.transferForm.get('value');
  }

  get accountFrom() {
    return this.transferForm.get('accountFrom');
  }

  get accountTo() {
    return this.transferForm.get('accountTo');
  }

  get date() {
    return this.transferForm.get('date');
  }

  get valueInPln() {
    return this.transferForm.get('valueInPln');
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
