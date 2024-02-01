import { createFeatureSelector, createSelector } from '@ngrx/store';
import { matchLeagueFixtures } from '../reducers';

export const matchFixturesState = createFeatureSelector<matchLeagueFixtures.State>('matchFixtures');

export const getMatchFixtures = createSelector(matchFixturesState, (state) => state.matches);

export const getMatchFixturesStatus = createSelector(
  matchFixturesState,
  (state) => state.status
);
