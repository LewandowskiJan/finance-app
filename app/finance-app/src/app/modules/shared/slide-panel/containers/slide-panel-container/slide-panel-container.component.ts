import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Account } from '@modules/containers/account/model/Account';

@Component({
  selector: 'app-slide-panel-container',
  templateUrl: './slide-panel-container.component.html',
  styleUrls: ['./slide-panel-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlidePanelContainerComponent implements OnInit {
  @Output() public formSubmitEmitter: EventEmitter<Account> = new EventEmitter();

  public isOpen = false;

  constructor() {}

  ngOnInit(): void {}

  public toggle(): void {
    this.isOpen = !this.isOpen;
  }

  public emitFormValue(formValue: any): void {
    this.formSubmitEmitter.emit(formValue);
  }
}
