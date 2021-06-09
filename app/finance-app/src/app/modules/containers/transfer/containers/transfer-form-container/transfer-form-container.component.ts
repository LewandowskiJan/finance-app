import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store, select } from '@ngrx/store';

import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { ComboBoxProcessType } from '@modules/shared/combo-box/configuration/combo-box-process-type.enum';
import { ComboBoxType } from '@modules/shared/combo-box/configuration/combo-box-type.enum';
import { Currency } from '@modules/shared/models/currency.enum';

import * as fromTransfers from '../../reducers';
import { Account } from './../../../account/model/Account';
import { ConfigurationActions } from '../../actions';
import { TransferConfiguration } from './../../model/transfer-configuration';

@Component({
  selector: 'app-transfer-form-container',
  templateUrl: './transfer-form-container.component.html',
  styleUrls: ['./transfer-form-container.component.scss'],
})
export class TransferFormContainerComponent implements OnInit {
  public transferForm: FormArray;
  public transferConfigurationForm: FormGroup;
  public transferDestinationForm: FormGroup;
  public transferLinesForm: FormArray;
  public configuration$: Observable<{ configuration: TransferConfiguration }>;

  public transferFromDetails: any;
  public transferToDetails: any;
  public comboBoxProcessType: typeof ComboBoxProcessType = ComboBoxProcessType;
  public comboBoxType: typeof ComboBoxType = ComboBoxType;

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.store.dispatch(
      ConfigurationActions.createConfiguration({
        configuration: {
          ...this.transferConfigurationForm.getRawValue(),
          ...this.transferDestinationForm.getRawValue(),
        },
      })
    );
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  constructor(private formBuilder: FormBuilder, private store: Store<fromTransfers.State>) {
    this.configuration$ = this.store.pipe(
      select(fromTransfers.selectConfigurationState),
      map((response: any) => response.configuration)
    );
  }

  public removeTransferLine(index: number) {
    this.transferLinesForm.removeAt(index);
  }

  ngOnInit(): void {
    this.buildForms();

    this.transferConfigurationForm
      .get('value')
      .valueChanges.pipe(
        startWith('0'),
        map((value) => {
          const exchangeRateValue = this.transferConfigurationForm.get('exchangeRate').value;
          return (parseFloat(value) * parseFloat(exchangeRateValue)).toFixed(4).toString();
        })
      )
      .subscribe((result) => {
        result ? result : '0';
        this.transferConfigurationForm.get('valueInPln').setValue(result);
      });

    this.transferConfigurationForm
      .get('exchangeRate')
      .valueChanges.pipe(
        startWith('0'),
        map((value) => {
          const transferValue = this.transferConfigurationForm.get('value').value;
          return (parseFloat(value) * parseFloat(transferValue)).toFixed(4).toString();
        })
      )
      .subscribe((result) => {
        this.transferConfigurationForm.get('valueInPln').setValue(result);
      });
  }

  private buildForms() {
    this.transferForm = this.formBuilder.array([this.buildConfigurationForm(), this.buildDestinationForm(), this.buildLinesForm()]);
  }

  private buildConfigurationForm(): FormGroup {
    return (this.transferConfigurationForm = this.formBuilder.group({
      accountFrom: ['', Validators.required],
      accountFromName: ['', Validators.required],
      currency: [Currency.PLN, Validators.required],
      exchangeRate: ['1', Validators.required],
      value: ['', [Validators.required, Validators.pattern('^[0-9]{1,14}([.][0-9]{1,4})?$')]],
      balance: ['0', Validators.required],
      valueInPln: [{ value: '0', disabled: true }, Validators.required],
      date: [new Date(Date.now()), Validators.required],
    }));
  }

  private buildDestinationForm(): FormGroup {
    return (this.transferDestinationForm = this.formBuilder.group({
      accountTo: ['', Validators.required],
      accountToName: ['', Validators.required],
      currency: [{ value: this.transferConfigurationForm.get('currency').value, disabled: true }, Validators.required],
      exchangeRate: ['1', Validators.required],
    }));
  }

  private buildLinesForm(): FormArray {
    return (this.transferLinesForm = this.transferLinesForm =
      this.formBuilder.array([
        this.formBuilder.group({
          value: ['', Validators.compose([(Validators.required, Validators.pattern('^[0-9]{1,8}([.][0-9]{1,4})?$'))])],
          currency: [{ value: this.transferConfigurationForm.get('currency').value, disabled: true }, Validators.required],
          categoryId: ['', Validators.required],
          expensesGroupId: ['', Validators.required],
          productId: [''],
          projectId: [''],
          targetId: [''],
          eventId: [''],
          importance: ['1'],
        }),
      ]));
  }

  selectedAccountTo($event: Account): void {
    this.transferForm.get('transferConfigurationForm').patchValue({
      accountTo: $event._id,
    });
    this.transferToDetails = $event;
  }

  selectedAccountFrom($event: Account): void {
    this.transferForm.get('transferConfigurationForm').patchValue({
      accountFrom: $event._id,
      currency: $event.currency,
      exchangeRate: $event.currency === 'PLN' ? '1' : $event.currency,
    });
    this.transferFromDetails = $event;
    this.transferForm.get('value').reset();
    this.transferForm.get('value').setValidators(Validators.max(parseFloat($event.balance)));
  }

  public addTransferLine(): void {
    this.transferLinesForm.push(
      this.formBuilder.group({
        value: ['', Validators.compose([(Validators.required, Validators.pattern('^[0-9]{1,8}([.][0-9]{1,4})?$'))])],
        currency: [{ value: this.transferConfigurationForm.get('currency').value, disabled: true }, Validators.required],
        categoryId: ['', Validators.required],
        expensesGroupId: ['', Validators.required],
        productId: [''],
        projectId: [''],
        targetId: [''],
        eventId: [''],
        importance: ['1'],
      })
    );
  }

  // todo: check is account different
  // todo: check is enough funds
  // todo: check is all fields are correct
}
