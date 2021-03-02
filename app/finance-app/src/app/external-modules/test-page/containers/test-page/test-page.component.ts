import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs';

import { MicroService } from '../../configuration/microService';
import { TestConnectionService } from '../../services/test-connection.service';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestPageComponent implements OnInit {
  public checked: Subject<number> = this.testConnectionService.apiChecked;
  public failed: Subject<number> = this.testConnectionService.apiFailed;

  public microServicesCheck: MicroService[] = this.testConnectionService.microServicesCheckConnectionTestArray;

  constructor(private testConnectionService: TestConnectionService) {}

  ngOnInit(): void {
    this.testConnectionService.reset();
  }

  public checkApiServicesConnection(): void {
    this.testConnectionService.reset();
    this.microServicesCheck = this.testConnectionService.microServicesCheckConnectionTestArray;
  }
}
