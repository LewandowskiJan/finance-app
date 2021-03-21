import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-panel-container',
  templateUrl: './slide-panel-container.component.html',
  styleUrls: ['./slide-panel-container.component.scss'],
})
export class SlidePanelContainerComponent implements OnInit {
  public isOpen = false;

  constructor() {}

  ngOnInit(): void {}

  public toggle() {
    this.isOpen = !this.isOpen;
  }
}
