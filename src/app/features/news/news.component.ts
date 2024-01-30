import { Component, HostListener, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { newsActions } from 'src/app/state/actions';
import { getWorldNews, getWorldNewsStatus } from 'src/app/state/selectors';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass'],
})
export class NewsComponent implements OnInit {
  constructor(private store: Store) {}

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowWidth = window.innerWidth;
  }

  windowWidth: number = window.innerWidth;

  newsList$ = this.store.select(getWorldNews);
  newsStatus$ = this.store.select(getWorldNewsStatus);

  ngOnInit(): void {
    this.store.dispatch(newsActions.loadNews());
  }
}
