import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { ReactiveComponentModule } from '@ngrx/component';
import { StoreModule } from '@ngrx/store';

import { CategoriesEffects } from './effects/categories.effects';
import { CategoryContainerComponent } from './containers/category-container/category-container.component';
import { CategoryRoutingModule } from './category-routing.module';
import { CategorySlidePanelConfiguration } from './configuration/category-slide-panel-configuration';

import { BannerModule } from '@modules/shared/banner/banner.module';
import { MaterialModule } from '@modules/shared/material/material.module';
import { SlidePanelModule } from '@modules/shared/slide-panel/slide-panel.module';

import * as fromCategories from './reducers';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { SLIDE_PANEL_CONFIGURATION_TOKEN } from '@modules/shared/slide-panel/token/slide-panel-configuration-token';

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
