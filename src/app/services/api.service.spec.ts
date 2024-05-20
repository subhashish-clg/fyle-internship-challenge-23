import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ApiService } from './api.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { mockRepos, mockUser } from 'src/mocks/mockData';
import { map } from 'rxjs';

describe('ApiService', () => {
  let service: ApiService;
  let httpController: HttpTestingController;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
      teardown: { destroyAfterEach: false },
    });
    service = TestBed.inject(ApiService);
    httpController = TestBed.inject(HttpTestingController);

    // Wait for the asynchronous setup to complete
    await TestBed.compileComponents();

    // Mock the caches object with correct typings
    const mockCache = jasmine.createSpyObj('Cache', ['match', 'put']);
    mockCache.match.and.returnValue(Promise.resolve(null));
    mockCache.put.and.returnValue(Promise.resolve());

    const mockCaches = jasmine.createSpyObj('CacheStorage', ['open']);
    mockCaches.open.and.returnValue(Promise.resolve(mockCache));

    Object.defineProperty(window, 'caches', {
      value: mockCaches,
    });
  });

  afterEach(() => {
    httpController.verify(); // Verify that there are no outstanding requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('`getUser()', () => {
    it('shoud return correct user data', fakeAsync(() => {
      spyOn(service, 'getCachedResponse').and.returnValue(
        Promise.resolve(null)
      );

      service.getUser('mohammedvaraliya').subscribe((user) => {
        expect(user).toBe(mockUser);
      });

      // Simulate the passage of time until all pending asynchronous activities complete
      tick();

      // Expect an HTTP request to be made to the specified URL
      const req = httpController.expectOne(
        'https://api.github.com/users/mohammedvaraliya'
      );

      // Respond with mockUser
      req.flush(mockUser);
    }));

    it('shoud return not return data if its not available', fakeAsync(() => {
      spyOn(service, 'getCachedResponse').and.returnValue(
        Promise.resolve(null)
      );

      service.getUser('mohammedvaraliya').subscribe({
        next: () => fail('Got user.'),
        error: (error: HttpErrorResponse) => {
          expect(error.status).toBe(403);
        },
      });

      tick();

      // Expect an HTTP request to be made to the specified URL
      const req = httpController.expectOne(
        'https://api.github.com/users/mohammedvaraliya'
      );

      // Respond with mockUser
      req.flush('Forbidden', { status: 403, statusText: 'Forbidden' });
    }));
  });

  describe('`getRepos()`', () => {
    it('shoud return by default specified number of repos', fakeAsync(() => {
      spyOn(service, 'getCachedResponse').and.returnValue(
        Promise.resolve(null)
      );

      service.getRepos('mohammedvaraliya', 10, 1).subscribe((repos) => {
        expect(repos.length).toBe(10);
      });

      // Simulate the passage of time until all pending asynchronous activities complete
      tick();

      // Expect an HTTP request to be made to the specified URL
      const req = httpController.expectOne(
        'https://api.github.com/users/mohammedvaraliya/repos?per_page=10&page=1'
      );

      // Respond with mockUser
      req.flush(mockRepos);
    }));
  });
});
