import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransfersRoutingModule } from './transfers-routing.module';
import { TransfersComponent } from './transfers.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TransfersTableComponent } from './views/transfers-table/transfers-table.component';
import { FilterDropdownComponent } from './views/filter-dropdown/filter-dropdown.component';
import { PlayerTransferDataComponent } from './views/player-transfer-data/player-transfer-data.component';
import { TransfersFilterComponent } from './views/transfers-filter/transfers-filter.component';

@NgModule({
  declarations: [
    TransfersComponent,
    TransfersTableComponent,
    FilterDropdownComponent,
    PlayerTransferDataComponent,
    TransfersFilterComponent,
  ],
  imports: [CommonModule, TransfersRoutingModule, SharedModule],
})
export class TransfersModule {}
