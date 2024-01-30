import { createFeatureSelector, createSelector } from '@ngrx/store';
import { topLeagues } from '../reducers';

export const topLeaguesState = createFeatureSelector<topLeagues.State>('popular');

export const getTopLeagues = createSelector(topLeaguesState, (state) => state.popular);

export const getTopLeaguesStatus = createSelector(
  topLeaguesState,
  (state) => state.status
);
