import { Component, HostListener, Input } from '@angular/core';
import { WorldNews } from 'src/app/common/types/world-news';

@Component({
  selector: 'app-news-section-display',
  templateUrl: './news-section-display.component.html',
  styleUrls: ['./news-section-display.component.sass'],
})
export class NewsSectionDisplayComponent {
  @Input() newsList: WorldNews[] = []
  @Input() currentPage: number = 1;
  @Input() isLoading: boolean = true;

  windowWidth: number = window.innerWidth;
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowWidth = window.innerWidth;
  }
}
