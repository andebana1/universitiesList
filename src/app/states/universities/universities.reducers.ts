import { University, UniversityState } from '@models/university.model';
import { createReducer, on } from '@ngrx/store';
import { 
  loadUniversitiesSuccess,
  searchAction,
  searchBarSearchAction
} from './universities.actions';

export const initialState: UniversityState = {
  universityList: [],
  searchTerm: '',
  searching: false,
}

export const universityReducer = createReducer(
  initialState,
  on(loadUniversitiesSuccess,  (state, { universities }) => ({ ...state, universityList: universities })),
  on(searchAction, (state, { isSearching }) => ({ ...state, searching: isSearching })),
  on(searchBarSearchAction, (state, { searchTerm }) => ({ ...state, searchTerm })),
);
