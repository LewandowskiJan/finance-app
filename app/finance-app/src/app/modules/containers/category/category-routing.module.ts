import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { CategoryContainerComponent } from './containers/category-container/category-container.component';
import { CategoryListComponent } from './components/category-list/category-list.component';

const routes: Routes = [{ path: '', component: CategoryContainerComponent, children: [{ path: '', component: CategoryListComponent }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
