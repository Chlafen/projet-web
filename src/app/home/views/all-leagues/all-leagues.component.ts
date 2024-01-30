import { Component, Input } from '@angular/core';
import { Country } from 'src/app/common/types/all-leagues';

@Component({
  selector: 'app-all-leagues',
  templateUrl: './all-leagues.component.html',
  styleUrls: ['./all-leagues.component.sass']
})
export class AllLeaguesComponent {
  @Input() countries!: Country[];

  countries2: any[] = [
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
  ];
}
