import { Action, createReducer, on } from '@ngrx/store';
import { WorldNews } from 'src/app/common/types/world-news';
import { newsActions } from '../actions';

export interface State {
  news: WorldNews[];
  page: number;
  error: string;
  status: 'Initial' | 'Loading' | 'Success' | 'Error';
}

export const initialState: State = {
  news: [],
  page: 1,
  error: '',
  status: 'Initial',
};

const _reducer = createReducer(
  initialState,
  on(newsActions.resetNewsList, (state, _) => {
    return {
      ...state,
      news: [],
      page: 1,
      status: 'Initial' as const,
    }
  }),
  on(newsActions.loadNewsPageSuccess, (state, action) => {
    return {
      ...state,
      news: [...state.news, ...action.news],
      page: state.page + 1,
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
  }),
  on(newsActions.loadNewsPage, (state) => {
    return {
      ...state,
      status: 'Loading' as const,
    };
  }),
  on(newsActions.loadNewsPerLeaguePage, (state) => {
    return {
      ...state,
      status: 'Loading' as const,
    };
  })
);

export function reducer(state = initialState, action: Action): State {
  return _reducer(state, action);
}
