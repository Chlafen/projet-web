import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaguesRoutingModule } from './leagues-routing.module';
import { LeaguesComponent } from './leagues.component';
import { NewsComponent } from './views/news/news.component';
import { OverviewComponent } from './views/overview/overview.component';
import { MatchesComponent } from './views/matches/matches.component';
import { TransfersComponent } from './views/transfers/transfers.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    LeaguesComponent,
    NewsComponent,
    OverviewComponent,
    MatchesComponent,
    TransfersComponent,
  ],
  imports: [CommonModule, LeaguesRoutingModule, SharedModule],
})
export class LeaguesModule {}
