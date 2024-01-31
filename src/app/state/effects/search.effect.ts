import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of } from 'rxjs';
import { SearchActions } from '../actions';
import {
  EnvironmentInjector,
  inject,
  runInInjectionContext,
} from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

export const loadSearch = (context: EnvironmentInjector) => {
  return createEffect(() => {
    return runInInjectionContext(context, () => {
      const searchService = inject(SearchService);
      const actions$ = inject(Actions);

      return actions$.pipe(
        ofType(SearchActions.loadSearch),
        mergeMap(({ GetSearchQuery }) =>
        searchService.getSearch(GetSearchQuery).pipe(
            map((search) =>
              SearchActions.loadSearchSuccess(
                search
              )
            ),
            catchError((error) =>
              of(SearchActions.loadSearchError(error))
            )
          )
        )
      );
    });
  });
};
