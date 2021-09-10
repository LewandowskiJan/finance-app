import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-balance-result',
  templateUrl: './balance-result.component.html',
  styleUrls: ['./balance-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BalanceResultComponent {
  @Input() public balanceAccountFrom;
  @Input() public balanceAccountTo;
  @Input() public transferValue;
}
