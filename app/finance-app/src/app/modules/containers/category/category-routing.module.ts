import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { CategoryContainerComponent } from './containers/category-container/category-container.component';

const routes: Routes = [{ path: '', component: CategoryContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
