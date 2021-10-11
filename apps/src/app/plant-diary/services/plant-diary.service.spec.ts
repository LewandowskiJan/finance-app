import { TestBed } from '@angular/core/testing';

import { PlantDiaryService } from './plant-diary.service';

describe('PlantDiaryService', () => {
  let service: PlantDiaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlantDiaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
