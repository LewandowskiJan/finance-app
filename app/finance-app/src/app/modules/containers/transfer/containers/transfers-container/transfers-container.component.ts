import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer-container',
  templateUrl: './transfers-container.component.html',
  styleUrls: ['./transfers-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransfersContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
