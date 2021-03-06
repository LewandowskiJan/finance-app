import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Output() public toggle: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public toggleMenu() {
    this.toggle.emit();
  }
}
