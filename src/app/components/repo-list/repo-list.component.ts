import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GithubRepository } from 'src/app/types/GithubAPIType';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss'],
})
export class RepoListComponent {
  @Output() pageChange = new EventEmitter();
  @Output() changeIteminView = new EventEmitter();

  @Input() repos!: GithubRepository[];
  @Input() currentPage: number = 1;
  @Input() itemsPerPage: number = 10;
  @Input() totalItemCount: number = 1;
}
