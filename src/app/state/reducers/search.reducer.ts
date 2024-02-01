import { Action, createReducer, on } from '@ngrx/store';
import { SearchResults } from 'src/app/common/types/search';
import * as SearchActions from '../actions/search.action';

export interface State {
  search?: SearchResults;
  error: string;
  status: 'Initial' | 'Loading' | 'Success' | 'Error';
}

export const initialState: State = {
  search: undefined,
  error: '',
  status: 'Initial',
};

const _reducer = createReducer(
  initialState,
  on(SearchActions.loadSearchSuccess, (state, action) => {
    return {
      ...state,
      search: action.search,
      status: 'Success' as const,
    };
  }),
  on(SearchActions.loadSearchError, (state, action) => {
    return {
      ...state,
      error: action.error,
      status: 'Error' as const,
    };
  }),
  on(SearchActions.loadSearch, (state) => {
    return {
      ...state,
      status: 'Loading' as const,
    };
  })
);

export function reducer(state = initialState, action: Action): State {
  return _reducer(state, action);
}
