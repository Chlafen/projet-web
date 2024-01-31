import { createAction } from '@ngrx/store';
import { Matches } from 'src/app/common/types/matches';
import { GetMatchesQuery } from 'src/app/services/matches.service';

export const loadMatches = createAction(
  '[Matches] Load Matches',
  (getMatchesQuery: GetMatchesQuery) => ({ getMatchesQuery })
);

export const loadMatchesSuccess = createAction(
  '[Matches] Load Matches Success',
  (matches: Matches) => ({ matches })
);

export const loadMatchesError = createAction(
  '[Matches] Load Matches Error',
  (error: string) => ({ error })
);
