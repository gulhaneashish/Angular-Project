import { describe, it, expect, beforeEach, afterEach } from 'vitest';

import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import {
  provideHttpClientTesting,
  HttpTestingController
} from '@angular/common/http/testing';

import { AuthService } from './auth';

describe('AuthService', () => {

  let service: AuthService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(AuthService);

    httpTestingController =
      TestBed.inject(HttpTestingController);

    localStorage.clear();

  });

  afterEach(() => {

    httpTestingController.verify();
    localStorage.clear();

  });

  it('should be created', () => {

    expect(service).toBeTruthy();

  });

  it('should save and get token', () => {

    service.saveToken('abc123');

    expect(service.getToken()).toBe('abc123');

  });

  it('should save and get role', () => {

    service.saveRole('admin');

    expect(service.getRole()).toBe('admin');

  });

  it('should remove token and role on logout', () => {

    service.saveToken('abc123');
    service.saveRole('admin');

    service.logout();

    expect(service.getToken()).toBeNull();
    expect(service.getRole()).toBeNull();

  });

  it('should login successfully', () => {

    const mockResponse = {
      token: 'abc123',
      role: 'admin'
    };

    service.login('test@gmail.com', '123456')
      .subscribe(response => {

        expect(response).toEqual(mockResponse);

      });

    const request =
      httpTestingController.expectOne(
        'http://localhost:3000/login'
      );

    expect(request.request.method).toBe('POST');

    expect(request.request.body).toEqual({
      email: 'test@gmail.com',
      password: '123456'
    });

    request.flush(mockResponse);

  });

});