import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

import { Subject, BehaviorSubject } from 'rxjs';

import { sortByKeyAsc } from '@my-lib/util';

export enum PlantDiaryContext {
  PLANT_LIST = 'plant_list',
  PLANT_SEARCH = 'plant_search',
  PLANT_DETAILS = 'plant_details',
}

@Injectable()
export class PlantDiaryService {
  public currentContext: Subject<PlantDiaryContext> = new BehaviorSubject(PlantDiaryContext.PLANT_LIST);
  public plantList$: Subject<any[]> = new BehaviorSubject([]);
  public _plantList = [
    {
      id: '111',
      name: 'Aerangis 1',
      type: 'Aerangis mystacidii',
      lastWatering: new Date('2021-06-05'),
      img: './../../../assets/plant-diary/images/Aerangis/plant.jpg',
    },
    {
      id: '222',
      name: 'Brassavola 2',
      type: 'Brassavola nodosa',
      lastWatering: new Date(),
      img: './../../../assets/plant-diary/images/Brassavola/plant.jpg',
    },
    {
      id: '333',
      name: 'Cambria 1',
      type: 'Cambria',
      lastWatering: new Date('2021-05-05'),
      img: './../../../assets/plant-diary/images/Cambria/plant.jpg',
    },
    {
      id: '4',
      name: 'Catleya 2',
      type: 'Catleya schilleriana',
      lastWatering: new Date('2021-05-05'),
      img: './../../../assets/plant-diary/images/Catleya/plant.jpg',
    },
    {
      id: '5',
      name: 'Catlleya 3',
      type: 'Catlleya Blc. Yen Corona Green Genius',
      lastWatering: new Date('2021-10-15'),
      img: './../../../assets/plant-diary/images/Catlleya/plant.jpg',
    },
    {
      id: '6',
      name: 'Dendrobium 4',
      type: 'Dendrobium Nobile',
      lastWatering: new Date('2021-05-04'),
      img: './../../../assets/plant-diary/images/Dendrobium/plant.jpg',
    },
    {
      id: '7',
      name: 'Phalenopsis 5',
      type: 'Phalenopsis',
      lastWatering: new Date('2021-05-11'),
      img: './../../../assets/plant-diary/images/Phalenopsis/plant.jpg',
    },
  ];

  constructor(private datePipe: DatePipe) {
    this.filterPlants('');
  }

  public setContext(context: PlantDiaryContext): void {
    this.currentContext.next(context);
  }

  public getPlantDataById(id: string): any {
    return this._plantList.find((plant) => plant.id === id);
  }

  public filterPlants(searchValue: string = ''): void {
    const search: string = searchValue.toLocaleLowerCase();
    this.plantList$.next(
      this._plantList
        .filter((plant) => {
          const formattedDate: string = this.datePipe.transform(plant.lastWatering, 'YYYY-MM-dd');
          console.log();
          return (
            plant.id.toLocaleLowerCase().includes(search) ||
            formattedDate.toLocaleLowerCase().includes(search) ||
            plant.name.toLocaleLowerCase().includes(search) ||
            plant.type.toLocaleLowerCase().includes(search)
          );
        })
        .sort(sortByKeyAsc('lastWatering'))
    );
  }
}
