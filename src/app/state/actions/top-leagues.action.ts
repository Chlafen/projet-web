import { createAction } from '@ngrx/store';
import { League } from 'src/app/common/types/all-leagues';

export const loadTopLeagues = createAction('[Leagues] Load Popular');

export const loadTopLeaguesSuccess = createAction(
  '[Leagues] Load Popular Success',
  (popular: League[]) => ({ popular })
);

export const loadTopLeaguesError = createAction(
  '[Leagues] Load Popular Error',
  (error: string) => ({ error })
);
