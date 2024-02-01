import { createFeatureSelector, createSelector } from '@ngrx/store';
import { matches } from '../reducers';

export const matchesState = createFeatureSelector<matches.State>('matches');

export const getMatches = createSelector(
  matchesState,
  (state) => state.matches
);

export const getFilteredMatches = createSelector(
  matchesState,
  (state) => state.filteredMatches
);

export const getByTimeMatches = createSelector(
  matchesState,
  (state) => state.byTimeMatches
);

export const getMatchesStatus = createSelector(
  matchesState,
  (state) => state.status
);

export const getMatchesDate = createSelector(
  matchesState,
  (state) => state.date
);
