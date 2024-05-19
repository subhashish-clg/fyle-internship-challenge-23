import { Component, Input } from '@angular/core';
import { GithubRepository } from 'src/app/types/GithubAPIType';

@Component({
  selector: 'app-repo-item',
  templateUrl: './repo-item.component.html',
  styleUrls: ['./repo-item.component.scss'],
})
export class RepoItemComponent {
  @Input() repo!: GithubRepository;
}
