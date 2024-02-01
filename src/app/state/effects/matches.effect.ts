import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of } from 'rxjs';
import { matchesActions } from '../actions';
import {
  EnvironmentInjector,
  inject,
  runInInjectionContext,
} from '@angular/core';
import { MatchesService } from 'src/app/services/matches.service';
import { formatDateToApi, getDateFromApiFormat } from 'src/app/common/utils';

export const loadMatches = (context: EnvironmentInjector) => {
  return createEffect(() => {
    return runInInjectionContext(context, () => {
      const matchesService = inject(MatchesService);
      const actions$ = inject(Actions);
      return actions$.pipe(
        ofType(matchesActions.loadMatches),
        mergeMap(({ getMatchesQuery }) =>
          matchesService.getMatches(getMatchesQuery).pipe(
            map((matches) =>
              matchesActions.loadMatchesSuccess(matches, matches.date!)
            ),
            catchError((error) => of(matchesActions.loadMatchesError(error)))
          )
        )
      );
    });
  });
};

export const loadMatchesNextDay = (context: EnvironmentInjector) => {
  return createEffect(() => {
    return runInInjectionContext(context, () => {
      const matchesService = inject(MatchesService);
      const actions$ = inject(Actions);
      return actions$.pipe(
        ofType(matchesActions.loadMatchesNextDay),
        mergeMap(({ currentDay }) => {
          let nextDay = getDateFromApiFormat(currentDay);
          nextDay.setDate(nextDay.getDate() + 1);
          return matchesService
            .getMatches({ date: formatDateToApi(nextDay.toDateString()) })
            .pipe(
              map((matches) =>
                matchesActions.loadMatchesNextDaySuccess(matches, matches.date!)
              ),
              catchError((error) => of(matchesActions.loadMatchesError(error)))
            );
        })
      );
    });
  });
};

export const loadMatchesPrevDay = (context: EnvironmentInjector) => {
  return createEffect(() => {
    return runInInjectionContext(context, () => {
      const matchesService = inject(MatchesService);
      const actions$ = inject(Actions);
      return actions$.pipe(
        ofType(matchesActions.loadMatchesPrevDay),
        mergeMap(({ currentDay }) => {
          let prevDay = getDateFromApiFormat(currentDay);
          prevDay.setDate(prevDay.getDate() - 1);
          console.log(
            'matches.effect.ts: loadMatchesPrevDay(): currentDay: ',
            currentDay,
            'prevDay: ',
            prevDay
          );
          return matchesService
            .getMatches({ date: formatDateToApi(prevDay.toDateString()) })
            .pipe(
              map((matches) =>
                matchesActions.loadMatchesPrevDaySuccess(matches, matches.date!)
              ),
              catchError((error) => of(matchesActions.loadMatchesError(error)))
            );
        })
      );
    });
  });
};
