import { Action, createReducer, on } from '@ngrx/store';
import { League, Match, Matches } from 'src/app/common/types/matches';
import { matchesActions } from '../actions';
import { formatDateToApi, getCountryName } from 'src/app/common/utils';
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
    const result = searchMatches(
      action.searchQuery,
      state.matches,
      filteredMatches,
      byTimeMatches
    );
    return {
      ...state,
      filteredMatches: result.filteredMatches,
      byTimeMatches: result.byTimeMatches,
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
          (match) =>
            match.status?.started &&
            !match.status?.finished &&
            !match.status?.cancelled &&
            !match.status?.reason
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

const searchMatches = (
  searchText: string,
  matches: Matches,
  filteredMatches: Matches,
  byTimeMatches: Match[]
) => {
  if (!searchText) {
    return {
      filteredMatches: filteredMatches,
      byTimeMatches: byTimeMatches,
    };
  } else {
    // search by:
    // matches.leagues[0].name
    // matches.leagues[0].ccode
    // matches.leagues[0].matches[0].home.name
    // matches.leagues[0].matches[0].away.name
    let newFilteredMatches: Matches = matches;
    let newByTimeMatches: Match[] = [];

    const filteredLeagues = matches
      .leagues!.map((league) => {
        let newMatches = league.matches!.filter(
          (match) =>
            match.home?.name
              ?.toLowerCase()
              .includes(searchText.toLowerCase()) ||
            match.away?.name
              ?.toLowerCase()
              .includes(searchText.toLowerCase()) ||
            league.name?.toLowerCase().includes(searchText.toLowerCase()) ||
            getCountryName(league.ccode)
              .toLowerCase()
              .includes(searchText.toLowerCase())
        );
        newByTimeMatches.push(...newMatches);
        return { ...league, matches: newMatches } as League;
      })
      .filter((league) => league.matches!.length > 0);
    newFilteredMatches = { date: matches.date, leagues: filteredLeagues };

    //intersection of byTimeMatches and newByTimeMatches
    newByTimeMatches = byTimeMatches.filter((match) =>
      newByTimeMatches.some((newMatch) => newMatch.id === match.id)
    );
    newByTimeMatches.sort((a, b) => (a.timeTS ?? 0) - (b.timeTS ?? 0));

    // intersection of filteredMatches and newFilteredMatches
    newFilteredMatches.leagues = newFilteredMatches.leagues?.filter((league) =>
      filteredMatches.leagues?.some(
        (filteredLeague) => filteredLeague.id === league.id
      )
    );

    return {
      filteredMatches: newFilteredMatches,
      byTimeMatches: newByTimeMatches,
    };
  }
};

export function reducer(state = initialState, action: Action): State {
  return _reducer(state, action);
}
