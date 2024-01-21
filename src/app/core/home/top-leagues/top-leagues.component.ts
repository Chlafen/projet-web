import { Component } from '@angular/core';

@Component({
  selector: 'app-top-leagues',
  templateUrl: './top-leagues.component.html',
  styleUrls: ['./top-leagues.component.sass'],
})
export class TopLeaguesComponent {
  leagues: any[] = [
    {
      name: 'Premier League',
      logo: 'https://media.api-sports.io/football/leagues/39.png',
    },
    {
      name: 'La Liga',
      logo: 'https://media.api-sports.io/football/leagues/140.png',
    },
    {
      name: 'Bundesliga',
      logo: 'https://media.api-sports.io/football/leagues/78.png',
    },
    {
      name: 'Serie A',
      logo: 'https://media.api-sports.io/football/leagues/135.png',
    },
    {
      name: 'Ligue 1',
      logo: 'https://media.api-sports.io/football/leagues/61.png',
    },
    {
      name: 'Primeira Liga',
      logo: 'https://media.api-sports.io/football/leagues/94.png',
    },
    {
      name: 'Eredivisie',
      logo: 'https://media.api-sports.io/football/leagues/88.png',
    },
  ];
}
