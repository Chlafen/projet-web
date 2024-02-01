import { createAction } from '@ngrx/store';
import { LeagueOverviewMatch } from 'src/app/common/types/league';
import { Matches } from 'src/app/common/types/matches';
import { GetLeagueMatchFixtures, GetMatchesQuery } from 'src/app/services/matches.service';

export const loadLeagueMatchFixtures = createAction(
  '[Matches] Load League Match Fixtures',
  (getMatchesQuery: GetLeagueMatchFixtures) => getMatchesQuery
);

export const loadLeagueMatchFixturesSuccess = createAction(
  '[Matches] Load League Match Fixtures Success',
  (matches: LeagueOverviewMatch[]) => ({ matches })
);

export const loadLeagueMatchFixturesError = createAction(
  '[Matches] Load League Match Fixtures Error',
  (error: string) => ({ error })
);
