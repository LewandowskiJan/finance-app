import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import * as fromCategories from '../../reducers';
import * as fromRoot from '../../../../../reducers';

import { CategoriesActions } from '../../actions';
import { Category } from '../../model/Category';

@Component({
  selector: 'app-category-container',
  templateUrl: './category-container.component.html',
  styleUrls: ['./category-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryContainerComponent implements OnInit {
  public icons: string[] = ['&#127829;', '&#127775;', '&#127828;', '&#128040;', '&#128126;', '&#128142;', '&#128140;', '&#128331;'];
  public categoryForm: FormGroup;
  public categories$: Observable<Category[]>;

  constructor(private store: Store<fromRoot.State & fromCategories.State>, private formBuilder: FormBuilder) {
    this.categories$ = this.store.pipe(select(fromCategories.selectCategoriesCollection));

    this.buildForm();
  }

  get name() {
    return this.categoryForm.get('name');
  }
  get utfIcon() {
    return this.categoryForm.get('utfIcon');
  }

  ngOnInit(): void {
    this.showCategory();
  }

  public showCategory(): void {
    this.store.dispatch(CategoriesActions.readCategories());
  }

  public createCategory(): void {
    this.categoryForm.updateValueAndValidity();
    if (!this.categoryForm.valid) {
      return;
    }

    this.store.dispatch(
      CategoriesActions.createCategory({
        category: this.categoryForm.getRawValue(),
      })
    );
  }

  public deleteCategory(id: string): void {
    this.store.dispatch(CategoriesActions.deleteCategory({ id }));
  }

  private buildForm(): void {
    this.categoryForm = this.formBuilder.group({
      name: ['', Validators.required],
      utfIcon: ['', Validators.required],
    });
  }
}
