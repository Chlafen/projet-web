import {
  inject,
  EnvironmentInjector,
  runInInjectionContext,
} from '@angular/core';
import { loadNews } from './news.effect';
import { loadTopLeauges } from './top-leagues.effect';

export class HttpEffect {
  private environmentInjector = inject(EnvironmentInjector);

  loadNews$ = loadNews(this.environmentInjector);
  loadTopLeagues$ = loadTopLeauges(this.environmentInjector);
}
