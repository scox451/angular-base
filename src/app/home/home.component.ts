import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { switchMap } from 'rxjs';

import { ImdbAPIService } from '@services';
import { SearchData, SearchResult } from '@models';

@Component({
  selector: 'app-home',
  templateUrl: `./home.component.html`,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  searchForm: FormGroup;
  firstNameField: FormControl = new FormControl();
  lastNameField: FormControl;

  results: SearchResult[];

  constructor(private fb: FormBuilder, private imdbApiService: ImdbAPIService) {}

  ngOnInit(): void {
    this.initControls();
    this.firstNameField.valueChanges
      .pipe(
        switchMap((filterText) => {
          if (!filterText) return;

          return this.imdbApiService.search(filterText);
        })
      )
      .subscribe((data:SearchData) => {
        this.results = data.results;
      });

    // this.imdbService.search("shawshank").subscribe(data=>{
    //   this.results = data.results;
    // });
  }

  initControls() {
    this.searchForm = this.fb.group({
      firstNameField: this.firstNameField,
      lastNameField: this.lastNameField,
    });
  }

  clear() {}

  search() {}
}
