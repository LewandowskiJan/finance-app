import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { TransferEditComponent } from './components/transfer-edit/transfer-edit.component';
import { TransfersComponent } from './components/transfers/transfers.component';
import { TransfersContainerComponent } from './containers/transfers-container/transfers-container.component';

const routes: Routes = [
  {
    path: '',
    component: TransfersContainerComponent,
    children: [
      { path: '', component: TransfersComponent },
      { path: 'edit/:id', component: TransferEditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferRoutingModule {}
