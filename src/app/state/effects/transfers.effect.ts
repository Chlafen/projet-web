import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of, tap } from 'rxjs';
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
            tap((transfers) => console.log(transfers)),
            map((transfers) =>
              transfersActions.loadTransfersSuccess(
                transfers.slice(0, Math.min(3, transfers.length))
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
