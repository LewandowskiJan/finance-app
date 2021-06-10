import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DATE_FORMATS, MatDateFormats } from '@angular/material/core';

import { Store } from '@ngrx/store';

import { ComboBoxProcessType } from '@modules/shared/combo-box/configuration/combo-box-process-type.enum';
import { ComboBoxType } from '@modules/shared/combo-box/configuration/combo-box-type.enum';
import { Currency } from '@modules/shared/models/currency.enum';

import { Account } from './../../../account/model/Account';

import * as fromRoot from '../../../../../reducers';
import * as fromTransfers from '../../reducers';
import { CurrencySelect } from '../../model/currency-select';

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
  selector: 'app-configuration-form',
  templateUrl: './configuration-form.component.html',
  styleUrls: ['./configuration-form.component.scss'],
  providers: [{ provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigurationFormComponent {
  @Input() public configurationForm: FormGroup;

  public comboBoxProcessType: typeof ComboBoxProcessType = ComboBoxProcessType;
  public comboBoxType: typeof ComboBoxType = ComboBoxType;

  public currencies: CurrencySelect[] = [
    { value: Currency.PLN, viewValue: 'PLN' },
    { value: Currency.EUR, viewValue: 'EUR' },
    { value: Currency.USD, viewValue: 'USD' },
  ];

  constructor(private store: Store<fromRoot.State & fromTransfers.State>) {}

  public get currency(): FormControl {
    return this.configurationForm.get('currency') as FormControl;
  }

  public get accountFrom(): FormControl {
    return this.configurationForm.get('accountFrom') as FormControl;
  }

  public get exchangeRate(): FormControl {
    return this.configurationForm.get('exchangeRate') as FormControl;
  }

  public get value(): FormControl {
    return this.configurationForm.get('value') as FormControl;
  }

  public get date(): FormControl {
    return this.configurationForm.get('date') as FormControl;
  }

  public get valueInPln(): FormControl {
    return this.configurationForm.get('valueInPln') as FormControl;
  }

  public selectedAccountFrom($event: Account): void {
    this.configurationForm.patchValue({
      accountFrom: $event._id,
      accountFromName: $event.name,
      balance: $event.balance,
    });
  }
}
