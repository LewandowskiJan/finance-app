import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AccountContainerComponent } from './containers/account-container/account-container.component';
import { AccountEditComponent } from './components/account-edit/account-edit.component';
import { AccountsComponent } from './components/accounts/accounts.component';

const routes: Routes = [
  {
    path: '',
    component: AccountContainerComponent,
    children: [
      { path: '', component: AccountsComponent },
      { path: 'edit/:id', component: AccountEditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
