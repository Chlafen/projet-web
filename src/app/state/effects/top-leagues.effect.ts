import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of } from 'rxjs';
import { topLeaguesActions } from '../actions';
import {
  EnvironmentInjector,
  inject,
  runInInjectionContext,
} from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { LeaguesService } from 'src/app/services/leagues.service';

export const loadTopLeauges = (context: EnvironmentInjector) => {
  return createEffect(() => {
    return runInInjectionContext(context, () => {
      const leaguesService = inject(LeaguesService);
      const actions$ = inject(Actions);

      return actions$.pipe(
        ofType(topLeaguesActions.loadTopLeagues),
        mergeMap(() =>
          leaguesService.getPopular().pipe(
            map((leagues) => topLeaguesActions.loadTopLeaguesSuccess(leagues)),
            catchError((error) => of(topLeaguesActions.loadTopLeaguesError(error)))
          )
        )
      );
    });
  });
};
