import {
  inject,
  EnvironmentInjector,
  runInInjectionContext,
} from '@angular/core';
import { loadNews } from './news.effect';

export class HttpEffect {
  private environmentInjector = inject(EnvironmentInjector);

  loadNews$ = loadNews(this.environmentInjector);
}
