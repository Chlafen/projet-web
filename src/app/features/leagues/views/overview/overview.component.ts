import { ActivatedRoute } from '@angular/router';
import { LeagueOverviewMatch } from './../../../../common/types/league';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  Long,
  LongKey,
  Matches,
  Short,
  ShortKey,
} from 'src/app/common/types/league';
import { WorldNews } from 'src/app/common/types/world-news';
import { matchFixturesActions, newsActions } from 'src/app/state/actions';
import { Subscription, map, tap } from 'rxjs';
import { getMatchFixtures, getWorldNews, getWorldNewsPage, getWorldNewsStatus } from 'src/app/state/selectors';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.sass'],
})
export class OverviewComponent {
  windowWidth: number = window.innerWidth;

  overviewMatches$ = this.store.select(getMatchFixtures)
  overviewMatchesJumpIdx$ = this.overviewMatches$.pipe(
    map((val) => {
      const today = new Date();
      const idx = val.findIndex((elm) => {
        const { utcTime } = elm.status ?? {}
        if (!utcTime) return;

        const matchDate = new Date(utcTime);
        return (matchDate.getDate() >= today.getDate() && matchDate.getMonth() === today.getMonth() && matchDate.getFullYear() === today.getFullYear()) || (matchDate.getMonth() > today.getMonth() && matchDate.getFullYear() === today.getFullYear()) || (matchDate.getFullYear() > today.getFullYear());
      })
      if (idx == -1) return 0;
      return idx;
    })
  )

  newsList$ = this.store.select(getWorldNews);
  newsStatus$ = this.store.select(getWorldNewsStatus);
  currentPage$ = this.store.select(getWorldNewsPage);
  currentLeagueId$ = this.route.parent!.params.pipe(
    map((params) => parseInt(params['id'], 10)),
    tap((leagueId) => {
      this.store.dispatch(matchFixturesActions.loadLeagueMatchFixtures({ leagueId }));
      this.store.dispatch(newsActions.loadNewsPerLeague(leagueId));
    })
  )

  constructor(private store: Store, private route: ActivatedRoute) { }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowWidth = window.innerWidth;
  }
}
