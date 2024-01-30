import { Action, createReducer, on } from '@ngrx/store';
import { allLeaguesActions } from '../actions';
import { Country } from 'src/app/common/types/all-leagues';

export interface State {
  leagues: Country[];
  filtered: Country[];
  error: string;
  status: 'Initial' | 'Loading' | 'Success' | 'Error';
}

export const initialState: State = {
  leagues: [],
  filtered: [],
  error: '',
  status: 'Initial',
};

const _reducer = createReducer(
  initialState,
  on(allLeaguesActions.loadAllLeaguesSuccess, (state, action) => {
    return {
      ...state,
      leagues: action.leagues,
      filtered: action.leagues,
      status: 'Success' as const,
    };
  }),
  on(allLeaguesActions.searchAllLeagues, (state, action) => {
    console.log(action)
    return {
      ...state,
      filtered: state.leagues.map((country) => {
        return {
          ...country, leagues: country.leagues.filter((league) => {
            const leagueName = league.name.toLowerCase()
            return leagueName.includes(action.search.toLowerCase())
          })
        }
      }).filter((country) => {
        return country.leagues.length != 0
      }),
    }
  }),
  on(allLeaguesActions.loadAllLeaguesError, (state, action) => {
    return {
      ...state,
      error: action.error,
      status: 'Error' as const,
    };
  }),
  on(allLeaguesActions.loadAllLeagues, (state) => {
    return {
      ...state,
      status: 'Loading' as const,
    };
  })
);

export function reducer(state = initialState, action: Action): State {
  return _reducer(state, action);
}
