import { University, UniversityState } from "@models/university.model";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectUniversities = createFeatureSelector<UniversityState>('universities');

export const selectUniversitiesList = createSelector(
  selectUniversities,
  (state) => state.universityList
);

export const selectUniversitiesLoading = createSelector(
  selectUniversities,
  (state) => state.searching
);

export const selectUniversitySearchTerm = createSelector(
  selectUniversities,
  (state) => state.searchTerm
);
