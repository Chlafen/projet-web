import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of } from 'rxjs';
import { newsActions } from '../actions';
import {
  EnvironmentInjector,
  inject,
  runInInjectionContext,
} from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

export const loadNews = (context: EnvironmentInjector) => {
  return createEffect(() => {
    return runInInjectionContext(context, () => {
      const newsService = inject(NewsService);
      const actions$ = inject(Actions);
      return actions$.pipe(
        ofType(newsActions.loadNews),
        mergeMap(() =>
          newsService.getNews().pipe(
            map((news) => newsActions.loadNewsSuccess(news)),
            catchError((error) => of(newsActions.loadNewsError(error)))
          )
        )
      );
    });
  });
};
