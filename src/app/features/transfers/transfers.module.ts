import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransfersRoutingModule } from './transfers-routing.module';
import { TransfersComponent } from './transfers.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilterDropdownComponent } from './views/filter-dropdown/filter-dropdown.component';
import { TransfersFilterComponent } from './views/transfers-filter/transfers-filter.component';

@NgModule({
  declarations: [
    TransfersComponent,
    FilterDropdownComponent,
    TransfersFilterComponent,
  ],
  imports: [CommonModule, TransfersRoutingModule, SharedModule],
})
export class TransfersModule {}
