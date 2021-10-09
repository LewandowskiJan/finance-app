import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-label-with-details',
  templateUrl: './label-with-details.component.html',
  styleUrls: ['./label-with-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelWithDetailsComponent {
  @Input() public labelIcon: string;
  @Input() public labelTitle: string;
  @Input() public labelSubTitle: string;
}
