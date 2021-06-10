import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { AccountsService } from './accounts.service';

import {} from 'jasmine';

describe('AccountsService', () => {
  let service: AccountsService;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AccountsService, provideMockStore()],
    });
    store = TestBed.inject(MockStore);
    service = TestBed.inject(AccountsService);
    spyOn(store, 'dispatch');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
