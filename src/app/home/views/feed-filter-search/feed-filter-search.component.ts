import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription, debounceTime, tap } from 'rxjs';

@Component({
  selector: 'app-feed-filter-search',
  templateUrl: './feed-filter-search.component.html',
  styleUrls: ['./feed-filter-search.component.sass']
})
export class FeedFilterSearchComponent implements OnInit, OnDestroy {
  @Output() searchText = new EventEmitter<string>();
  searchField = new FormControl();
  inputSubscription!: Subscription;

  ngOnInit(): void {
    this.inputSubscription = this.searchField.valueChanges.pipe(
      debounceTime(500),
      tap((value) => {
        this.searchText.emit(value)
      })
    ).subscribe()
  }

  ngOnDestroy(): void {
    this.inputSubscription.unsubscribe()
  }
}
