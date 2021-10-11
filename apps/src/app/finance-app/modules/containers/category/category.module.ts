import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ReactiveComponentModule } from '@ngrx/component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { MaterialModule } from '../../../../core/material/material.module';
import { BannerModule } from '../../shared/banner/banner.module';
import { SlidePanelModule } from '../../shared/slide-panel/slide-panel.module';
import { SLIDE_PANEL_CONFIGURATION_TOKEN } from '../../shared/slide-panel/token/slide-panel-configuration-token';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategorySlidePanelConfiguration } from './configuration/category-slide-panel-configuration';
import { CategoryContainerComponent } from './containers/category-container/category-container.component';
import { CategoriesEffects } from './effects/categories.effects';
import * as fromCategories from './reducers';

@NgModule({
  declarations: [CategoryContainerComponent, CategoryListComponent],
  exports: [],
  imports: [
    CategoryRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    StoreModule.forFeature(fromCategories.categoriesModuleFeatureKey, fromCategories.reducers),
    EffectsModule.forFeature([CategoriesEffects]),
    SlidePanelModule,
    ReactiveComponentModule,
    BannerModule,
  ],
  providers: [{ provide: SLIDE_PANEL_CONFIGURATION_TOKEN, useValue: CategorySlidePanelConfiguration }],
})
export class CategoryModule {}
