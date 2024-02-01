import { getTransfersStatus } from './../../../../state/selectors/transfers.selector';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { debounceTime } from 'rxjs';
import { transfersActions } from 'src/app/state/actions';
import { getTransfers, getTransfersCount } from 'src/app/state/selectors';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.sass'],
})
export class TransfersComponent {
  constructor(private store: Store, private route: ActivatedRoute) {
    this.leagueId = this.route.parent!.snapshot.params['id'];
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
