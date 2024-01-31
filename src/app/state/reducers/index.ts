import { ActionReducerMap } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import * as news from './news.reducer';
import * as topLeagues from './top-leagues.reducer';
import * as allLeagues from './all-leagues.reducer';
import * as topTransfers from './top-transfers.reducer';

export interface State {
  news: news.State;
  popular: topLeagues.State;
  leagues: allLeagues.State;
  transfers: topTransfers.State;
  // router: RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
  news: news.reducer,
  popular: topLeagues.reducer,
  leagues: allLeagues.reducer,
  transfers:topTransfers.reducer,
  // router: routerReducer,
};

export {
  news,
  topLeagues,
  allLeagues,
  topTransfers
  // RouterReducerState
};
