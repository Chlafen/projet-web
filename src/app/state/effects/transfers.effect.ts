import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of } from 'rxjs';
import { transfersActions } from '../actions';
import {
  EnvironmentInjector,
  inject,
  runInInjectionContext,
} from '@angular/core';
import { TransfersService } from 'src/app/services/transfers.service';

export const loadTransfers = (context: EnvironmentInjector) => {
  return createEffect(() => {
    return runInInjectionContext(context, () => {
      const transfersService = inject(TransfersService);
      const actions$ = inject(Actions);

      return actions$.pipe(
        ofType(transfersActions.loadTransfers),
        mergeMap(({ getTransfersQuery }) =>
          transfersService.getTransfers(getTransfersQuery).pipe(
            map((transfers) =>
              transfersActions.loadTransfersSuccess(
                transfers.transfers,
                transfers.hits
              )
            ),
            catchError((error) =>
              of(transfersActions.loadTransfersError(error))
            )
          )
        )
      );
    });
  });
};
