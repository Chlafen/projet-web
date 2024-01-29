import { createAction } from '@ngrx/store';
import { WorldNews } from 'src/app/common/types/world-news';

export const loadNews = createAction('[News] Load News');

export const loadNewsSuccess = createAction(
  '[News] Load News Success',
  (news: WorldNews[]) => ({ news })
);

export const loadNewsError = createAction(
  '[News] Load News Error',
  (error: string) => ({ error })
);
