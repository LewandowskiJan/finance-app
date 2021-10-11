import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { take } from 'rxjs/operators';

import { PlantDiaryContext, PlantDiaryService } from '../../services/plant-diary.service';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.scss'],
})
export class PlantComponent implements OnInit {
  public plantDetails = {
    id: '1',
    name: 'storczyk 1',
    type: 'falenopsis',
    lastWatering: new Date('2021-08-25'),
    img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Veritatis ea suscipit architecto, laboriosam quam sint iste minus totam corporis
    reprehenderit dolore magni error exercitationem sapiente?
    Beatae sed id saepe tempore?`,
    waterings: [new Date('2021-06-14'), new Date('2021-07-05'), new Date('2021-07-25'), new Date('2021-08-05'), new Date('2021-08-25')],
  };

  constructor(private plantDiaryService: PlantDiaryService, private activateRoute: ActivatedRoute) {
    this.plantDiaryService.setContext(PlantDiaryContext.PLANT_DETAILS);
    this.activateRoute.params
      .pipe(take(1))
      .subscribe(({ id }) => (this.plantDetails = { ...this.plantDetails, ...this.plantDiaryService.getPlantDataById(id) }));
  }

  ngOnInit(): void {}
}
