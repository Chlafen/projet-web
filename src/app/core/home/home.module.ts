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


@NgModule({
  declarations: [
    HomeComponent,
    WrapperComponent,
    FeedComponent,
    TopTransfersComponent,
    LastNewsComponent,
    TopLeaguesComponent,
    AllLeaguesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
