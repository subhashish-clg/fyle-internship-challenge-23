import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { RepoListComponent } from './components/repo-list/repo-list.component';
import { RepoItemComponent } from './components/repo-item/repo-item.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    UserProfileComponent,
    RepoListComponent,
    RepoItemComponent,
  ],
  imports: [BrowserModule, HttpClientModule, NgxPaginationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
