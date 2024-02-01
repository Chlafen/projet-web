import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { NewsListGridDisplayComponent } from './views/news-list-grid-display/news-list-grid-display.component';

@NgModule({
  declarations: [NewsComponent, NewsListGridDisplayComponent],
  imports: [NewsRoutingModule, SharedModule],
})
export class NewsModule { }
