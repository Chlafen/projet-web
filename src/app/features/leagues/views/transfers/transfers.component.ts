import { Component } from '@angular/core';
import { FeeText, LocalizationKey, LocalizedFeeText, Transfers } from 'src/app/common/types/league';
import { TransfersFilter } from 'src/app/common/types/transfers';
import { TransfersFilterComponent } from 'src/app/features/transfers/views/transfers-filter/transfers-filter.component';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.sass']
})
export class TransfersComponent {

  transfers: Transfers = {
    type: 'Transfers',
    data: [
      {
        contractExtension: false,
        fee: {
          feeText: FeeText.Fee,
          localizedFeeText: LocalizedFeeText.TransferFee,
          value: '€ 2.00m',
        },
        fromClub: 'Barca Atletic',
        fromClubId: 161774,
        marketValue: '€ 2.00m',
        name: 'S. Gnabry',
        onLoan: false,
        playerId: 30981,
        position: {
          key: 'ST',
          label: 'Midfielder',
        },
        toDate: new Date('2023-06-30T00:00:00Z'),
        toClub: 'FC Bayern München',
        toClubId: 6628,
        transferDate: new Date('2018-07-01T00:00:00Z'),
        transferText: [],
        transferType: {
          localizationKey: LocalizationKey.Contract,
        },
        fromDate: new Date('2017-07-01T00:00:00Z'),
      },
      {
        contractExtension: false,
        fee: {
          feeText: FeeText.Fee,
          localizedFeeText: LocalizedFeeText.TransferFee,
          value: '€ 2.00m',
        },
        fromClub: 'Barca Atletic',
        fromClubId: 161774,
        marketValue: '€ 2.00m',
        name: 'S. Gnabry',
        onLoan: false,
        playerId: 30981,
        position: {
          key: 'ST',
          label: 'Midfielder',
        },
        toDate: new Date('2023-06-30T00:00:00Z'),
        toClub: 'FC Bayern München',
        toClubId: 6628,
        transferDate: new Date('2018-07-01T00:00:00Z'),
        transferText: [],
        transferType: {
          localizationKey: LocalizationKey.Contract,
        },
        fromDate: new Date('2017-07-01T00:00:00Z'),
      },
      {
        contractExtension: false,
        fee: {
          feeText: FeeText.Fee,
          localizedFeeText: LocalizedFeeText.TransferFee,
          value: '€ 2.00m',
        },
        fromClub: 'Barca Atletic',
        fromClubId: 161774,
        marketValue: '€ 2.00m',
        name: 'S. Gnabry',
        onLoan: false,
        playerId: 30981,
        position: {
          key: 'ST',
          label: 'Midfielder',
        },
        toDate: new Date('2023-06-30T00:00:00Z'),
        toClub: 'FC Bayern München',
        toClubId: 6628,
        transferDate: new Date('2018-07-01T00:00:00Z'),
        transferText: [],
        transferType: {
          localizationKey: LocalizationKey.Contract,
        },
        fromDate: new Date('2017-07-01T00:00:00Z'),
      },
      {
        contractExtension: false,
        fee: {
          feeText: FeeText.Fee,
          localizedFeeText: LocalizedFeeText.TransferFee,
          value: '€ 2.00m',
        },
        fromClub: 'Barca Atletic',
        fromClubId: 161774,
        marketValue: '€ 2.00m',
        name: 'S. Gnabry',
        onLoan: false,
        playerId: 30981,
        position: {
          key: 'ST',
          label: 'Midfielder',
        },
        toDate: new Date('2023-06-30T00:00:00Z'),
        toClub: 'FC Bayern München',
        toClubId: 6628,
        transferDate: new Date('2018-07-01T00:00:00Z'),
        transferText: [],
        transferType: {
          localizationKey: LocalizationKey.Contract,
        },
        fromDate: new Date('2017-07-01T00:00:00Z'),
      },
    ],
  };

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

  onFilter1Change(event: any) {
    console.log('Filter 1', event);

    this.filter1.selected = event.toString();
  }

  onFilter2Change(event: any) {
    console.log('Filter 2', event);
    this.filter2.selected = event.toString();}

  onShowMore() {
    console.log('Show more', this.transfers.data?.length);
    this.transfers.data = [...this.transfers.data!, ...this.transfers.data!];
  }

}


