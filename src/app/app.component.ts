import { Component } from '@angular/core';
import { UniversityState } from '@models/university.model';
import { Store } from '@ngrx/store';
import { loadUniversities } from '@states/universities/universities.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private store: Store<UniversityState>,
  ){
    this.store.dispatch(loadUniversities({searchTerm: undefined}))
  }
}
