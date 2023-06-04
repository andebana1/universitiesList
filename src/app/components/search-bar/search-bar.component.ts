import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadUniversities, searchBarSearchAction } from '@states/universities/universities.actions';
import { selectUniversitiesLoading } from '@states/universities/universities.selectors';
import { Observable, debounceTime, fromEvent, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, AfterViewInit {

  @ViewChild('inputSearch', {static: false}) inputSearch!: ElementRef<HTMLInputElement>;

  public searchText?: string;

  searching$: Observable<boolean> = this.store.select(selectUniversitiesLoading);

  constructor(
    private store: Store
  ) { }

  ngAfterViewInit(): void {
    const search$ = fromEvent(this.inputSearch.nativeElement, 'input')
      .pipe(
        debounceTime(500),
        tap(_ => {
          this.store.dispatch(searchBarSearchAction({searchTerm: this.searchText}));
          this.store.dispatch(loadUniversities({searchTerm: this.searchText}));
        }),
      );

    search$.subscribe();
  }

  ngOnInit(): void {
   
  }

}
