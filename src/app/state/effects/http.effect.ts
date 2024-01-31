import {
  inject,
  EnvironmentInjector,
  runInInjectionContext,
} from '@angular/core';
import { loadNews } from './news.effect';
import { loadTopLeauges } from './top-leagues.effect';
import { loadAllLeauges } from './all-leagues.effect';
import { loadTopTransfers } from './top-transfers.effect';

export class HttpEffect {
  private environmentInjector = inject(EnvironmentInjector);

  loadNews$ = loadNews(this.environmentInjector);
  loadTopLeagues$ = loadTopLeauges(this.environmentInjector);
  loadAllLeagues$ = loadAllLeauges(this.environmentInjector);
  loadtransfers$ = loadTopTransfers(this.environmentInjector);
}
