import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
// Components
import { WrapperComponent } from './views/wrapper/wrapper.component';
import { SearchbarComponent } from './views/searchbar/searchbar.component';
import { TransferIconComponent } from './views/transfer-icon/transfer-icon.component';
import { ArrowRightSolidComponent } from './views/arrow-right-solid/arrow-right-solid.component';
import { LoadingComponent } from './views/loading/loading.component';
import { TransfersTableComponent } from './views/transfers-table/transfers-table.component';
import { PlayerTransferDataComponent } from './views/player-transfer-data/player-transfer-data.component';
import { NewsCardLargeComponent } from './views/news-card-large/news-card-large.component';
import { NewsCardComponent } from './views/news-card/news-card.component';
import { ArrowSolidLeftComponent } from './views/arrow-solid-left/arrow-solid-left.component';
// Pipes
import { LeagueImagePipe } from './pipes/league-image/league-image.pipe';
import { CountryImagePipe } from './pipes/country-image/country-image.pipe';
import { PlayerImagePipe } from './pipes/player-image/player-image.pipe';
import { TeamImagePipe } from './pipes/team-image/team-image.pipe';
// Directives
import { CountryFallbackImageDirective } from './directives/country-fallback-image/country-fallback-image.directive';
import { PlayerFallbackImageDirective } from './directives/player-fallback-image/player-fallback-image.directive';
import { TeamFallbackImageDirective } from './directives/team-fallback-image/team-fallback-image.directive';
import { CcodeToCountryPipe } from './pipes/ccode-to-country/ccode-to-country.pipe';
import { FeedBytimeMatchesComponent } from './views/feed-bytime-matches/feed-bytime-matches.component';
import { MatchListItemComponent } from './views/match-list-item/match-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    SlickCarouselModule,
  ],
  declarations: [
    WrapperComponent,
    SearchbarComponent,
    TransferIconComponent,
    ArrowRightSolidComponent,
    LoadingComponent,
    TransfersTableComponent,
    PlayerTransferDataComponent,
    NewsCardComponent,
    NewsCardLargeComponent,
    LeagueImagePipe,
    CountryImagePipe,
    CountryFallbackImageDirective,
    TransfersTableComponent,
    PlayerTransferDataComponent,
    NewsCardComponent,
    NewsCardLargeComponent,
    ArrowSolidLeftComponent,
    PlayerImagePipe,
    TeamFallbackImageDirective,
    PlayerFallbackImageDirective,
    TeamImagePipe,
    CcodeToCountryPipe,
    FeedBytimeMatchesComponent,
    MatchListItemComponent,
  ],
  exports: [
    FormsModule,
    WrapperComponent,
    SearchbarComponent,
    TransferIconComponent,
    CommonModule,
    ArrowRightSolidComponent,
    LoadingComponent,
    HttpClientModule,
    TransfersTableComponent,
    PlayerTransferDataComponent,
    NewsCardComponent,
    NewsCardLargeComponent,
    FeedBytimeMatchesComponent,
    MatchListItemComponent,

    LeagueImagePipe,
    CountryImagePipe,
    PlayerImagePipe,
    TeamImagePipe,
    PlayerFallbackImageDirective,
    CountryFallbackImageDirective,
    TransfersTableComponent,
    PlayerTransferDataComponent,
    NewsCardComponent,
    NewsCardLargeComponent,
    ArrowSolidLeftComponent,
    SlickCarouselModule,
    TeamFallbackImageDirective,
    CcodeToCountryPipe,
  ],
})
export class SharedModule {}
