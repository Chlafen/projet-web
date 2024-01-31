import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HomeFilterOption } from 'src/app/common/types/league';
import { formatDateToApi } from 'src/app/common/utils';

@Component({
  selector: 'app-home-filter',
  templateUrl: './home-filter.component.html',
  styleUrls: ['./home-filter.component.sass'],
})
export class HomeFilterComponent {
  @Output() onFiltersChange = new EventEmitter<Set<HomeFilterOption>>();
  @Output() onDateChange = new EventEmitter<string>();
  @Input() filters!: Set<HomeFilterOption>;
  @Input() date!: string;

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

  onNextDay() {
    if (parseInt(this.date) > 20210710) {
      this.date = formatDateToApi(parseInt(this.date) + 1 + '');
    }
    console.log('home filter', this.date);
    this.onDateChange.emit(this.date);
  }

  onPrevDay() {
    if (parseInt(this.date) < 20250101) {
      this.date = formatDateToApi(parseInt(this.date) - 1 + '');
    }
    console.log('home filter', this.date);
    this.onDateChange.emit(this.date);
  }
}
