import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ComboBoxProcessType } from '@modules/shared/combo-box/configuration/combo-box-process-type.enum';
import { ComboBoxType } from '@modules/shared/combo-box/configuration/combo-box-type.enum';

import { Currency, CurrencySelect } from '../transfer-add/transfer-add.component';

@Component({
  selector: 'app-transfer-line-add',
  templateUrl: './transfer-line-add.component.html',
  styleUrls: ['./transfer-line-add.component.scss'],
})
export class TransferLineAddComponent implements OnInit {
  @Input() public transferLineForm: FormGroup;

  public comboBoxProcessType: typeof ComboBoxProcessType = ComboBoxProcessType;
  public comboBoxType: typeof ComboBoxType = ComboBoxType;

  public get value(): FormControl {
    return this.transferLineForm.get('value') as FormControl;
  }

  public get currency(): FormControl {
    return this.transferLineForm.get('currency') as FormControl;
  }

  public get categoryId(): FormControl {
    return this.transferLineForm.get('categoryId') as FormControl;
  }
  public get groupId(): FormControl {
    return this.transferLineForm.get('groupId') as FormControl;
  }

  public get productId(): FormControl {
    return this.transferLineForm.get('productId') as FormControl;
  }

  public get projectId(): FormControl {
    return this.transferLineForm.get('projectId') as FormControl;
  }

  public get targetId(): FormControl {
    return this.transferLineForm.get('targetId') as FormControl;
  }

  public get eventId(): FormControl {
    return this.transferLineForm.get('eventId') as FormControl;
  }

  public currencies: CurrencySelect[] = [
    { value: Currency.PLN, viewValue: 'PLN' },
    { value: Currency.EUR, viewValue: 'EUR' },
    { value: Currency.USD, viewValue: 'USD' },
  ];

  constructor() {}

  ngOnInit(): void {}

  public selectCategory($event: any): void {
    this.categoryId.setValue($event._id);
  }

  public selectGroup($event: any): void {
    this.groupId.setValue($event._id);
  }

  public selectEvent($event: any): void {
    this.eventId.setValue($event._id);
  }

  public selectTarget($event: any): void {
    this.targetId.setValue($event._id);
  }

  public selectProject($event: any): void {
    this.projectId.setValue($event._id);
  }

  public selectProduct($event: any): void {
    this.productId.setValue($event._id);
  }
}
