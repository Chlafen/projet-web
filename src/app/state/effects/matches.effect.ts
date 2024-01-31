import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of } from 'rxjs';
import { matchesActions } from '../actions';
import {
  EnvironmentInjector,
  inject,
  runInInjectionContext,
} from '@angular/core';
import { MatchesService } from 'src/app/services/matches.service';

export const loadMatches = (context: EnvironmentInjector) => {
  return createEffect(() => {
    return runInInjectionContext(context, () => {
      const matchesService = inject(MatchesService);
      const actions$ = inject(Actions);
      return actions$.pipe(
        ofType(matchesActions.loadMatches),
        mergeMap(({ getMatchesQuery }) =>
          matchesService.getMatches(getMatchesQuery).pipe(
            map((matches) => matchesActions.loadMatchesSuccess(matches)),
            catchError((error) => of(matchesActions.loadMatchesError(error)))
          )
        )
      );
    });
  });
};
