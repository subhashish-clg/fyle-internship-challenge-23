import { Component, OnInit, Renderer2 } from '@angular/core';
import { ApiService } from './services/api.service';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormGroup } from '@angular/forms';
import { GithubRepository, GithubUser } from './types/GithubAPIType';
import { HttpErrorResponse } from '@angular/common/http';

type StateType = {
  user: GithubUser;
  repos: GithubRepository[];
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  currentPage: number = 1;
  perPage: number = 10;

  user: GithubUser | null = null;
  repos: GithubRepository[] | null = null;
  error: string | null = null;

  constructor(private apiService: ApiService, private renderer: Renderer2) {}

  ngOnInit() {}

  changeItemsInView(event: any) {
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

    document.getElementById('repos')?.scrollIntoView();
  }

  pageChange(event: number) {
    this.currentPage = event;

    console.log(this.currentPage);
    this.apiService
      .getRepos((this.user as GithubUser).login, this.perPage, this.currentPage)
      .subscribe({
        next: (repos) => {
          this.repos = repos;
          this.error = null;
        },
        error: (e: HttpErrorResponse) => this.handleError(e),
      });

    document.getElementById('repos')?.scrollIntoView();
  }

  handleError(error: HttpErrorResponse) {
    this.user = null;
    this.repos = null;

    if (error.status === 403)
      this.error = "Looks like you've hit the rate limit for GitHub API. :(";
  }

  onSubmit(form: FormGroup): void {
    if (!form.valid) return alert('Username cannot be empty.');

    console.log('Getting the data from github');
    // Search the user
    this.apiService.getUser(form.value.username).subscribe({
      next: (user) => {
        this.user = user;
        this.error = null;
      },
      error: (e: HttpErrorResponse) => this.handleError(e),
    });

    // Get the repos

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
  }
}
