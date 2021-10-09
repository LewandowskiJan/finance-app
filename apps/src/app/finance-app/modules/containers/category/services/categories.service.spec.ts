import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { CategoriesService } from './categories.service';

import {} from 'jasmine';

describe('CategoriesService', () => {
  let service: CategoriesService;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CategoriesService, provideMockStore()],
    });
    store = TestBed.inject(MockStore);
    service = TestBed.inject(CategoriesService);
    spyOn(store, 'dispatch');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
