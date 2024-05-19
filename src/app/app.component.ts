import { Component, OnInit, Renderer2 } from '@angular/core';
import { ApiService } from './services/api.service';
import { FormGroup } from '@angular/forms';
import { GithubRepository, GithubUser } from './types/GithubAPIType';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // Pagination
  currentPage: number = 1;
  perPage: number = 10;

  // States
  user: GithubUser | null = null;
  repos: GithubRepository[] | null = null;
  loading: {
    user: boolean | null;
    repos: boolean | null;
  } = {
    user: null,
    repos: null,
  };
  error: string | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  // Handles the form submit of the search bar component. When the user click submits fetch the user and repos data from the API.
  onSearch(form: FormGroup): void {
    // Empty the states from previous search
    this.user = null;
    this.repos = null;

    if (!form.valid) return alert('Username cannot be empty.');
    this.loading.user = true;

    // Search the user (returns from API or cache)
    this.apiService
      .getUser(form.value.username)
      .pipe()
      .subscribe({
        next: (user) => {
          this.user = user;
          this.error = null;
        },
        error: (e: HttpErrorResponse) => this.handleError(e),
        complete: () => (this.loading.user = null),
      });

    if (this.error) return;

    // Get the repos if and only if the user details fetch is successfull.
    this.apiService
      .getRepos(form.value.username, this.perPage, this.currentPage)
      .subscribe({
        next: (repos) => {
          this.repos = repos;
          this.error = null;
        },
        error: (e: HttpErrorResponse) => this.handleError(e),
      });

    form.reset();
    return document.getElementById('repos')?.scrollIntoView(); // Scroll back to top.
  }

  // Change the number of items in view.
  changeItemsNumber(event: any) {
    console.log(event.target.value as number);
    this.currentPage = 1;
    this.perPage = event.target.value as number;

    this.apiService
      .getRepos((this.user as GithubUser).login, this.perPage, this.currentPage)
      .subscribe({
        next: (repos) => {
          this.repos = repos;
          this.error = null;
        },
        error: (e: HttpErrorResponse) => this.handleError(e),
      });

    document.getElementById('repos')?.scrollIntoView(); // Scroll to the top
  }

  // Handle the pagination page change.
  pageChange(event: number): void {
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
        complete: () => (this.loading.repos = null),
      });

    return document.getElementById('repos')?.scrollIntoView(); // Scroll back to top.
  }

  // Handles the HTTP error, this is done here because to display message on the UI.
  handleError(error: HttpErrorResponse): void {
    console.log(error);
    this.user = null;
    this.repos = null;

    this.loading.user = null;
    this.loading.repos = null;

    if (error.status === 403)
      this.error = "Looks like you've hit the rate limit for GitHub API. :(";
    else if (error.status === 404)
      this.error = 'The user you are searching for does not exists.';
    else
      this.error =
        'Oops something bad just happend, please try again or after some time.';
  }
}
