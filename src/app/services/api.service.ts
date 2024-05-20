import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from, map, of, switchMap, tap, throwError } from 'rxjs';
import { GithubRepository, GithubUser } from '../types/GithubAPIType';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  cacheName: string = 'github-cache';
  constructor(private httpClient: HttpClient) {}

  getUser(githubUsername: string): Observable<GithubUser> {
    const url = `https://api.github.com/users/${githubUsername}`;

    return from(this.getCachedResponse<GithubUser>(url)).pipe(
      switchMap((cachedResponse) => {
        if (cachedResponse) {
          return of(cachedResponse);
        } else {
          return this.httpClient.get<GithubUser>(url).pipe(
            tap((response) => {
              this.cacheResponse(url, response);
            })
          );
        }
      })
    );
  }

  // implement getRepos method by referring to the documentation. Add proper types for the return type and params
  getRepos(
    githubUsername: string,
    per_page?: number,
    page_number?: number
  ): Observable<GithubRepository[]> {
    const url = `https://api.github.com/users/${githubUsername}/repos?per_page=${per_page}&page=${page_number}`;

    return from(this.getCachedResponse<GithubRepository[]>(url)).pipe(
      switchMap((cachedResponse) => {
        if (cachedResponse) {
          return of(cachedResponse);
        } else {
          return this.httpClient.get<GithubRepository[]>(url).pipe(
            tap((response) => {
              this.cacheResponse(url, response);
            })
          );
        }
      })
    );
  }

  // Retrieve data from cache
  async getCachedResponse<T>(request: string): Promise<T | null> {
    const cache = await caches.open(this.cacheName);
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse.json();
    } else {
      return null;
    }
  }

  test(): Observable<GithubUser> {
    return this.httpClient.get<GithubUser>(
      'https://api.github.com/users/mohammedvaraliya'
    );
  }
  // Store data to the cache
  async cacheResponse(request: string, response: any): Promise<void> {
    const cache = await caches.open(this.cacheName);
    const clonedResponse = new Response(JSON.stringify(response));
    await cache.put(request, clonedResponse);
  }
}
