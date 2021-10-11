import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './core/landing-page/containers/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  {
    path: 'finance-app',
    loadChildren: (): any => import('./finance-app/finance-app.module').then((m) => m.FinanceAppModule),
  },
  {
    path: 'game',
    loadChildren: (): any => import('./game/game.module').then((m) => m.GameModule),
  },
  {
    path: 'plant-diary',
    loadChildren: (): any => import('./plant-diary/plant-diary.module').then((m) => m.PlantDiaryModule),
  },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  // { path: '**', component: LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
