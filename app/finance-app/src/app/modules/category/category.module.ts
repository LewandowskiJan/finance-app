import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CategoriesEffects } from './effects/categories.effects';
import { CategoriesService } from './services/categories.service';
import { CategoryContainerComponent } from './containers/category-container/category-container.component';
import { CategoryRoutingModule } from './category-routing.module';
import { MaterialModule } from './../../external-modules/material/material.module';

import * as fromCategories from './reducers';

@NgModule({
  declarations: [CategoryContainerComponent],
  exports: [],
  imports: [
    RouterModule,
    CategoryRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    StoreModule.forFeature(fromCategories.categoriesModuleFeatureKey, fromCategories.reducers),
    EffectsModule.forFeature([CategoriesEffects]),
  ],
  providers: [CategoriesService],
})
export class CategoryModule {}
