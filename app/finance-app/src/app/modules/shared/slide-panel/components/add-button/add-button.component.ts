import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('openClose', [
      state('open', style({ transform: 'rotateY(0)' })),
      state('hide', style({ transform: 'rotateY(-180deg)' })),
      transition('open => hide', animate('350ms ease-out')),
      transition('hide => open', animate('350ms ease-in')),
    ]),
  ],
})
export class AddButtonComponent implements OnInit {
  @Input() isOpen: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
