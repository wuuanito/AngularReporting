import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { comprasGuardGuard } from './administracion-guard.guard';

describe('comprasGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => comprasGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
