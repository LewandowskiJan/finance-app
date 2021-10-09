import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-result',
  templateUrl: './check-result.component.html',
  styleUrls: ['./check-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckResultComponent implements OnInit {
  @Input() failed: number = 0;
  @Input() checked: number = 0;
  constructor() {}

  ngOnInit(): void {}
}
