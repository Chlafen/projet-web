import { Component, Input } from '@angular/core';
import { LeagueOverviewMatch } from 'src/app/common/types/league';

@Component({
  selector: 'app-overview-match-card',
  templateUrl: './overview-match-card.component.html',
  styleUrls: ['./overview-match-card.component.sass'],
})
export class OverviewMatchCardComponent {
  @Input() match!: LeagueOverviewMatch;
}
