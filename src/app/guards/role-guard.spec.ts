import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth';
import { roleGuard } from './role-guard';

describe('roleGuard', () => {

  let authService: any;
  let router: any;

  beforeEach(() => {

    authService = {
      getRole: () => 'admin'
    };

    router = {
      parseUrl: () => ({})
    };

    TestBed.configureTestingModule({
      providers: [
        {
          provide: AuthService,
          useValue: authService
        },
        {
          provide: Router,
          useValue: router
        }
      ]
    });

  });

  it('should allow access for an allowed role', () => {

    const guard = roleGuard(['admin']);

    const result = TestBed.runInInjectionContext(() =>
      guard({} as any, {} as any)
    );

    expect(result).toBe(true);

  });

});