import { Component, OnInit } from '@angular/core';

import { PlantDiaryContext, PlantDiaryService } from '@app/plant-diary/services/plant-diary.service';

@Component({
  selector: 'app-plant-diary-dashboard',
  templateUrl: './plant-diary-dashboard.component.html',
  styleUrls: ['./plant-diary-dashboard.component.scss'],
})
export class PlantDiaryDashboardComponent implements OnInit {
  public appName: string = 'Plant Diary';
  public searchValue: string = '';
  public isSearchBarVisible: boolean = false;
  public plantDiaryContext: typeof PlantDiaryContext = PlantDiaryContext;

  constructor(public plantDiaryService: PlantDiaryService) {}

  ngOnInit(): void {}

  public toggleSearchBar(): void {
    this.isSearchBarVisible
      ? this.plantDiaryService.setContext(PlantDiaryContext.PLANT_LIST)
      : this.plantDiaryService.setContext(PlantDiaryContext.PLANT_SEARCH);

    this.isSearchBarVisible = !this.isSearchBarVisible;
  }

  public searchPlant(value: string): void {
    this.plantDiaryService.filterPlants(value);
  }
}
