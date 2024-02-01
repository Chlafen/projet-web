import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaguesRoutingModule } from './leagues-routing.module';
import { LeaguesComponent } from './leagues.component';
import { NewsComponent } from './views/news/news.component';
import { OverviewComponent } from './views/overview/overview.component';
import { MatchesComponent } from './views/matches/matches.component';
import { TransfersComponent } from './views/transfers/transfers.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OverviewMatchesComponent } from './views/overview-matches/overview-matches.component';
import { OverviewMatchCardComponent } from './views/overview-match-card/overview-match-card.component';
import { NewsOverviewCardComponent } from './views/news-overview-card/news-overview-card.component';
import { MatchPageCardComponent } from './views/match-page-card/match-page-card.component';
import { NewsOverviewListComponent } from './views/news-overview-list/news-overview-list.component';

@NgModule({
  declarations: [
    LeaguesComponent,
    NewsComponent,
    OverviewComponent,
    MatchesComponent,
    TransfersComponent,
    OverviewMatchesComponent,
    OverviewMatchCardComponent,
    NewsOverviewCardComponent,
    MatchPageCardComponent,
    NewsOverviewListComponent,
  ],
  imports: [CommonModule, LeaguesRoutingModule, SharedModule],
})
export class LeaguesModule { }
