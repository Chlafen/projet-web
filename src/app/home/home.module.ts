import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FeedComponent } from './views/feed/feed.component';
import { TopTransfersComponent } from './views/top-transfers/top-transfers.component';
import { LastNewsComponent } from './views/last-news/last-news.component';
import { TopLeaguesComponent } from './views/top-leagues/top-leagues.component';
import { AllLeaguesComponent } from './views/all-leagues/all-leagues.component';
import { LeagueItemComponent } from './views/league-item/league-item.component';
import { HomeFilterComponent } from './views/home-filter/home-filter.component';
import { FeedFilterCapsuleComponent } from './views/feed-filter-capsule/feed-filter-capsule.component';
import { FeedFilterSearchComponent } from './views/feed-filter-search/feed-filter-search.component';
import { FeedLeagueSectionComponent } from './views/feed-league-section/feed-league-section.component';
import { LeaguePerCountryListComponent } from './views/league-per-country-list/league-per-country-list.component';
import { MatchListItemComponent } from './views/match-list-item/match-list-item.component';
import { HomeNewsCardComponent } from './views/home-news-card/home-news-card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    FeedComponent,
    TopTransfersComponent,
    LastNewsComponent,
    TopLeaguesComponent,
    AllLeaguesComponent,
    LeagueItemComponent,
    LeaguePerCountryListComponent,
    HomeFilterComponent,
    FeedFilterCapsuleComponent,
    FeedFilterSearchComponent,
    FeedLeagueSectionComponent,
    MatchListItemComponent,
    HomeNewsCardComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
