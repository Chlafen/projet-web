import { ActionReducerMap } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import * as news from './news.reducer';
import * as topLeagues from './top-leagues.reducer';
import * as transfers from './transfers.reducer';
import * as allLeagues from './all-leagues.reducer';
import * as matches from './matches.reducer';
import * as search from './search.reducer'
import * as matchLeagueFixtures from './matches-fixture.reducer';

export interface State {
  news: news.State;
  popular: topLeagues.State;
  leagues: allLeagues.State;
  transfers: transfers.State;
  matches: matches.State;
  search: search.State
  matchFixtures: matchLeagueFixtures.State;
  // router: RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
  news: news.reducer,
  popular: topLeagues.reducer,
  leagues: allLeagues.reducer,
  transfers: transfers.reducer,
  matches: matches.reducer,
  search: search.reducer,
  matchFixtures: matchLeagueFixtures.reducer,
  // router: routerReducer,
};

export {
  news,
  topLeagues,
  allLeagues,
  transfers,
  matches,
  search,
  matchLeagueFixtures,
  // RouterReducerState
};
