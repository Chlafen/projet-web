import { Action, createReducer, on } from '@ngrx/store';
import { allLeaguesActions } from '../actions';
import { Country } from 'src/app/common/types/all-leagues';

export interface State {
  leagues: Country[];
  error: string;
  status: 'Initial' | 'Loading' | 'Success' | 'Error';
}

export const initialState: State = {
  leagues: [],
  error: '',
  status: 'Initial',
};

const _reducer = createReducer(
  initialState,
  on(allLeaguesActions.loadAllLeaguesSuccess, (state, action) => {
    return {
      ...state,
      leagues: action.leagues,
      status: 'Success' as const,
    };
  }),
  on(allLeaguesActions.loadAllLeaguesError, (state, action) => {
    return {
      ...state,
      error: action.error,
      status: 'Error' as const,
    };
  }),
  on(allLeaguesActions.loadAllLeagues, (state) => {
    return {
      ...state,
      status: 'Loading' as const,
    };
  })
);

export function reducer(state = initialState, action: Action): State {
  return _reducer(state, action);
}
