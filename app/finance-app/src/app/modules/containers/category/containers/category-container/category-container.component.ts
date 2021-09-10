import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import * as fromCategories from '../../reducers';

import * as fromRoot from '@app/reducers';

@Component({
  selector: 'app-category-container',
  templateUrl: './category-container.component.html',
  styleUrls: ['./category-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryContainerComponent implements OnInit {
  public errors$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State & fromCategories.State>) {}

  ngOnInit(): void {
    this.errors$ = this.store.pipe(select(fromCategories.selectError));
  }
}
