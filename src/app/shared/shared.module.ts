import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './views/wrapper/wrapper.component';
import { SearchbarComponent } from './views/searchbar/searchbar.component';
import { TransferIconComponent } from './views/transfer-icon/transfer-icon.component';
import { ArrowRightSolidComponent } from './views/arrow-right-solid/arrow-right-solid.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './views/loading/loading.component';
import { LeagueImagePipe } from './views/league-image/league-image.pipe';
import { CountryImagePipe } from './views/country-image/country-image.pipe';
import { CountryFallbackImageDirective } from './views/country-fallback-image/country-fallback-image.directive';
import { TransfersTableComponent } from './views/transfers-table/transfers-table.component';
import { PlayerTransferDataComponent } from './views/player-transfer-data/player-transfer-data.component';
import { RouterModule } from '@angular/router';
import { NewsCardLargeComponent } from './views/news-card-large/news-card-large.component';
import { NewsCardComponent } from './views/news-card/news-card.component';
import { ArrowSolidLeftComponent } from './views/arrow-solid-left/arrow-solid-left.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
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
    LeagueImagePipe,
    CountryImagePipe,
    CountryFallbackImageDirective,
    TransfersTableComponent,
    PlayerTransferDataComponent,
    NewsCardComponent,
    NewsCardLargeComponent,
    ArrowSolidLeftComponent,
    SlickCarouselModule,
  ],
})
export class SharedModule {}
