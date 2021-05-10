import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { ConnectionStatus } from './../../configuration/connection-status';
import { MicroService } from './../../configuration/microService';
import { Status } from './../../configuration/status';

@Component({
  selector: 'app-test-card',
  templateUrl: './test-card.component.html',
  styleUrls: ['./test-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestCardComponent implements OnInit {
  @Input() public service: MicroService;
  @Input() public status: ConnectionStatus;
  public Status: typeof Status = Status;

  constructor() {}

  ngOnInit(): void {}
}
