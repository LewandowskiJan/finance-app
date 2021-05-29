import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-slide-panel-container',
  templateUrl: './slide-panel-container.component.html',
  styleUrls: ['./slide-panel-container.component.scss'],
})
export class SlidePanelContainerComponent implements OnInit {
  @Output() public formSubmitEmitter: EventEmitter<Account> = new EventEmitter();

  public isOpen = false;

  constructor() {}

  ngOnInit(): void {}

  public toggle() {
    this.isOpen = !this.isOpen;
  }

  public emitFormValue(formValue: any) {
    this.formSubmitEmitter.emit(formValue);
  }
}
