import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { WorldNews } from '../common/types/world-news';
import { ENDPOINT } from '../app.config';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  http = inject(HttpClient);

  getNews({ page }: GetNewsOptions): Observable<WorldNews[]> {
    return this.http.get<WorldNews[]>(ENDPOINT + 'worldnews', {
      params: {
        page: page ?? 1
      }
    });
  }

  getNewsByLeague({ leagueId, page }: GetNewsByLeagueOptions): Observable<WorldNews[]> {
    return this.http.get<WorldNews[]>(`${ENDPOINT}worldnews/league/${leagueId}`, {
      params: {
        page: page ?? 1
      }
    });
  }
}

export interface GetNewsOptions {
  page?: number;
}

export interface GetNewsByLeagueOptions {
  leagueId: number;
  page?: number;
}