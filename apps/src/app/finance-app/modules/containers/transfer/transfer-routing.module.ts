import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TransfersListComponent } from './components/transfers-list/transfers-list.component';

const routes: Routes = [
  {
    path: '',
    component: TransfersListComponent,
    children: [{ path: '', component: TransfersListComponent, data: { animationState: 'One' } }],
  },
  {
    path: '**',

    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferRoutingModule {}
