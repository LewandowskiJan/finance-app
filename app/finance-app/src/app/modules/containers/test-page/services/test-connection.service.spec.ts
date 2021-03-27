import { TestBed } from '@angular/core/testing';

import { TestConnectionService } from './test-connection.service';

describe('TestConnectionService', () => {
  let service: TestConnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestConnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
