import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription, debounceTime, tap } from 'rxjs';
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.sass']
})
export class SearchbarComponent implements  OnInit,OnDestroy {
  
  @Output () onSearch = new EventEmitter<string>();
  inputSubscription!: Subscription;
  searchInput = new FormControl();
  ngOnInit(): void {
    this.inputSubscription=this.searchInput.valueChanges.pipe(
      debounceTime(555),
      tap((value) => {
        this.onSearch.emit(value)
      })
    ).subscribe()

    
  }
  ngOnDestroy(): void {
    this.inputSubscription.unsubscribe()
  }
}
