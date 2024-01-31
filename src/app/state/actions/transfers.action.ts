import { createAction } from '@ngrx/store';
import { Transfer } from 'src/app/common/types/transfers';
import { GetTransfersQuery } from 'src/app/services/transfers.service';

export const loadTransfers = createAction(
  '[Transfers] Load Transfers',
  (getTransfersQuery: GetTransfersQuery) => ({ getTransfersQuery })
);

export const loadTransfersSuccess = createAction(
  '[Transfers] Load Transfers Success',
  (transfers: Transfer[]) => ({ transfers })
);

export const loadTransfersError = createAction(
  '[Transfers] Load Transfers Error',
  (error: string) => ({ error })
);
