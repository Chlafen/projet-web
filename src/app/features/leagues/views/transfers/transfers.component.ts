import { getTransfersStatus } from './../../../../state/selectors/transfers.selector';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { debounceTime } from 'rxjs';
import { Transfer, TransfersFilter } from 'src/app/common/types/transfers';
import { transfersActions } from 'src/app/state/actions';
import { getTransfers, getTransfersCount } from 'src/app/state/selectors';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.sass'],
})
export class TransfersComponent {
  constructor(private store: Store, private router: Router) {
    const url = this.router.url.split('/');
    this.leagueId = +url[2];
  }

  leagueId!: number;

  transfersList$ = this.store.select(getTransfers).pipe(debounceTime(500));
  transfersStatus$ = this.store.select(getTransfersStatus);
  transfersCount$ = this.store.select(getTransfersCount);

  page = 1;

  ngOnInit(): void {
    this.store.dispatch(
      transfersActions.loadTransfers({
        page: this.page,
        leagueIds: this.leagueId,
      })
    );
  }

  onNextPage() {
    this.page++;
    this.triggerChange();
  }

  onPreviousPage() {
    if (this.page > 1) {
      this.page--;
      this.triggerChange();
    }
  }

  triggerChange() {
    this.store.dispatch(
      transfersActions.loadTransfers({
        page: this.page,
        leagueIds: this.leagueId,
      })
    );
  }
}
