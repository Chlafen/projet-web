import { Component, Input } from '@angular/core';
import { League } from 'src/app/common/types/all-leagues';

@Component({
  selector: 'app-league-item',
  templateUrl: './league-item.component.html',
  styleUrls: ['./league-item.component.sass'],
})
export class LeagueItemComponent {
  @Input() league!: League;
}
