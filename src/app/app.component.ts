import { Component, OnInit, Renderer2 } from '@angular/core';
import { ApiService } from './services/api.service';
import { FormGroup } from '@angular/forms';
import { GithubRepository, GithubUser } from './types/GithubAPIType';
import { HttpErrorResponse } from '@angular/common/http';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string = 'fyle-frontend-challenge';

  // Pagination
  currentPage: number = 1;
  perPage: number = 10;

  // States
  user: GithubUser | null = null;
  repos: GithubRepository[] | null = null;
  loading: {
    user: boolean;
    repos: boolean;
  } = {
    user: false,
    repos: false,
  };
  error: string | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  // Handles the form submit of the search bar component. When the user click submits fetch the user and repos data from the API.
  onSearch(form: FormGroup): void {
    this.currentPage = 1;
    this.perPage = 10;

    this.resetError();

    // Empty the states from previous search
    this.user = null;
    this.repos = null;

    if (!form.valid) return alert('Username cannot be empty.');
    this.loading.user = true;
    this.loading.repos = true;

    // Search the user (returns from API or cache)
    this.apiService
      .getUser(form.value.username)
      .pipe(
        switchMap((user) => {
          return this.apiService
            .getRepos(user.login, this.perPage, this.currentPage)
            .pipe(
              map((repos) => {
                return {
                  user,
                  repos,
                };
              })
            );
        })
      )
      .subscribe({
        next: ({ user, repos }) => {
          this.user = user;
          this.repos = repos;
          this.error = null;
        },
        error: (e: HttpErrorResponse) => this.handleError(e),
        complete: () => {
          this.loading.user = false;
          this.loading.repos = false;
        },
      });

    form.reset();
    if (document.activeElement) (document.activeElement as HTMLElement).blur();
    return document.getElementById('repos')?.scrollIntoView(); // Scroll back to top.
  }

  // Change the number of items in view.
  changeItemsNumber(event: any) {
    this.resetError();
    this.currentPage = 1;
    this.perPage = event.target.value as number;

    this.loading.repos = true;

    this.apiService
      .getRepos((this.user as GithubUser).login, this.perPage, this.currentPage)
      .subscribe({
        next: (repos) => {
          this.repos = repos;
          this.error = null;
        },
        error: (e: HttpErrorResponse) => this.handleError(e),
        complete: () => (this.loading.repos = false),
      });

    document.getElementById('repos')?.scrollIntoView(); // Scroll to the top
  }

  // Handle the pagination page change.
  pageChange(event: number): void {
    this.resetError();

    this.currentPage = event; // Change the current page.
    this.loading.repos = true;

    this.apiService
      .getRepos((this.user as GithubUser).login, this.perPage, this.currentPage)
      .subscribe({
        next: (repos) => {
          this.repos = repos;
          this.error = null;
        },
        error: (e: HttpErrorResponse) => this.handleError(e),
        complete: () => (this.loading.repos = false),
      });

    return document.getElementById('repos')?.scrollIntoView(); // Scroll back to top.
  }

  // Handles the HTTP error, this is done here because to display message on the UI.
  handleError(error: HttpErrorResponse): void {
    this.user = null;
    this.repos = null;

    this.loading.user = false;
    this.loading.repos = false;

    if (error.status === 403)
      this.error = "Looks like you've hit the rate limit for GitHub API. :(";
    else if (error.status === 404)
      this.error = 'The user you are searching for does not exists.';
    else
      this.error =
        'Oops something bad just happend, please try again or after some time.';
  }

  //Reset the error variable
  resetError(): void {
    this.error = null;
  }
}
