import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { NewsCardComponent } from './views/news-card/news-card.component';
import { NewsCardLargeComponent } from './views/news-card-large/news-card-large.component';

@NgModule({
  declarations: [NewsComponent, NewsCardComponent, NewsCardLargeComponent],
  imports: [NewsRoutingModule, SharedModule],
})
export class NewsModule {}
