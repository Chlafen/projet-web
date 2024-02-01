import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of, tap } from 'rxjs';
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
      const actions$ = inject(Actions);
      return actions$.pipe(
        ofType(newsActions.loadNews),
        map(({ page }) => {
          newsActions.resetNewsList();
          return newsActions.loadNewsPage(page)
        })
      );
    });
  });
};

export const loadNewsPage = (context: EnvironmentInjector) => {
  return createEffect(() => {
    return runInInjectionContext(context, () => {
      const newsService = inject(NewsService);
      const actions$ = inject(Actions);
      return actions$.pipe(
        ofType(newsActions.loadNewsPage),
        mergeMap(({ page }) =>
          newsService.getNews({ page }).pipe(
            map((news) => newsActions.loadNewsPageSuccess(news)),
            catchError((error) => of(newsActions.loadNewsError(error)))
          )
        )
      );
    });
  });
};

export const loadNewsPerLeague = (context: EnvironmentInjector) => {
  return createEffect(() => {
    return runInInjectionContext(context, () => {
      const actions$ = inject(Actions);
      return actions$.pipe(
        ofType(newsActions.loadNewsPerLeague),
        map(({ leagueId, page }) => {
          newsActions.resetNewsList();
          return newsActions.loadNewsPerLeaguePage(leagueId, page)
        })
      );
    });
  });
};

export const loadNewsPerLeaguePage = (context: EnvironmentInjector) => {
  return createEffect(() => {
    return runInInjectionContext(context, () => {
      const newsService = inject(NewsService);
      const actions$ = inject(Actions);
      return actions$.pipe(
        ofType(newsActions.loadNewsPerLeaguePage),
        mergeMap(({ leagueId, page }) =>
          newsService.getNewsByLeague({ leagueId, page }).pipe(
            map((news) => newsActions.loadNewsPageSuccess(news)),
            catchError((error) => of(newsActions.loadNewsError(error)))
          )
        )
      );
    });
  });
};
