import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { BrowserModule, By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSkeletonLoaderModule } from '@exalif/ngx-skeleton-loader';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { RepoListComponent } from './components/repo-list/repo-list.component';
import { mockRepos, mockUser } from 'src/mocks/mockData';
import { RepoItemComponent } from './components/repo-item/repo-item.component';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SearchBarComponent,
        UserProfileComponent,
        RepoListComponent,
        RepoItemComponent,
      ],
      imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        NgxSkeletonLoaderModule,
      ],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'fyle-frontend-challenge'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('fyle-frontend-challenge');
  });

  it('should display error message', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    app.error = 'Error message';

    fixture.detectChanges();

    const body = fixture.nativeElement.querySelector('main');

    expect(body.textContent).toContain('Error message');
  });

  it('should display the user card correctly', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    app.user = mockUser;

    fixture.detectChanges();

    const usercard = fixture.nativeElement.querySelector('#usercard');
    expect(usercard).toBeTruthy();
  });

  it('should display the user specified number of repositories correctly', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    app.user = mockUser;
    app.repos = mockRepos;
    app.perPage = mockRepos.length;

    fixture.detectChanges();

    const repoCards = fixture.nativeElement.querySelectorAll('app-repo-item');
    expect(repoCards.length).toBe(mockRepos.length);
  });

  it('should display the repo cards correctly', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    app.user = mockUser;
    app.repos = mockRepos.slice(0, 10);

    fixture.detectChanges();

    const repoItems = fixture.nativeElement.querySelectorAll('app-repo-item');

    expect(repoItems.length).toBe(10);
  });
});
