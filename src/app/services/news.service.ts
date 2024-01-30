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

  getNews(): Observable<WorldNews[]> {
    return this.http.get<WorldNews[]>(ENDPOINT + 'worldnews');
  }
}
