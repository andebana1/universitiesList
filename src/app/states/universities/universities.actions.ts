import { University } from '@models/university.model';
import { createAction, props } from '@ngrx/store';

export const loadUniversities = createAction('[Universities List] Load Items', props<{ searchTerm?: string }>());
export const loadUniversitiesSuccess = createAction('[Universities List] Load Items Success', props<{ universities: Array<University> }>());

export const searchAction = createAction('[Universities List] Start Searching All Universities Finished', props<{ isSearching: boolean }>());
export const searchBarSearchAction = createAction('[Universities List] Input Search Values', props<{ searchTerm?: string }>());