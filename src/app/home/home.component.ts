import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { newsActions, topLeaguesActions } from '../state/actions';
import { getTopLeagues, getTopLeaguesStatus, getWorldNews, getWorldNewsStatus } from 'src/app/state/selectors';

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

  ngOnInit(): void {
    this.store.dispatch(newsActions.loadNews());
    this.store.dispatch(topLeaguesActions.loadTopLeagues());
  }
}
