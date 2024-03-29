import { Action, combineReducers, createFeatureSelector, createSelector } from '@ngrx/store';

import { Category } from '../model/Category';

import * as fromCategories from './categories.reducer';

export const categoriesModuleFeatureKey = 'categoriesModule';

export interface CategoryState {
  [fromCategories.categoriesFeatureKey]: fromCategories.State;
}

export interface State {
  [categoriesModuleFeatureKey]: CategoryState;
}

export function reducers(state: CategoryState | undefined, action: Action): CategoryState {
  return combineReducers({
    [fromCategories.categoriesFeatureKey]: fromCategories.reducer,
  })(state, action);
}

export const selectCategoryState = createFeatureSelector<State, CategoryState>(categoriesModuleFeatureKey);

export const selectCategoriesEntitiesState = createSelector(selectCategoryState, (state) => state.categoriesList);

export const {
  selectIds: selectCategoriesIds,
  selectEntities: selectCategoriesEntities,
  selectAll: selectAllCategories,
  selectTotal: selectTotalCategories,
} = fromCategories.adapter.getSelectors(selectCategoriesEntitiesState);

export const selectCategoriesCollection = createSelector(selectCategoriesEntities, selectCategoriesIds, (entities, ids: string[]) => {
  return ids.map((id) => entities[id]).filter((category): category is Category => category !== null);
});

export const selectError = createSelector(
  selectCategoryState,
  (state) => state,
  (state: CategoryState) => {
    return state[fromCategories.categoriesFeatureKey].error;
  }
);
