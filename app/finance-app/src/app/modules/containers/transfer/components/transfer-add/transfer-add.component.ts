import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ComboBoxProcessType } from '@modules/shared/combo-box/configuration/combo-box-process-type.enum';
import { ComboBoxType } from '@modules/shared/combo-box/configuration/combo-box-type.enum';

import { Account } from './../../../account/model/Account';

@Component({
  selector: 'app-transfer-add',
  templateUrl: './transfer-add.component.html',
  styleUrls: ['./transfer-add.component.scss'],
})
export class TransferAddComponent {
  @Input() public transferForm: FormGroup;

  public comboBoxProcessType: typeof ComboBoxProcessType = ComboBoxProcessType;
  public comboBoxType: typeof ComboBoxType = ComboBoxType;

  public get accountTo(): FormControl {
    return this.transferForm.get('accountTo') as FormControl;
  }

  public selectedAccountTo($event: Account): void {
    this.transferForm.patchValue({
      accountTo: $event._id,
      accountToName: $event.name,
      balance: $event.balance,
    });
  }
}
