import { ActionReducerMap } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import * as news from './news.reducer';

export interface State {
  news: news.State;
  // router: RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
  news: news.reducer,
  // router: routerReducer,
};

export {
  news,
  // RouterReducerState
};
