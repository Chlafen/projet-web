import { Component, HostListener, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { newsActions } from 'src/app/state/actions';
import { getWorldNews, getWorldNewsError, getWorldNewsPage, getWorldNewsStatus } from 'src/app/state/selectors';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass'],
})
export class NewsComponent implements OnInit {
  constructor(private store: Store) { }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowWidth = window.innerWidth;
  }

  windowWidth: number = window.innerWidth;

  errorMsg$ = this.store.select(getWorldNewsError);
  currentPage$ = this.store.select(getWorldNewsPage);
  newsList$ = this.store.select(getWorldNews);
  newsStatus$ = this.store.select(getWorldNewsStatus);

  ngOnInit(): void {
    this.store.dispatch(newsActions.loadNews());
  }
}
