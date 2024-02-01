import { createFeatureSelector, createSelector } from '@ngrx/store';
import { news } from '../reducers';

// export const routerState = createFeatureSelector<RouterReducerState>('router');

export const newsState = createFeatureSelector<news.State>('news');

export const getWorldNews = createSelector(newsState, (state) => state.news);
export const getWorldNewsPage = createSelector(newsState, (state) => state.page);
export const getWorldNewsError = createSelector(newsState, (state) => state.error);

export const getWorldNewsStatus = createSelector(
  newsState,
  (state) => state.status
);
