import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { newsActions } from '../state/actions';
import { getWorldNews, getWorldNewsStatus } from 'src/app/state/selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent {
  constructor(private store: Store) {}

  newsList$ = this.store.select(getWorldNews);
  newsStatus$ = this.store.select(getWorldNewsStatus);

  ngOnInit(): void {
    this.store.dispatch(newsActions.loadNews());
  }
}
