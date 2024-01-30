import { createFeatureSelector, createSelector } from '@ngrx/store';
import { news } from '../reducers';

// export const routerState = createFeatureSelector<RouterReducerState>('router');

export const newsState = createFeatureSelector<news.State>('news');

export const getWorldNews = createSelector(newsState, (state) => state.news);

export const getWorldNewsStatus = createSelector(
  newsState,
  (state) => state.status
);
