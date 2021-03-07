import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { WelcomePageComponent } from './core/layout/components/welcome-page/welcome-page.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  {
    path: 'test-connection',
    loadChildren: () => import('./external-modules/test-page/test-page.module').then((m) => m.TestPageModule),
  },
  {
    path: 'category',
    loadChildren: () => import('./modules/category/category.module').then((m) => m.CategoryModule),
  },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: WelcomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
