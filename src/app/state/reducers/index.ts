import { ActionReducerMap } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import * as news from './news.reducer';
import * as topLeagues from './top-leagues.reducer';

export interface State {
  news: news.State;
  popular: topLeagues.State;
  // router: RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
  news: news.reducer,
  popular: topLeagues.reducer,
  // router: routerReducer,
};

export {
  news,
  topLeagues,
  // RouterReducerState
};
