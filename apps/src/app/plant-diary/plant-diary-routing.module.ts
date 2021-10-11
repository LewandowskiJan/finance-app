import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantComponent } from './components/plant/plant.component';
import { PlantDiaryDashboardComponent } from './container/plant-diary-dashboard/plant-diary-dashboard.component';
import { PlantDiaryComponent } from './container/plant-diary/plant-diary.component';
import { PlantEducationComponent } from './container/plant-education/plant-education.component';
import { PlantGalleryComponent } from './container/plant-gallery/plant-gallery.component';
import { PlantListComponent } from './container/plant-list/plant-list.component';

const routes: Routes = [
  {
    path: '',
    component: PlantDiaryComponent,
    children: [
      {
        path: '',
        component: PlantDiaryDashboardComponent,
        children: [
          { path: '', component: PlantListComponent },
          { path: 'gallery', component: PlantGalleryComponent },
          { path: 'education', component: PlantEducationComponent },
          { path: 'plant/:id', component: PlantComponent },
        ],
      },
    ],
  },
  { path: '**', component: PlantDiaryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantDiaryRoutingModule {}
