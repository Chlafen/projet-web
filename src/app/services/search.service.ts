import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ENDPOINT } from '../app.config';
import { SearchResults } from '../common/types/search';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  http = inject(HttpClient);
  getSearch( {query}:GetSearchQuery):Observable<SearchResults>{
    return this.http.get<SearchResults>(ENDPOINT+'search',{
      params: {
        term: query ,
      },
    })
  }

}
export interface GetSearchQuery {
  query: string;
}
