import { Component, OnInit } from '@angular/core';

import { PlantDiaryContext, PlantDiaryService } from '@app/plant-diary/services/plant-diary.service';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.scss'],
})
export class PlantListComponent implements OnInit {
  constructor(public plantDiaryService: PlantDiaryService) {
    this.plantDiaryService.setContext(PlantDiaryContext.PLANT_LIST);
  }

  ngOnInit(): void {}
}
