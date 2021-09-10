import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-panel',
  templateUrl: './slide-panel.component.html',
  styleUrls: ['./slide-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('openClose', [
      state('open', style({ left: '5px' })),
      state('hide', style({ left: '100vw' })),
      transition('open => hide', animate('350ms ease-out')),
      transition('hide => open', animate('350ms ease-in')),
    ]),
    trigger('displayForm', [
      state('display', style({ display: 'block' })),
      state('none', style({ display: 'none' })),
      transition('display => none', [style({ display: 'block' }), animate('350ms ease')]),
      transition('none => display', [style({ display: 'block' }), animate('0ms ease')]),
    ]),
  ],
})
export class SlidePanelComponent implements OnInit {
  @Input() isOpen: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
