import { TestBed } from '@angular/core/testing';

import { ErroInterceptor } from './erro.interceptor';

describe('ErroInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ErroInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ErroInterceptor = TestBed.inject(ErroInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
