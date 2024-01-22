import { Component, Input } from '@angular/core';
import { DisplayLeaguesAnimation } from './display-leagues.animation';

@Component({
  selector: 'app-league-per-country-list',
  templateUrl: './league-per-country-list.component.html',
  styleUrls: ['./league-per-country-list.component.sass'],
  animations: [
    DisplayLeaguesAnimation,
  ]
})
export class LeaguePerCountryListComponent {
  @Input() country: any;
  isOpen: boolean = false;

  onItemClick() {
    this.isOpen = !this.isOpen;
  }
}
