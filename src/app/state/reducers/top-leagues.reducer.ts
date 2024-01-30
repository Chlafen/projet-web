import { Action, createReducer, on } from '@ngrx/store';
import { topLeaguesActions } from '../actions';
import { League } from 'src/app/common/types/all-leagues';

export interface State {
  popular: League[];
  error: string;
  status: 'Initial' | 'Loading' | 'Success' | 'Error';
}

export const initialState: State = {
  popular: [],
  error: '',
  status: 'Initial',
};

const _reducer = createReducer(
  initialState,
  on(topLeaguesActions.loadTopLeaguesSuccess, (state, action) => {
    return {
      ...state,
      popular: action.popular,
      status: 'Success' as const,
    };
  }),
  on(topLeaguesActions.loadTopLeaguesError, (state, action) => {
    return {
      ...state,
      error: action.error,
      status: 'Error' as const,
    };
  }),
  on(topLeaguesActions.loadTopLeagues, (state) => {
    return {
      ...state,
      status: 'Loading' as const,
    };
  })
);

export function reducer(state = initialState, action: Action): State {
  return _reducer(state, action);
}
