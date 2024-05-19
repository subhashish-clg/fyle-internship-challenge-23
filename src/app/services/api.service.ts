import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, of, switchMap, tap, throwError } from 'rxjs';
import { GithubRepository, GithubUser } from '../types/GithubAPIType';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  cacheName: string = 'github-cache';
  constructor(private httpClient: HttpClient) {}

  getUser(githubUsername: string) {
    return from(
      this.getCachedResponse(`https://api.github.com/users/${githubUsername}`)
    ).pipe(
      switchMap((cachedResponse) => {
        if (cachedResponse) {
          return of(cachedResponse);
        } else {
          return this.httpClient
            .get<GithubUser>(`https://api.github.com/users/${githubUsername}`)
            .pipe(
              tap((response) => {
                console.log('Caching');
                this.cacheResponse(
                  `https://api.github.com/users/${githubUsername}`,
                  response
                );
              })
            );
        }
      })
    );
  }

  // implement getRepos method by referring to the documentation. Add proper types for the return type and params
  getRepos(githubUsername: string, per_page?: number, page_number?: number) {
    const url = `https://api.github.com/users/${githubUsername}/repos?per_page=${per_page}&page=${page_number}`;
    return from(this.getCachedResponse(url)).pipe(
      switchMap((cachedResponse) => {
        if (cachedResponse) {
          return of(cachedResponse);
        } else {
          return this.httpClient.get<GithubRepository[]>(url).pipe(
            tap((response) => {
              console.log('Caching');
              this.cacheResponse(url, response);
            })
          );
        }
      })
    );
  }

  async getCachedResponse(request: string): Promise<any> {
    const cache = await caches.open(this.cacheName);
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse.json();
    } else {
      return null;
    }
  }

  async cacheResponse(request: string, response: any): Promise<void> {
    const cache = await caches.open(this.cacheName);
    const clonedResponse = new Response(JSON.stringify(response));
    await cache.put(request, clonedResponse);
  }
}
