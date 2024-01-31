import { createFeatureSelector, createSelector } from '@ngrx/store';
import { matches } from '../reducers';

export const matchesState = createFeatureSelector<matches.State>('matches');

export const getMatches = createSelector(
  matchesState,
  (state) => state.matches
);

export const getMatchesByLeague = (leagueId: number) =>
  createSelector(matchesState, (state) => {
    const indexOfLeague = state.matches.leagues?.findIndex(
      (league) => league.id === leagueId
    );
    return {
      league: state.matches.leagues?.[indexOfLeague!],
      date: state.matches.date,
    };
  });

export const getMatchesStatus = createSelector(
  matchesState,
  (state) => state.status
);
