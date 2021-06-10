import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-transfer-footer',
  templateUrl: './transfer-footer.component.html',
  styleUrls: ['./transfer-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransferFooterComponent {
  @Output() public addTransferLine: EventEmitter<any> = new EventEmitter<any>();

  @Input() public isValid: boolean;
  @Input() public restOfTransferValue: string;

  public addTransferLineForm(): void {
    this.addTransferLine.emit();
  }
}
