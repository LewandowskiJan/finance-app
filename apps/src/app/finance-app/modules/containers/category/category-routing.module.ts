import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryContainerComponent } from './containers/category-container/category-container.component';

const routes: Routes = [{ path: '', component: CategoryContainerComponent, children: [{ path: '', component: CategoryListComponent }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
