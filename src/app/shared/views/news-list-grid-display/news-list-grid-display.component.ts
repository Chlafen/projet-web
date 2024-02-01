import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { WorldNews } from 'src/app/common/types/world-news';
import { newsActions } from 'src/app/state/actions';
import { getWorldNews, getWorldNewsStatus } from 'src/app/state/selectors';

@Component({
  selector: 'app-news-list-grid-display',
  templateUrl: './news-list-grid-display.component.html',
  styleUrls: ['./news-list-grid-display.component.sass'],
})
export class NewsListGridDisplayComponent {
  constructor(private store: Store) { }

  @Input() newsList: WorldNews[] = []
  @Input() currentPage: number = 1;
  @Input() isLoading: boolean = true;

  windowWidth: number = window.innerWidth;

  seeMore() {
    this.store.dispatch(newsActions.loadNewsPage(this.currentPage));
  }
}
