import { Component, OnInit } from '@angular/core';

import { PlantDiaryContext, PlantDiaryService } from '@app/plant-diary/services/plant-diary.service';

@Component({
  selector: 'app-plant-gallery',
  templateUrl: './plant-gallery.component.html',
  styleUrls: ['./plant-gallery.component.scss'],
})
export class PlantGalleryComponent implements OnInit {
  constructor(public plantDiaryService: PlantDiaryService) {
    this.plantDiaryService.setContext(PlantDiaryContext.PLANT_DETAILS);
  }

  ngOnInit(): void {}
}
