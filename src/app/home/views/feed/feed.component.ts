import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { HomeFilterOption } from 'src/app/common/types/league';
import { League, Match, Matches } from 'src/app/common/types/matches';
import { matchesActions } from 'src/app/state/actions';
import {
  getByTimeMatches,
  getFilteredMatches,
  getMatches,
  getMatchesDate,
  getMatchesStatus,
} from 'src/app/state/selectors';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.sass'],
})
export class FeedComponent {
  constructor(private store: Store) {}

  leagueMatches$ = this.store.select(getFilteredMatches);
  byTimeMatches$ = this.store.select(getByTimeMatches);
  matchesStatus$ = this.store.select(getMatchesStatus);
  date$ = this.store.select(getMatchesDate);

  filters: Set<HomeFilterOption> = new Set(['All', 'Ongoing', 'By Time']);
  selectedFilters = this.filters;
  searchQuery = '';

  onFiltersChange(filters: Set<HomeFilterOption>): void {
    this.selectedFilters = filters;
    this.store.dispatch(
      matchesActions.filterMatches(this.selectedFilters, this.searchQuery)
    );
  }

  onSearchChange(searchText: string): void {
    this.searchQuery = searchText;
    this.store.dispatch(
      matchesActions.filterMatches(this.selectedFilters, this.searchQuery)
    );
  }
}
