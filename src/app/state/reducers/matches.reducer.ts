import { Action, createReducer, on } from '@ngrx/store';
import { Matches } from 'src/app/common/types/matches';
import { matchesActions } from '../actions';

export interface State {
  matches: Matches;
  error: string;
  status: 'Initial' | 'Loading' | 'Success' | 'Error';
}

export const initialState: State = {
  matches: {},
  error: '',
  status: 'Initial',
};

const _reducer = createReducer(
  initialState,
  on(matchesActions.loadMatchesSuccess, (state, action) => {
    return {
      ...state,
      matches: action.matches,
      status: 'Success' as const,
    };
  }),
  on(matchesActions.loadMatchesError, (state, action) => {
    return {
      ...state,
      error: action.error,
      status: 'Error' as const,
    };
  }),
  on(matchesActions.loadMatches, (state) => {
    return {
      ...state,
      status: 'Loading' as const,
    };
  })
);

export function reducer(state = initialState, action: Action): State {
  return _reducer(state, action);
}
