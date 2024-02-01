import { createAction } from '@ngrx/store';
import { HomeFilterOption } from 'src/app/common/types/league';
import { Matches } from 'src/app/common/types/matches';
import { GetMatchesQuery } from 'src/app/services/matches.service';

export const loadMatches = createAction(
  '[Matches] Load Matches',
  (getMatchesQuery: GetMatchesQuery) => ({ getMatchesQuery })
);

export const loadMatchesSuccess = createAction(
  '[Matches] Load Matches Success',
  (matches: Matches, date: string) => ({ matches, date })
);

export const loadMatchesError = createAction(
  '[Matches] Load Matches Error',
  (error: string) => ({ error })
);

export const loadMatchesNextDay = createAction(
  '[Matches] Load Matches Next Day',
  (currentDay: string) => ({ currentDay })
);

export const loadMatchesNextDaySuccess = createAction(
  '[Matches] Load Matches Next Day Success',
  (matches: Matches, date: string) => ({ matches, date })
);

export const loadMatchesPrevDay = createAction(
  '[Matches] Load Matches Prev Day',
  (currentDay: string) => ({ currentDay })
);

export const loadMatchesPrevDaySuccess = createAction(
  '[Matches] Load Matches Prev Day Success',
  (matches: Matches, date: string) => ({ matches, date })
);

export const filterMatches = createAction(
  '[Matches] Filter Matches',
  (filters: Set<HomeFilterOption>, searchQuery: string) => ({
    filters,
    searchQuery,
  })
);
