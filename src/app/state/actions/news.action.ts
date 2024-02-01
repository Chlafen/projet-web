import { createAction } from '@ngrx/store';
import { WorldNews } from 'src/app/common/types/world-news';


/**
 * Used to 
 * 1. set {@link news.State.news} to []
 * 2. set {@link news.State.page} to 1
 */
export const resetNewsList = createAction(
  '[News] Reset News'
);

/**
 * Triggers {@link resetNewsList} action then
 * triggers {@link loadNewsPerLeaguePage} action with 
 *  @param {number} leagueId
 *  @param {number} [page=0]
 */
export const loadNewsPerLeague = createAction(
  '[News] Load News Per League',
  (leagueId: number, page?: number) => ({ leagueId, page: page ?? 1 })
);

/**
 * API call using {@link NewsService.getNewsByLeague}
 */
export const loadNewsPerLeaguePage = createAction(
  '[News] Load News Per League Page',
  (leagueId: number, page: number) => ({ leagueId, page: page })
);

/**
 * Triggers {@link resetNewsList} action then
 * triggers {@link loadNewsPerLeaguePage} action with 
 *  @param {number} [page=1]
 */
export const loadNews = createAction(
  '[News] Load News',
  (page: number = 1) => ({ page })
);

/**
 * API call using {@link NewsService.getNews}
 */
export const loadNewsPage = createAction(
  '[News] Load News Page',
  (page: number) => ({ page })
);

/**
 * Triggered when an error happens in loading news in general.
 */
export const loadNewsError = createAction(
  '[News] Load News Error',
  (error: string) => ({ error })
);

/**
 * Triggered when successfully loaded a news page in general.
 * Adds result to the news array state at the end.
 * Updates current page state. (+1)
 */
export const loadNewsPageSuccess = createAction(
  '[News] Load News Page Success',
  (news: WorldNews[]) => ({ news })
);
