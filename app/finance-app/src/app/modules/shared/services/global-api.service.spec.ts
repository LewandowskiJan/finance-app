import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { ApiService, ApiServiceMock } from '@my-lib/util';

import { GlobalApiService } from './global-api.service';

import 'jest';

describe('GlobalApiService', () => {
  let service: GlobalApiService;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [provideMockStore(), { provide: ApiService, useClass: ApiServiceMock }],
    });
    service = TestBed.inject(GlobalApiService);
    store = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
