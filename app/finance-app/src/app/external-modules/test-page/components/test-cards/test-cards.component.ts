import { Component, Input, OnInit } from '@angular/core';

import { MicroService } from '../../configuration/microService';

@Component({
  selector: 'app-test-cards',
  templateUrl: './test-cards.component.html',
  styleUrls: ['./test-cards.component.scss'],
})
export class TestCardsComponent implements OnInit {
  @Input() testConnectionServicesArray: MicroService[];

  constructor() {}

  ngOnInit(): void {}
}
