import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { TransferFormContainerComponent } from './containers/transfer-form-container/transfer-form-container.component';
import { TransfersComponent } from './containers/transfers/transfers.component';
import { TransfersContainerComponent } from './containers/transfers-container/transfers-container.component';

const routes: Routes = [
  {
    path: '',
    component: TransfersContainerComponent,
    children: [
      { path: 'add', component: TransferFormContainerComponent, data: { animationState: 'One' } },
      { path: 'added-list', component: TransfersComponent, data: { animationState: 'Two' } },
    ],
  },
  {
    path: '**',
    redirectTo: 'add',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferRoutingModule {}
