import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-container',
  templateUrl: './account-container.component.html',
  styleUrls: ['./account-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
