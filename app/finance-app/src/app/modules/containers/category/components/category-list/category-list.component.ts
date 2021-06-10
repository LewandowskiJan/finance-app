import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import { CategoriesActions } from '../../actions';
import { Category } from '../../model/Category';

import * as fromCategories from '../../reducers';
import * as fromRoot from '@app/reducers';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryListComponent implements OnInit {
  public categories$: Observable<Category[]>;

  constructor(private store: Store<fromRoot.State & fromCategories.State>) {
    this.categories$ = this.store.pipe(select(fromCategories.selectCategoriesCollection));
  }

  ngOnInit(): void {
    this.showCategory();
  }

  public showCategory(): void {
    this.store.dispatch(CategoriesActions.readCategories());
  }

  public createCategory(categoryFormValue: Category): void {
    this.store.dispatch(
      CategoriesActions.createCategory({
        category: categoryFormValue,
      })
    );
  }

  public deleteCategory(id: string): void {
    this.store.dispatch(CategoriesActions.deleteCategory({ id }));
  }
}
