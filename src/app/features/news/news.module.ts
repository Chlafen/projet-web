import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { NewsSectionDisplayComponent } from './views/news-section-display/news-section-display.component';

@NgModule({
  declarations: [NewsComponent, NewsSectionDisplayComponent],
  imports: [NewsRoutingModule, SharedModule],
})
export class NewsModule { }
