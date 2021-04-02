import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Currency, CurrencySelect } from '../transfer-add/transfer-add.component';

@Component({
  selector: 'app-transfer-line-add',
  templateUrl: './transfer-line-add.component.html',
  styleUrls: ['./transfer-line-add.component.scss'],
})
export class TransferLineAddComponent implements OnInit {
  @Input() public transferLineForm: FormGroup;

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
}
