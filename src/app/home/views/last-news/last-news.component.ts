import { Component, Input } from '@angular/core';
import { WorldNews } from 'src/app/common/types/world-news';

@Component({
  selector: 'app-last-news',
  templateUrl: './last-news.component.html',
  styleUrls: ['./last-news.component.sass'],
})
export class LastNewsComponent {
  @Input('lastNews') news!: WorldNews[];
}
