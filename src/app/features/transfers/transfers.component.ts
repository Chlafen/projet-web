import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TransfersFilter } from 'src/app/common/types/transfers';
import { transfersActions } from 'src/app/state/actions';
import { getTransfers, getTransfersCount } from 'src/app/state/selectors';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.sass'],
})
export class TransfersComponent implements OnInit {
  constructor(private store: Store) {}
  transfersList$ = this.store.select(getTransfers);
  transfersCount$ = this.store.select(getTransfersCount);
  page = 1;

  ngOnInit(): void {
    this.store.dispatch(
      transfersActions.loadTransfers({
        page: this.page,
        showTop: this.showTop.selected == 'top',
        orderBy: this.orderBy.selected as any,
      })
    );
  }

  orderBy: TransfersFilter = {
    selected: '',
    choices: [
      {
        label: 'Latest Transfers',
        value: '',
      },
      {
        label: 'Fee',
        value: 'fee',
      },
      {
        label: 'Market Value',
        value: 'value',
      },
    ],
  };

  showTop: TransfersFilter = {
    selected: '',
    choices: [
      {
        label: 'All Transfers',
        value: '',
      },
      {
        label: 'Top Transfers',
        value: 'top',
      },
    ],
  };

  onOrderByChange(event: any) {
    console.log('orderByFilter', event);
    this.orderBy.selected = event.toString();
    this.page = 1;
    this.triggerChange();
  }

  onShowTopChange(event: any) {
    console.log('showTopFilter', event);
    this.showTop.selected = event.toString();
    this.page = 1;
    this.triggerChange();
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
        showTop: this.showTop.selected == 'top',
        orderBy: this.orderBy.selected as any,
      })
    );
  }
}
