import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { TestConnectionService } from './test-connection.service';

import {} from 'jasmine';

describe('TestConnectionService', () => {
  let service: TestConnectionService;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TestConnectionService, provideMockStore()],
    });
    store = TestBed.inject(MockStore);
    service = TestBed.inject(TestConnectionService);
    spyOn(store, 'dispatch');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
