import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { CategoriesActions } from '../actions';
import { Category } from '../model/Category';

export const categoriesFeatureKey = 'categoriesList';

/**
 * @ngrx/entity provides a predefined interface for handling
 * a structured dictionary of records. This interface
 * includes an array of ids, and a dictionary of the provided
 * model type by id. This interface is extended to include
 * any additional interface properties.
 */
export interface State extends EntityState<Category> {
  loaded: boolean;
  loading: boolean;
  failure: boolean;
  error: any;
}

/**
 * createEntityAdapter creates an object of many helper
 * functions for single or multiple operations
 * against the dictionary of records. The configuration
 * object takes a record id selector function and
 * a sortComparer option which is set to a compare
 * function if the records are to be sorted.
 */
export const adapter: EntityAdapter<Category> = createEntityAdapter<Category>({
  selectId: (category: Category) => category._id,
  sortComparer: false,
});

/**
 * getInitialState returns the default initial state
 * for the generated entity state. Initial state
 * additional properties can also be defined.
 */
export const initialState: State = adapter.getInitialState({
  loaded: false,
  loading: false,
  failure: false,
  error: null,
});

export const reducer = createReducer(
  initialState,

  on(CategoriesActions.readCategories, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    failure: false,
    error: null,
  })),

  on(CategoriesActions.readCategoriesSuccess, (state, { categories }) =>
    adapter.setAll(categories, {
      ...state,
      loading: false,
      loaded: true,
      failure: false,
      error: null,
    })
  ),

  on(CategoriesActions.deleteCategory, (state, { id }) => ({
    ...state,
    loading: true,
    loaded: false,
    failure: false,
    error: null,
  })),

  on(CategoriesActions.deleteCategorySuccess, (state, { id }) =>
    adapter.removeOne(id, {
      ...state,
      loading: false,
      loaded: true,
      failure: false,
      error: null,
    })
  ),

  on(CategoriesActions.deleteCategoryFailure, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: true,
    failure: true,
    error,
  })),

  on(CategoriesActions.updateCategoriesSuccess, (state, { updatingCategory }) =>
    adapter.updateOne(updatingCategory, {
      ...state,
      loading: false,
      loaded: true,
      failure: false,
      error: null,
    })
  ),

  on(CategoriesActions.readCategoriesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: true,
    failure: true,
    error: error,
  })),

  on(CategoriesActions.createCategory, (state, { category }) => ({
    ...state,
    loading: true,
    loaded: false,
    failure: false,
    error: null,
  })),

  on(CategoriesActions.createCategorySuccess, (state, { category }) =>
    adapter.addOne(category, { ...state, loading: false, loaded: true, failure: false, error: null })
  )
);
