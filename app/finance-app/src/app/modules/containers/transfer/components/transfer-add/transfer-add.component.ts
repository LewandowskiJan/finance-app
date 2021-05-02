import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DATE_FORMATS, MatDateFormats } from '@angular/material/core';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import * as fromLayout from './../../../../core/layout/reducers';
import * as fromTransfer from '../../reducers';
import { Transfer } from '../../model/Transfer';
import { TransfersActions } from '../../actions';

import { Alert } from '@modules/core/layout/model/Alert';
import { AlertStatus } from '@modules/core/layout/model/AlertStatus.enum';
import { DialogData } from '@modules/core/layout/model/DialogData';
import { LayoutActions } from '@modules/core/layout/actions';

export enum Currency {
  PLN = 'PLN',
  EUR = 'EUR',
  USD = 'USD',
}

export interface CurrencySelect {
  value: Currency;
  viewValue: string;
}

export const MY_FORMATS: MatDateFormats = {
  parse: {
    dateInput: 'MM-DD-YYYY',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'app-transfer-add',
  templateUrl: './transfer-add.component.html',
  styleUrls: ['./transfer-add.component.scss'],
  providers: [{ provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }],
})
export class TransferAddComponent implements OnInit {
  @Input() transferForm: FormGroup;
  @Input() balanceFrom: string;
  @Input() balanceTo: string;

  public currencies: CurrencySelect[] = [
    { value: Currency.PLN, viewValue: 'PLN' },
    { value: Currency.EUR, viewValue: 'EUR' },
    { value: Currency.USD, viewValue: 'USD' },
  ];

  public get currency(): FormControl {
    return this.transferForm.get('currency') as FormControl;
  }

  public get exchangeRate(): FormControl {
    return this.transferForm.get('exchangeRate') as FormControl;
  }

  public get value(): FormControl {
    return this.transferForm.get('value') as FormControl;
  }

  public get accountFrom(): FormControl {
    return this.transferForm.get('accountFrom') as FormControl;
  }

  public get accountTo(): FormControl {
    return this.transferForm.get('accountTo') as FormControl;
  }

  public get date(): FormControl {
    return this.transferForm.get('date') as FormControl;
  }

  public get valueInPln(): FormControl {
    return this.transferForm.get('valueInPln') as FormControl;
  }

  public get transferLines(): FormArray {
    return this.transferForm.get('transferLines') as FormArray;
  }

  constructor(private formBuilder: FormBuilder, private store: Store<fromLayout.State & fromTransfer.State>) {}

  ngOnInit(): void {}

  public addTransferLineForm(): void {
    this.transferLines.push(
      this.formBuilder.group({
        value: ['', Validators.compose([(Validators.required, Validators.pattern('^[0-9]{1,8}([.][0-9]{1,4})?$'))])],
        currency: [{ value: this.currency.value, disabled: true }, Validators.required],
        categoryId: ['', Validators.required],
        expensesGroupId: ['', Validators.required],
        productId: [''],
        projectId: [''],
        targetId: [''],
        eventId: [''],
        importance: [''],
      })
    );
  }

  public addTransfer(): void {
    const transfer: Transfer = this.transferForm.getRawValue();

    if (!this.transferForm.valid) {
      return;
    }

    if (!this.isTransferLinesValueSumNotEqualToTransferValue()) {
      const alert: Alert = {
        header: 'Validation Error',
        title: 'Transfer value is not equal',
        message: 'Transfer value is not equal to sum of the transfer lines',
      };

      this.showValidationErrorDialog(alert);
      return;
    }

    if (!this.areAccountsDifferent()) {
      const alert: Alert = {
        header: 'Validation Error',
        title: 'Chosen Account are the same number',
        message: 'Change one of the chosen account',
      };

      this.showValidationErrorDialog(alert);
      return;
    }

    this.store.dispatch(TransfersActions.createTransfer({ transfer: transfer }));
  }

  public removeTransferLineForm(index: number): void {
    this.transferLines.removeAt(index);
  }

  public isTransferLinesValueSumNotEqualToTransferValue(): boolean {
    const transferLinesValue: string = this.transferLines.getRawValue().reduce((accumulator, currTl) => {
      console.log(accumulator, currTl);
      return parseFloat((accumulator + parseFloat(currTl.value)).toFixed(4));
    }, 0);

    return +this.value.value * 1000 === +transferLinesValue * 1000;
  }

  public areAccountsDifferent(): boolean {
    return this.accountFrom.value !== this.accountTo.value;
  }

  private showValidationErrorDialog(alert: Alert): void {
    const alertData: DialogData = {
      alertData: {
        ...alert,
      },
      alertStatus: AlertStatus.ERROR,
    };
    this.store.dispatch(LayoutActions.openAlertDialog({ alert: alertData }));
  }
}
