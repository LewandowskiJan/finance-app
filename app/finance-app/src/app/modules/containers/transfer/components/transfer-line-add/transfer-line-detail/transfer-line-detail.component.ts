import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ComboBoxProcessType } from '@modules/shared/combo-box/configuration/combo-box-process-type.enum';
import { ComboBoxType } from '@modules/shared/combo-box/configuration/combo-box-type.enum';

@Component({
  selector: 'app-transfer-line-detail',
  templateUrl: './transfer-line-detail.component.html',
  styleUrls: ['./transfer-line-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransferLineDetailComponent {
  @Input() public transferLineForm: FormGroup;

  public comboBoxProcessType: typeof ComboBoxProcessType = ComboBoxProcessType;
  public comboBoxType: typeof ComboBoxType = ComboBoxType;

  public get value(): FormControl {
    return this.transferLineForm.get('value') as FormControl;
  }

  public get categoryId(): FormControl {
    return this.transferLineForm.get('categoryId') as FormControl;
  }
  public get expensesGroupId(): FormControl {
    return this.transferLineForm.get('expensesGroupId') as FormControl;
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

  public get importance(): FormControl {
    return this.transferLineForm.get('importance') as FormControl;
  }

  public selectCategory($event: any): void {
    this.categoryId.setValue($event._id);
  }

  public selectExpensesGroup($event: any): void {
    this.expensesGroupId.setValue($event._id);
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
