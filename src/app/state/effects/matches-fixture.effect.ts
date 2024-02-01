import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of } from 'rxjs';
import { matchFixturesActions } from '../actions';
import {
  EnvironmentInjector,
  inject,
  runInInjectionContext,
} from '@angular/core';
import { MatchesService } from 'src/app/services/matches.service';

export const loadLeagueMatchFixtures = (context: EnvironmentInjector) => {
  return createEffect(() => {
    return runInInjectionContext(context, () => {
      const matchService = inject(MatchesService);
      const actions$ = inject(Actions);

      return actions$.pipe(
        ofType(matchFixturesActions.loadLeagueMatchFixtures),
        mergeMap((params) =>
          matchService.getLeagueMatchFixtures(params).pipe(
            map((matches) => matchFixturesActions.loadLeagueMatchFixturesSuccess(matches)),
            catchError((error) => of(matchFixturesActions.loadLeagueMatchFixturesError(error)))
          )
        )
      );
    });
  });
};
