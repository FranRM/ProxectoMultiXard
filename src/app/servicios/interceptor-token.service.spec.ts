import { TestBed } from '@angular/core/testing';

import { InterceptorTokenService } from './interceptor-token.service';

describe('InterceptorTokenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InterceptorTokenService = TestBed.get(InterceptorTokenService);
    expect(service).toBeTruthy();
  });
});
