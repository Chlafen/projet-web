import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  newsActions,
  topLeaguesActions,
  allLeaguesActions,
  transfersActions,
  matchesActions,
} from '../state/actions';
import {
  getTopLeagues,
  getTopLeaguesStatus,
  getTransfers,
  getTransfersStatus,
  getWorldNews,
  getWorldNewsStatus,
  getAllLeaguesFiltered,
  getAllLeaguesStatus,
  getMatches,
  getMatchesStatus,
} from 'src/app/state/selectors';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent {
  constructor(private store: Store) {}

  newsList$ = this.store.select(getWorldNews);
  newsStatus$ = this.store.select(getWorldNewsStatus);

  topLeaguesList$ = this.store.select(getTopLeagues);
  topLeaguesStatus$ = this.store.select(getTopLeaguesStatus);

  allLeaguesList$ = this.store.select(getAllLeaguesFiltered);
  allLeaguesStatus$ = this.store.select(getAllLeaguesStatus);

  topTransfersList$ = this.store.select(getTransfers);
  topTransfersStatus$ = this.store.select(getTransfersStatus);

  matchesList$ = this.store.select(getMatches);
  matchesStatus$ = this.store.select(getMatchesStatus);

  ngOnInit(): void {
    this.store.dispatch(newsActions.loadNews());
    this.store.dispatch(topLeaguesActions.loadTopLeagues());
    this.store.dispatch(allLeaguesActions.loadAllLeagues());
    this.store.dispatch(
      transfersActions.loadTransfers({
        showTop: true,
      })
    );
    this.store.dispatch(
      matchesActions.loadMatches({
        date: new Date().toISOString().slice(0, 10).replace(/-/g, ''),
      })
    );
  }
}
