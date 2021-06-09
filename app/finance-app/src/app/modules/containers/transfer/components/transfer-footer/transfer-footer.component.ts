import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-transfer-footer',
  templateUrl: './transfer-footer.component.html',
  styleUrls: ['./transfer-footer.component.scss'],
})
export class TransferFooterComponent {
  @Output() public addTransferLine: EventEmitter<any> = new EventEmitter<any>();

  @Input() public transferForm: FormGroup;
  @Input() public transferLines: FormArray;
  @Input() public restOfTransferValue: string;

  public addTransferLineForm(): void {
    this.addTransferLine.emit();
  }
}
