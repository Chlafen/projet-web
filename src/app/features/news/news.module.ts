import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';

@NgModule({
  declarations: [NewsComponent],
  imports: [NewsRoutingModule, SharedModule],
})
export class NewsModule {}
