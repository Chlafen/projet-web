import { ActivatedRoute } from '@angular/router';
import { LeagueOverviewMatch } from '../../../../common/types/league';
import { Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  Long,
  LongKey,
  Matches,
  Short,
  ShortKey,
} from 'src/app/common/types/league';
import { WorldNews } from 'src/app/common/types/world-news';
import { newsActions } from 'src/app/state/actions';
import { Subscription, map, tap } from 'rxjs';
import { getWorldNews, getWorldNewsPage, getWorldNewsStatus } from 'src/app/state/selectors';

@Component({
  selector: 'app-news-overview-list',
  templateUrl: './news-overview-list.component.html',
  styleUrls: ['./news-overview-list.component.sass'],
})
export class NewsOverviewListComponent {
  @Input() page!: number;
  @Input() leagueId!: number;
  @Input() newsList: WorldNews[] = [];
  @Input() isLoading: boolean = true;

  constructor(private store: Store) { }

  seeMore() {
    this.store.dispatch(newsActions.loadNewsPerLeaguePage(this.leagueId, this.page));
  }
}
