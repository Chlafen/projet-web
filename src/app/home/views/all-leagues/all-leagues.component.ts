import { Component } from '@angular/core';

@Component({
  selector: 'app-all-leagues',
  templateUrl: './all-leagues.component.html',
  styleUrls: ['./all-leagues.component.sass']
})
export class AllLeaguesComponent {
  countries: any[] = [
    {
      name: 'International',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/int.png',
      leagues: [
        {
          name: 'Premier League',
          logo: 'https://media.api-sports.io/football/leagues/39.png',
        },
        {
          name: 'La Liga',
          logo: 'https://media.api-sports.io/football/leagues/140.png',
        },
      ],
    },
    {
      name: 'Albania',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/alb.png',
      leagues: [
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
      ],
    },
    {
      name: 'Algeria',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/alg.png',
      leagues: [
        {
          name: 'Eredivisie',
          logo: 'https://media.api-sports.io/football/leagues/88.png',
        },
      ],
    },
    {
      name: 'Argentina',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/arg.png',
      leagues: [],
    },
    {
      name: 'Armenia',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/arm.png',
      leagues: [],
    },
    {
      name: 'Australia',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/aus.png',
      leagues: [],
    },
  ];
}
