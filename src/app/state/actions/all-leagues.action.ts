import { createAction } from '@ngrx/store';
import { Country } from 'src/app/common/types/all-leagues';

export const loadAllLeagues = createAction('[Leagues] Load All By Country');

export const loadAllLeaguesSuccess = createAction(
  '[Leagues] Load All By Country Success',
  (leagues: Country[]) => ({ leagues })
);

export const loadAllLeaguesError = createAction(
  '[Leagues] Load All By Country Error',
  (error: string) => ({ error })
);
