import { Component, Input } from '@angular/core';
import { WorldNews } from 'src/app/common/types/world-news';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.sass'],
})
export class NewsCardComponent {
  @Input() news!: WorldNews;
}
