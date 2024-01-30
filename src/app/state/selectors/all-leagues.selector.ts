import { createFeatureSelector, createSelector } from '@ngrx/store';
import { allLeagues } from '../reducers';

export const allLeaguesState = createFeatureSelector<allLeagues.State>('leagues');

export const getAllLeagues = createSelector(allLeaguesState, (state) => state.leagues);
export const getAllLeaguesFiltered = createSelector(allLeaguesState, (state) => state.filtered);

export const getAllLeaguesStatus = createSelector(
  allLeaguesState,
  (state) => state.status
);
