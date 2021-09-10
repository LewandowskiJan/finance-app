import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';

import { Category } from '../model/Category';

export const createCategory = createAction('[Category] Create one', props<{ category: Category }>());
export const createCategorySuccess = createAction('[Category] Create success', props<{ category: Category }>());
export const createCategoryFailure = createAction('[Category] Create failure', props<{ error: any }>());

export const deleteCategory = createAction('[Category] Delete one', props<{ id: string }>());
export const deleteCategorySuccess = createAction('[Category] Delete success', props<{ id: string }>());
export const deleteCategoryFailure = createAction('[Category] Delete failure', props<{ error: any }>());

export const createCategories = createAction('[Categories] Create many', props<{ categories: Category[] }>());
export const readCategories = createAction('[Categories] Read');
export const updateCategories = createAction('[Categories] Update', props<{ categories: Category[] }>());
export const deleteCategories = createAction('[Categories] Delete', props<{ categories: Category[] }>());

export const createCategoriesSuccess = createAction('[Categories] Create success', props<{ categories: Category[] }>());
export const readCategoriesSuccess = createAction('[Categories] Read success', props<{ categories: Category[] }>());
export const updateCategoriesSuccess = createAction('[Categories] Update success', props<{ updatingCategory: Update<Category> }>());
export const deleteCategoriesSuccess = createAction('[Categories] Delete success', props<{ categories: Category[] }>());

export const createCategoriesFailure = createAction('[Categories] Create failure', props<{ error: any }>());
export const readCategoriesFailure = createAction('[Categories] Read failure', props<{ error: any }>());
export const updateCategoriesFailure = createAction('[Categories] Update failure', props<{ error: any }>());
export const deleteCategoriesFailure = createAction('[Categories] Delete failure', props<{ error: any }>());
