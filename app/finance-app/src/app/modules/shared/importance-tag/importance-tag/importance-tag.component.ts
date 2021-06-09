import { Component, Input } from '@angular/core';

import { importanceConfiguration } from './../configuration/importance';

@Component({
  selector: 'app-importance-tag',
  templateUrl: './importance-tag.component.html',
  styleUrls: ['./importance-tag.component.scss'],
})
export class ImportanceTagComponent {
  public importanceStyleClass: string;

  @Input() set importance(importance: number) {
    this.importanceStyleClass = importanceConfiguration[importance - 1].class;
  }

  get getStyleClass(): string {
    return this.importanceStyleClass;
  }
}
