import {
  inject,
  EnvironmentInjector,
} from '@angular/core';
import { loadNews, loadNewsPage, loadNewsPerLeague, loadNewsPerLeaguePage } from './news.effect';
import { loadTopLeauges } from './top-leagues.effect';
import { loadAllLeauges } from './all-leagues.effect';
import { loadTransfers } from './transfers.effect';

export class HttpEffect {
  private environmentInjector = inject(EnvironmentInjector);

  loadNews$ = loadNews(this.environmentInjector);
  loadNewsPage$ = loadNewsPage(this.environmentInjector);

  loadTopLeagues$ = loadTopLeauges(this.environmentInjector);
  loadAllLeagues$ = loadAllLeauges(this.environmentInjector);
  loadTransfers$ = loadTransfers(this.environmentInjector);

  loadNewsPerLeague$ = loadNewsPerLeague(this.environmentInjector);
  loadNewsPerLeaguePage$ = loadNewsPerLeaguePage(this.environmentInjector);
}
