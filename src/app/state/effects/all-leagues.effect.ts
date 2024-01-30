import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of } from 'rxjs';
import { allLeaguesActions } from '../actions';
import {
  EnvironmentInjector,
  inject,
  runInInjectionContext,
} from '@angular/core';
import { LeaguesService } from 'src/app/services/leagues.service';

export const loadAllLeauges = (context: EnvironmentInjector) => {
  return createEffect(() => {
    return runInInjectionContext(context, () => {
      const leaguesService = inject(LeaguesService);
      const actions$ = inject(Actions);

      return actions$.pipe(
        ofType(allLeaguesActions.loadAllLeagues),
        mergeMap(() =>
          leaguesService.getByCountry().pipe(
            map((leagues) => allLeaguesActions.loadAllLeaguesSuccess(leagues)),
            catchError((error) => of(allLeaguesActions.loadAllLeaguesError(error)))
          )
        )
      );
    });
  });
};
