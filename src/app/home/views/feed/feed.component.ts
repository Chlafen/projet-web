import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { HomeFilterOption } from 'src/app/common/types/league';
import { League, Match, Matches } from 'src/app/common/types/matches';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.sass'],
})
export class FeedComponent implements OnInit, OnChanges {
  @Input('matches') leagueMatches!: Matches;
  @Input('status') leaguesStatus!: string;
  @Input() matchesDate!: string;
  @Output() dateChange = new EventEmitter<string>();

  filteredMatches!: Matches;
  byTimeMatches: Match[] = [];

  filters: Set<HomeFilterOption> = new Set(['All', 'Ongoing', 'By Time']);

  ngOnInit() {
    this.filteredMatches = this.leagueMatches;
  }
  ngOnChanges() {
    this.filteredMatches = this.leagueMatches;
    this.matchesDate = this.matchesDate;
  }

  onFiltersChange(newFilters: Set<HomeFilterOption>) {
    if (newFilters.has('All')) {
      this.filteredMatches = this.leagueMatches;
    }
    if (newFilters.has('Ongoing')) {
      const newLeagues = this.leagueMatches
        .leagues!.map((league) => {
          let matches = league.matches!.filter(
            (match) => match.status?.started && !match.status?.finished
          );
          return { ...league, matches: matches } as League;
        })
        .filter((league) => league.matches!.length > 0);
      this.filteredMatches = { ...this.leagueMatches, leagues: newLeagues };
    }
    if (newFilters.has('By Time')) {
      this.byTimeMatches =
        this.filteredMatches.leagues
          ?.map((league) => league.matches ?? [])
          .flat() ?? [];
      this.byTimeMatches.sort((a, b) => (a.timeTS ?? 0) - (b.timeTS ?? 0));
    } else {
      this.byTimeMatches = [];
    }
  }

  onDateChange(newDate: string) {
    this.dateChange.emit(newDate);
  }
}
