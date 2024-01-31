import { createAction } from '@ngrx/store';
import { Transfer, Transfers } from 'src/app/common/types/transfers';

export const loadtransfers = createAction('[transfers] Load transfers');

export const loadtransfersSuccess = createAction(
  '[Transfers] Load transfers Success',
  (transfer: Transfer[]) => ({ transfer })
);

export const loadTransfersError = createAction(
  '[Transfers] Load transfers Error',
  (error: string) => ({ error })
);
