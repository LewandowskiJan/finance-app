import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TransferFormContainerComponent } from './containers/transfer-form-container/transfer-form-container.component';
import { TransfersContainerComponent } from './containers/transfers-container/transfers-container.component';
import { TransfersComponent } from './containers/transfers/transfers.component';

const routes: Routes = [
  {
    path: '',
    component: TransfersContainerComponent,
    children: [
      { path: 'add', component: TransferFormContainerComponent, data: { animationState: 'One' } },
      { path: 'list', component: TransfersComponent, data: { animationState: 'Two' } },
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
