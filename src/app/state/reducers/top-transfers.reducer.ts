import { Action, createReducer, on } from '@ngrx/store';
import { topTransfersActions } from '../actions';
import { Transfer, Transfers } from 'src/app/common/types/transfers';

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
  on(topTransfersActions.loadtransfersSuccess, (state, action) => {
    return {
      ...state,
      transfers: action.transfer,
      status: 'Success' as const,
    };
  }),
  on(topTransfersActions.loadTransfersError, (state, action) => {
    return {
      ...state,
      error: action.error,
      status: 'Error' as const,
    };
  }),
  on(topTransfersActions.loadtransfers, (state) => {
    return {
      ...state,
      status: 'Loading' as const,
    };
  })
);

export function reducer(state = initialState, action: Action): State {
  return _reducer(state, action);
}
