import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-league-item',
  templateUrl: './league-item.component.html',
  styleUrls: ['./league-item.component.sass'],
})
export class LeagueItemComponent {
  @Input() league: any;
}
