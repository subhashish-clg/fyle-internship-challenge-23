import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  searchForm!: FormGroup;
  @Output() onSubmit = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      username: ['', Validators.required],
    });
  }
}
