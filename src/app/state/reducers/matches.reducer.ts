import { Action, createReducer, on } from '@ngrx/store';
import { League, Match, Matches } from 'src/app/common/types/matches';
import { matchesActions } from '../actions';
import {
  decrementApiDate,
  formatDateToApi,
  incrementApiDate,
} from 'src/app/common/utils';
import { HomeFilterOption } from 'src/app/common/types/league';

export interface State {
  matches: Matches;
  filteredMatches: Matches;
  byTimeMatches: Match[];
  date: string;
  error: string;
  status: 'Initial' | 'Loading' | 'Success' | 'Error';
}

export const initialState: State = {
  matches: {},
  filteredMatches: {},
  byTimeMatches: [],
  error: '',
  date: formatDateToApi('Today'),
  status: 'Initial',
};

const _reducer = createReducer(
  initialState,
  on(matchesActions.loadMatchesSuccess, (state, action) => {
    return {
      ...state,
      matches: action.matches,
      filteredMatches: action.matches,
      byTimeMatches: [],
      date: action.date,
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
  }),
  on(matchesActions.filterMatches, (state, action) => {
    const { filteredMatches, byTimeMatches } = filterMatches(
      action.filters,
      state.matches
    );
    return {
      ...state,
      filteredMatches,
      byTimeMatches,
    };
  }),
  on(matchesActions.loadMatchesPrevDay, (state, action) => {
    return {
      ...state,
      status: 'Loading' as const,
    };
  }),
  on(matchesActions.loadMatchesPrevDaySuccess, (state, action) => {
    return {
      ...state,
      matches: action.matches,
      filteredMatches: action.matches,
      byTimeMatches: [],
      date: action.date,
      status: 'Success' as const,
    };
  }),
  on(matchesActions.loadMatchesNextDay, (state, action) => {
    return {
      ...state,
      status: 'Loading' as const,
    };
  }),
  on(matchesActions.loadMatchesNextDaySuccess, (state, action) => {
    return {
      ...state,
      matches: action.matches,
      filteredMatches: action.matches,
      byTimeMatches: [],
      date: action.date,
      status: 'Success' as const,
    };
  })
);

const filterMatches = (filters: Set<HomeFilterOption>, matches: Matches) => {
  console.log('newFilters', filters);
  let filteredMatches: Matches = {};
  let byTimeMatches: Match[] = [];
  let res = { filteredMatches, byTimeMatches };
  if (filters.has('All')) {
    filteredMatches = matches;
  } else if (filters.has('Ongoing')) {
    const newLeagues = matches
      .leagues!.map((league) => {
        let matches = league.matches!.filter(
          (match) => match.status?.started && !match.status?.finished
        );
        return { ...league, matches: matches } as League;
      })
      .filter((league) => league.matches!.length > 0);
    filteredMatches = { ...matches, leagues: newLeagues };
  }

  if (filters.has('By Time')) {
    console.log('By Time');
    byTimeMatches =
      filteredMatches.leagues?.map((league) => league.matches ?? []).flat() ??
      [];
    byTimeMatches.sort((a, b) => (a.timeTS ?? 0) - (b.timeTS ?? 0));
  } else {
    byTimeMatches = [];
  }
  res.filteredMatches = filteredMatches;
  res.byTimeMatches = byTimeMatches;
  return res;
};

export function reducer(state = initialState, action: Action): State {
  return _reducer(state, action);
}
