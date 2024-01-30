import { Component, Input } from '@angular/core';
import { WorldNews } from 'src/app/common/types/world-news';

@Component({
  selector: 'app-news-overview-card',
  templateUrl: './news-overview-card.component.html',
  styleUrls: ['./news-overview-card.component.sass'],
})
export class NewsOverviewCardComponent {
  @Input() news!: WorldNews;
}
