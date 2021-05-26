import { TestBed } from '@angular/core/testing';

import { AuthenticationInterceptor } from './authentication-interceptor.service';

describe('AuthenticationInterceptor', () => {
  let service: AuthenticationInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationInterceptor],
    });
    service = TestBed.inject(AuthenticationInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
