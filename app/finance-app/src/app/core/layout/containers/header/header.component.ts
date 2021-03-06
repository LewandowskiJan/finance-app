import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  @Output() public toggle: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public toggleMenu() {
    this.toggle.emit();
  }
}
