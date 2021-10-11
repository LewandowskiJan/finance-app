import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';

import { PlantDiaryService } from './plant-diary.service';

@NgModule({
  declarations: [],
  providers: [DatePipe, PlantDiaryService],
  imports: [CommonModule],
})
export class PlantDiaryServiceModule {}
