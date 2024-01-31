import { createFeatureSelector, createSelector } from '@ngrx/store';
import { search } from '../reducers';

export const searchState =
  createFeatureSelector<search.State>('search');

export const getSearch = createSelector(
  searchState,
  (state) => state.search
);

export const getsearchStatus = createSelector(
  searchState,
  (state) => state.status
);


