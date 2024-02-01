import { inject, EnvironmentInjector } from '@angular/core';
import { loadNews } from './news.effect';
import { loadTopLeauges } from './top-leagues.effect';
import { loadAllLeauges } from './all-leagues.effect';
import { loadTransfers } from './transfers.effect';
import {
  loadMatches,
  loadMatchesNextDay,
  loadMatchesPrevDay,
} from './matches.effect';

export class HttpEffect {
  private environmentInjector = inject(EnvironmentInjector);

  loadNews$ = loadNews(this.environmentInjector);
  loadTopLeagues$ = loadTopLeauges(this.environmentInjector);
  loadAllLeagues$ = loadAllLeauges(this.environmentInjector);
  loadTransfers$ = loadTransfers(this.environmentInjector);
  loadMatches$ = loadMatches(this.environmentInjector);
  loadMatchesNextDay$ = loadMatchesNextDay(this.environmentInjector);
  loadMatchesPrevDay$ = loadMatchesPrevDay(this.environmentInjector);
}
