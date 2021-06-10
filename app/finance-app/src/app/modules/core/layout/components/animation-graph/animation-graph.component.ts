import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation-graph',
  templateUrl: './animation-graph.component.html',
  styleUrls: ['./animation-graph.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimationGraphComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
