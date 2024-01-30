import { Component, Input } from '@angular/core';
import { WorldNews } from 'src/app/common/types/world-news';

@Component({
  selector: 'app-news-card-large',
  templateUrl: './news-card-large.component.html',
  styleUrls: ['./news-card-large.component.sass'],
})
export class NewsCardLargeComponent {
  @Input() news!: WorldNews;
}
