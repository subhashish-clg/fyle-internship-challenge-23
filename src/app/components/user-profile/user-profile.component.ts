import { Component, Input } from '@angular/core';
import { GithubUser } from 'src/app/types/GithubAPIType';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
  @Input() user: GithubUser | null = null;
  @Input() isLoading: boolean | null = null;
}
