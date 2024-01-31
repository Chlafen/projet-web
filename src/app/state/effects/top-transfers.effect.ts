import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of } from 'rxjs';
import {
  EnvironmentInjector,
  inject,
  runInInjectionContext,
} from '@angular/core';
import { TransfersService } from 'src/app/services/transfers.service';
import { topTransfersActions } from '../actions';

export const loadTopTransfers = (context: EnvironmentInjector) => {
  return createEffect(() => {
    return runInInjectionContext(context, () => {
      const transfersService = inject(TransfersService);
      const actions$ = inject(Actions);
      return actions$.pipe(
        ofType(topTransfersActions.loadtransfers),
        mergeMap(() =>
          transfersService.getTransfers().pipe(
            map((transfers) => topTransfersActions.loadtransfersSuccess(transfers)),
            catchError((error) => of(topTransfersActions.loadTransfersError(error)))
          )
        )
      );
    });
  });
};
