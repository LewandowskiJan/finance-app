import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { map } from 'rxjs/operators';

import { ComboBoxProcessType } from '@modules/shared/combo-box/configuration/combo-box-process-type.enum';
import { ComboBoxType } from '@modules/shared/combo-box/configuration/combo-box-type.enum';

import { Account } from './../../../account/model/Account';

@Component({
  selector: 'app-transfer-form-container',
  templateUrl: './transfer-form-container.component.html',
  styleUrls: ['./transfer-form-container.component.scss'],
})
export class TransferFormContainerComponent implements OnInit {
  public transferForm: FormGroup;
  public transferFromDetails: any;
  public transferToDetails: any;
  public comboBoxProcessType: typeof ComboBoxProcessType = ComboBoxProcessType;
  public comboBoxType: typeof ComboBoxType = ComboBoxType;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();

    this.transferForm
      .get('value')
      .valueChanges.pipe(
        map((value) => {
          if (!value) {
            return '0';
          }
          const exchangeRateValue = this.transferForm.get('exchangeRate').value ? this.transferForm.get('exchangeRate').value : '1';
          return (parseFloat(value) * parseFloat(exchangeRateValue)).toFixed(4).toString();
        })
      )
      .subscribe((result) => {
        result ? result : '0';
        this.transferForm.get('valueInPln').setValue(result);
      });

    this.transferForm
      .get('exchangeRate')
      .valueChanges.pipe(
        map((value) => {
          if (!value) {
            return '0';
          }
          const transferValue = this.transferForm.get('value').value ? this.transferForm.get('value').value : '1';
          return (parseFloat(value) * parseFloat(transferValue)).toFixed(4).toString();
        })
      )
      .subscribe((result) => {
        this.transferForm.get('valueInPln').setValue(result);
      });
  }

  private buildForm() {
    this.transferForm = this.formBuilder.group({
      currency: [{ value: '', disabled: true }, Validators.required],
      exchangeRate: ['1', Validators.required],
      value: ['', [Validators.required, Validators.pattern('^[0-9]{1,14}([.][0-9]{1,4})?$')]],
      accountFrom: ['', Validators.required],
      accountTo: ['', Validators.required],
      date: [new Date(Date.now()), Validators.required],
      valueInPln: [{ value: '0', disabled: true }, Validators.required],
      transferLines: this.formBuilder.array([]),
    });
  }

  selectedAccountTo($event: Account): void {
    this.transferForm.patchValue({
      accountTo: $event._id,
    });
    this.transferToDetails = $event;
  }

  selectedAccountFrom($event: Account): void {
    this.transferForm.patchValue({
      accountFrom: $event._id,
      currency: $event.currency,
      exchangeRate: $event.currency === 'PLN' ? '1' : $event.currency,
    });
    this.transferFromDetails = $event;
    this.transferForm.get('value').reset();
    this.transferForm.get('value').setValidators(Validators.max(parseFloat($event.balance)));
  }
}
