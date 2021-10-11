import { Component, OnInit } from '@angular/core';

import { PlantDiaryContext, PlantDiaryService } from '@app/plant-diary/services/plant-diary.service';

@Component({
  selector: 'app-plant-education',
  templateUrl: './plant-education.component.html',
  styleUrls: ['./plant-education.component.scss'],
})
export class PlantEducationComponent implements OnInit {
  constructor(private plantDiaryService: PlantDiaryService) {
    this.plantDiaryService.setContext(PlantDiaryContext.PLANT_DETAILS);
  }

  ngOnInit(): void {}
}
