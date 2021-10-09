import { TestBed } from '@angular/core/testing';

import { ApiUtilsService } from './api-utils.service';

import {} from 'jasmine';

describe('ApiUtilsService', () => {
  let service: ApiUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
