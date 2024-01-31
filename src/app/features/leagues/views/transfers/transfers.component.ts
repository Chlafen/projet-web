import { Component } from '@angular/core';
import { Transfer, TransfersFilter } from 'src/app/common/types/transfers';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.sass'],
})
export class TransfersComponent {
  transfers: Transfer[] = [];

  filter1: TransfersFilter = {
    selected: 'All',
    choices: [
      {
        label: 'Latest Transfers',
        value: 'latest',
      },
      {
        label: 'Fee',
        value: 'fee',
      },
      {
        label: 'Market Value',
        value: 'marketValue',
      },
    ],
  };

  filter2: TransfersFilter = {
    selected: 'All',
    choices: [
      {
        label: 'All Transfers',
        value: 'all',
      },
      {
        label: 'Latest Transfers',
        value: 'latest',
      },
    ],
  };

  onFilter1Change(event: any) {}

  onFilter2Change(event: any) {}

  onShowMore() {}
}
