import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { CategoriesActions } from '../actions';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../model/Category';

@Injectable()
export class CategoriesEffects {
  readCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoriesActions.readCategories),
      switchMap(() =>
        this.categoriesService.readCategories().pipe(
          map((categories: Category[]) => CategoriesActions.readCategoriesSuccess({ categories })),
          catchError((error) => of(CategoriesActions.readCategoriesFailure({ error })))
        )
      )
    )
  );

  createCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoriesActions.createCategory),
      map((action) => action.category),
      switchMap((category: Category) =>
        this.categoriesService.createCategory(category).pipe(
          map((category: Category) => CategoriesActions.createCategorySuccess({ category })),
          catchError((error) => of(CategoriesActions.createCategoryFailure({ error })))
        )
      )
    )
  );

  deleteCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoriesActions.deleteCategory),
      map((action) => action.id),
      switchMap((id: string) =>
        this.categoriesService.deleteCategory(id).pipe(
          map((id: string) => CategoriesActions.deleteCategorySuccess({ id })),
          catchError((error) => of(CategoriesActions.deleteCategoryFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private categoriesService: CategoriesService) {}
}
