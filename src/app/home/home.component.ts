import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { newsActions, topLeaguesActions, allLeaguesActions } from '../state/actions';
import { getTopLeagues, getTopLeaguesStatus, getWorldNews, getWorldNewsStatus } from 'src/app/state/selectors';
import { getAllLeaguesFiltered, getAllLeaguesStatus } from '../state/selectors/all-leagues.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent {
  constructor(private store: Store) { }

  newsList$ = this.store.select(getWorldNews);
  newsStatus$ = this.store.select(getWorldNewsStatus);

  topLeaguesList$ = this.store.select(getTopLeagues);
  topLeaguesStatus$ = this.store.select(getTopLeaguesStatus);

  allLeaguesList$ = this.store.select(getAllLeaguesFiltered);
  allLeaguesStatus$ = this.store.select(getAllLeaguesStatus);

  ngOnInit(): void {
    this.store.dispatch(newsActions.loadNews());
    this.store.dispatch(topLeaguesActions.loadTopLeagues());
    this.store.dispatch(allLeaguesActions.loadAllLeagues());
  }
}
