import { createAction } from '@ngrx/store';
import { SearchResults} from 'src/app/common/types/search';
import { GetSearchQuery } from 'src/app/services/search.service';

export const loadSearch = createAction(
    '[search] Load Search',
    (GetSearchQuery: GetSearchQuery) => ({ GetSearchQuery })
  );
  
  export const loadSearchSuccess = createAction(
    '[search] Load Search Success',
    (search: SearchResults) => ({ search})
  );
  
  export const loadSearchError = createAction(
    '[search] Load Search Error',
    (error: string) => ({ error })
  );
  