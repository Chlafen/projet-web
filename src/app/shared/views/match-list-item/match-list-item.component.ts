import { Component, Input, OnInit } from '@angular/core';
import { Match } from 'src/app/common/types/matches';

@Component({
  selector: 'app-match-list-item',
  templateUrl: './match-list-item.component.html',
  styleUrls: ['./match-list-item.component.sass'],
})
export class MatchListItemComponent implements OnInit {
  @Input() match!: Match;
  scoreOrTime: string = '';

  ngOnInit(): void {
    if (this.match?.status?.finished || this.match?.status?.liveTime?.short) {
      this.scoreOrTime = `${this.match.home?.score} - ${this.match.away?.score}`;
    } else {
      this.scoreOrTime = this.match.time?.split(' ')[1] ?? '';
    }
  }

  getMatchStatus(): string {
    if (this.match?.status?.finished) {
      return 'FT';
    } else if (this.match?.status?.liveTime?.short) {
      return this.match?.status?.liveTime?.short.slice(0, -1) ?? '';
    } else {
      return this.match?.status?.reason?.short ?? '';
    }
  }
}
