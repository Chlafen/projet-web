import { createAction } from '@ngrx/store';
import { Country } from 'src/app/common/types/all-leagues';

export const loadAllLeagues = createAction('[Leagues] Load All By Country');

export const loadAllLeaguesSuccess = createAction(
  '[Leagues] Load All By Country Success',
  (leagues: Country[]) => ({ leagues, filtered: leagues })
);

export const loadAllLeaguesError = createAction(
  '[Leagues] Load All By Country Error',
  (error: string) => ({ error })
);

export const searchAllLeagues = createAction(
  '[Leagues] Search All',
  (search: string) => ({ search })
);
