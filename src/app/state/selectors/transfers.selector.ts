import { createFeatureSelector, createSelector } from '@ngrx/store';
import { transfers } from '../reducers';

export const transfersState =
  createFeatureSelector<transfers.State>('transfers');

export const getTransfers = createSelector(
  transfersState,
  (state) => state.transfers
);

export const getTransfersStatus = createSelector(
  transfersState,
  (state) => state.status
);
