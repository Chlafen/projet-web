import { createFeatureSelector, createSelector } from '@ngrx/store';
import { topTransfers } from '../reducers';

// export const routerState = createFeatureSelector<RouterReducerState>('router');

export const topTransfersState = createFeatureSelector<topTransfers.State>('transfers');

export const getToptransfers = createSelector(topTransfersState, (state) => state.transfers);

export const getToptransfersStatus = createSelector(
  topTransfersState,
  (state) => state.status
);
