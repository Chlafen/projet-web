import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { FeedComponent } from './feed/feed.component';
import { TopTransfersComponent } from './top-transfers/top-transfers.component';
import { LastNewsComponent } from './last-news/last-news.component';
import { TopLeaguesComponent } from './top-leagues/top-leagues.component';
import { AllLeaguesComponent } from './all-leagues/all-leagues.component';
import { LeagueItemComponent } from './league-item/league-item.component';
import { HomeFilterComponent } from './home-filter/home-filter.component';
import { FeedFilterCapsuleComponent } from './feed-filter-capsule/feed-filter-capsule.component';
import { FeedFilterSearchComponent } from './feed-filter-search/feed-filter-search.component';
import { FeedLeagueSectionComponent } from './feed-league-section/feed-league-section.component';
import { LeaguePerCountryListComponent } from './league-per-country-list/league-per-country-list.component';
import { MatchListItemComponent } from './match-list-item/match-list-item.component';
import { HomeNewsCardComponent } from './home-news-card/home-news-card.component';


@NgModule({
  declarations: [
    HomeComponent,
    WrapperComponent,
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
    HomeNewsCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
