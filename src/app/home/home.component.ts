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
import { tap } from 'rxjs';
import { formatDateToApi } from '../common/utils';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent {
  constructor(private store: Store) {}

  date = 'Today';

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
        date: formatDateToApi(this.date),
      })
    );

    this.matchesList$ = this.matchesList$.pipe(
      tap((list) => {
        let matchesDate = list.date;
        console.log(matchesDate);
        if (!matchesDate) return;
        const selectedDate = new Date(
          parseInt(matchesDate.slice(0, 4)),
          parseInt(matchesDate.slice(4, 6)) - 1,
          parseInt(matchesDate.slice(6, 8))
        );
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        if (selectedDate.toDateString() === today.toDateString()) {
          this.date = 'Today';
        } else if (selectedDate.toDateString() === tomorrow.toDateString()) {
          this.date = 'Tomorrow';
        } else if (selectedDate.toDateString() === yesterday.toDateString()) {
          this.date = 'Yesterday';
        } else {
          //format selected date to Day, Month DD
          this.date = selectedDate.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
          });
        }
      })
    );
  }

  onDateChange(date: string) {
    this.store.dispatch(
      matchesActions.loadMatches({
        date: formatDateToApi(date),
      })
    );
  }
}
