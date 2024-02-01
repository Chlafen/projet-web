import { Action, createReducer, on } from '@ngrx/store';
import { matchFixturesActions } from '../actions';
import { Country } from 'src/app/common/types/all-leagues';
import { LeagueOverviewMatch } from 'src/app/common/types/league';

export interface State {
  matches: LeagueOverviewMatch[];
  error: string;
  status: 'Initial' | 'Loading' | 'Success' | 'Error';
}

export const initialState: State = {
  matches: [],
  error: '',
  status: 'Initial',
};

const _reducer = createReducer(
  initialState,
  on(matchFixturesActions.loadLeagueMatchFixturesSuccess, (state, action) => {
    return {
      ...state,
      matches: action.matches,
      status: 'Success' as const,
    };
  }),
  on(matchFixturesActions.loadLeagueMatchFixturesError, (state, action) => {
    return {
      ...state,
      error: action.error,
      status: 'Error' as const,
    };
  }),
  on(matchFixturesActions.loadLeagueMatchFixtures, (state) => {
    return {
      ...state,
      status: 'Loading' as const,
    };
  })
);

export function reducer(state = initialState, action: Action): State {
  return _reducer(state, action);
}
