import { Action, createReducer, on } from '@ngrx/store';
import { WorldNews } from 'src/app/common/types/world-news';
import { newsActions } from '../actions';

export interface State {
  news: WorldNews[];
  error: string;
  status: 'Initial' | 'Loading' | 'Success' | 'Error';
}

export const initialState: State = {
  news: [],
  error: '',
  status: 'Initial',
};

const _reducer = createReducer(
  initialState,
  on(newsActions.loadNewsSuccess, (state, action) => {
    return {
      ...state,
      news: action.news,
      status: 'Success' as const,
    };
  }),
  on(newsActions.loadNewsError, (state, action) => {
    return {
      ...state,
      error: action.error,
      status: 'Error' as const,
    };
  }),
  on(newsActions.loadNews, (state) => {
    return {
      ...state,
      status: 'Loading' as const,
    };
  })
);

export function reducer(state = initialState, action: Action): State {
  return _reducer(state, action);
}
