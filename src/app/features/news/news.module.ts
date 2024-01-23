import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { NewsCardComponent } from './views/news-card/news-card.component';

@NgModule({
  declarations: [NewsComponent, NewsCardComponent],
  imports: [CommonModule, NewsRoutingModule, SharedModule],
})
export class NewsModule {}
