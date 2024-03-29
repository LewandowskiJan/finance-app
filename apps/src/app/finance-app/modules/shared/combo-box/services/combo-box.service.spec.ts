import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { ComboBoxService } from './combo-box.service';

import {} from 'jasmine';

describe('ComboBoxService', () => {
  let service: ComboBoxService;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule], providers: [ComboBoxService, provideMockStore()] });
    store = TestBed.inject(MockStore);
    service = TestBed.inject(ComboBoxService);
    spyOn(store, 'dispatch');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
