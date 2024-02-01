import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ENDPOINT } from '../app.config';
import { Matches } from '../common/types/matches';

@Injectable({
  providedIn: 'root',
})
export class MatchesService {
  http = inject(HttpClient);

  getMatches(getMatchesQuery: GetMatchesQuery): Observable<Matches> {
    return this.http.get<Matches>(ENDPOINT + 'matches', {
      params: {
        ...getMatchesQuery,
        timezone: 'Africa/Lagos',
        ccode3: 'TUN',
      },
    });
  }
}

export interface GetMatchesQuery {
  date?: string;
}
