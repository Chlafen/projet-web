import { Action, createReducer, on } from '@ngrx/store';
import { Transfer } from 'src/app/common/types/transfers';
import * as transfersActions from '../actions/transfers.action';

export interface State {
  transfers: Transfer[];
  error: string;
  status: 'Initial' | 'Loading' | 'Success' | 'Error';
}

export const initialState: State = {
  transfers: [],
  error: '',
  status: 'Initial',
};

const _reducer = createReducer(
  initialState,
  on(transfersActions.loadTransfersSuccess, (state, action) => {
    return {
      ...state,
      transfers: action.transfers,
      status: 'Success' as const,
    };
  }),
  on(transfersActions.loadTransfersError, (state, action) => {
    return {
      ...state,
      error: action.error,
      status: 'Error' as const,
    };
  }),
  on(transfersActions.loadTransfers, (state) => {
    return {
      ...state,
      status: 'Loading' as const,
    };
  })
);

export function reducer(state = initialState, action: Action): State {
  return _reducer(state, action);
}
