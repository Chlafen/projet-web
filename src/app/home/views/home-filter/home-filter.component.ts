import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { HomeFilterOption } from 'src/app/common/types/league';
import { formatDateFromApi } from 'src/app/common/utils';
import { matchesActions } from 'src/app/state/actions';

@Component({
  selector: 'app-home-filter',
  templateUrl: './home-filter.component.html',
  styleUrls: ['./home-filter.component.sass'],
})
export class HomeFilterComponent {
  constructor(private store: Store) {}
  @Output() onFiltersChange = new EventEmitter<Set<HomeFilterOption>>();
  @Output() onSearchChange = new EventEmitter<string>();
  @Input() filters!: Set<HomeFilterOption>;
  @Input() date: string = 'Today';

  selectedFilters: Set<HomeFilterOption> = new Set(['All']);

  onFilterToggle(filter: any) {
    if (filter === 'All') {
      if (this.selectedFilters.has('All')) {
        this.selectedFilters.delete('All');
      } else {
        this.selectedFilters.add('All');
        if (this.selectedFilters.has('Ongoing')) {
          this.selectedFilters.delete('Ongoing');
        }
      }
    } else if (filter === 'Ongoing') {
      if (this.selectedFilters.has('Ongoing')) {
        this.selectedFilters.delete('Ongoing');
        if (!this.selectedFilters.has('All')) {
          this.selectedFilters.add('All');
        }
      } else {
        this.selectedFilters.add('Ongoing');
        if (this.selectedFilters.has('All')) {
          this.selectedFilters.delete('All');
        }
      }
    } else if (filter === 'By Time') {
      if (this.selectedFilters.has('By Time')) {
        this.selectedFilters.delete('By Time');
      } else {
        this.selectedFilters.add('By Time');
      }
    }
    if (this.selectedFilters.size === 0) {
      this.selectedFilters.add('All');
    }

    this.onFiltersChange.emit(this.selectedFilters);
  }

  onSearchText(text: string) {
    this.onSearchChange.emit(text);
  }

  onNextDay() {
    this.selectedFilters.clear();
    this.selectedFilters.add('All');
    this.store.dispatch(matchesActions.loadMatchesNextDay(this.date));
  }

  onPrevDay() {
    this.selectedFilters.clear();
    this.selectedFilters.add('All');
    this.store.dispatch(matchesActions.loadMatchesPrevDay(this.date));
  }

  formatDate(date: string | null) {
    if (!date) return 'ez';
    return formatDateFromApi(date);
  }
}
