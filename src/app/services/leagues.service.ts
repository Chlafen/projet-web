import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ENDPOINT } from '../app.config';
import { Country, League } from '../common/types/all-leagues';

@Injectable({
  providedIn: 'root',
})
export class LeaguesService {
  http = inject(HttpClient);

  getPopular(): Observable<League[]> {
    return this.http.get<League[]>(ENDPOINT + 'allleagues/popular');
  }

  getByCountry(): Observable<Country[]> {
    return this.http.get<Country[]>(ENDPOINT + 'allleagues/country');
  }
}
