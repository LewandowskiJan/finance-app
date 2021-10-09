import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomePageComponent } from './modules/core/layout/components/welcome-page/welcome-page.component';
import { MainComponent } from './modules/core/layout/containers/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: WelcomePageComponent,
      },
      {
        path: 'test-connection',
        loadChildren: (): any => import('./modules/containers/test-page/test-page.module').then((m) => m.TestPageModule),
      },
      {
        path: 'category',
        loadChildren: (): any => import('./modules/containers/category/category.module').then((m) => m.CategoryModule),
      },
      {
        path: 'account',
        loadChildren: (): any => import('./modules/containers/account/account.module').then((m) => m.AccountModule),
      },
      {
        path: 'transfer',
        loadChildren: (): any => import('./modules/containers/transfer/transfer.module').then((m) => m.TransferModule),
      },
    ],
  },
  { path: '**', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinanceAppRoutingModule {}
