import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { rolGuard } from './rolCompras.guard';

describe('rolGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => rolGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
