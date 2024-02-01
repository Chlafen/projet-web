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
import { formatDateToApi } from '../common/utils';
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
        date: formatDateToApi('Today'),
      })
    );
  }
}
