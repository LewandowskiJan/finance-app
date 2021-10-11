import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../core/material/material.module';

import { PlantDetailsComponent } from './components/plant-details/plant-details.component';
import { PlantComponent } from './components/plant/plant.component';
import { PlantDiaryDashboardComponent } from './container/plant-diary-dashboard/plant-diary-dashboard.component';
import { PlantDiaryComponent } from './container/plant-diary/plant-diary.component';
import { PlantEducationComponent } from './container/plant-education/plant-education.component';
import { PlantGalleryComponent } from './container/plant-gallery/plant-gallery.component';
import { PlantListComponent } from './container/plant-list/plant-list.component';
import { PlantDiaryRoutingModule } from './plant-diary-routing.module';
import { PlantDiaryServiceModule } from './services/plant-diary-service.module';

@NgModule({
  declarations: [
    PlantDiaryComponent,
    PlantDiaryDashboardComponent,
    PlantListComponent,
    PlantComponent,
    PlantDetailsComponent,
    PlantGalleryComponent,
    PlantEducationComponent,
  ],
  imports: [CommonModule, PlantDiaryRoutingModule, MaterialModule, FormsModule, PlantDiaryServiceModule],
  bootstrap: [],
})
export class PlantDiaryModule {}
