import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UniversitiesService } from "@services/universities/universities.service";
import  * as UniversityActions  from "./universities.actions";
import { mergeMap, map, tap, switchMap, startWith, endWith } from "rxjs";

@Injectable()
export class UniversityEffect {
  constructor(
    private actions$: Actions,
    private universitiesService: UniversitiesService
  ){}

  loadUniversities$ = createEffect(() => this.actions$.pipe(
    ofType(UniversityActions.loadUniversities),
    mergeMap(
      (data) => this.universitiesService.getUniversityList(data.searchTerm)
        .pipe(
          map(data => UniversityActions.loadUniversitiesSuccess({ universities: data })),
          startWith(UniversityActions.searchAction({isSearching: true})),
          endWith((UniversityActions.searchAction({isSearching: false}))
        )
    )
  )));
}