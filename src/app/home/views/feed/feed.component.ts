import { Component } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.sass'],
})
export class FeedComponent {
  leagueSections: any[] = [
    {
      name: 'Premier League',
      country: 'England',
      logo: 'https://media.api-sports.io/football/leagues/39.png',
      matches: [
        {
          time: '15:00',
          status: 'NOT_STARTED',
          homeTeam: 'Manchester United',
          awayTeam: 'Liverpool',
          homeScore: null,
          awayScore: null,
          homeLogo: 'https://media.api-sports.io/football/teams/33.png',
          awayLogo: 'https://media.api-sports.io/football/teams/40.png',
        },
        {
          time: 'FT',
          status: 'FINISHED',
          homeTeam: 'Manchester City',
          awayTeam: 'Chelsea',
          homeScore: '1',
          awayScore: '2',
          homeLogo: 'https://media.api-sports.io/football/teams/50.png',
          awayLogo: 'https://media.api-sports.io/football/teams/49.png',
        },
        {
          time: 'FT',
          status: 'FINISHED',
          homeTeam: 'Arsenal',
          awayTeam: 'Tottenham Hotspur',
          homeScore: '1',
          awayScore: '2',
          homeLogo: 'https://media.api-sports.io/football/teams/42.png',
          awayLogo: 'https://media.api-sports.io/football/teams/47.png',
        },
      ],
    },
    {
      name: 'La Liga',
      country: 'Spain',
      logo: 'https://media.api-sports.io/football/leagues/140.png',
      matches: [
        {
          time: '15:00',
          status: 'NOT_STARTED',
          homeTeam: 'Real Madrid',
          awayTeam: 'Barcelona',
          homeScore: null,
          awayScore: null,
          homeLogo: 'https://media.api-sports.io/football/teams/541.png',
          awayLogo: 'https://media.api-sports.io/football/teams/529.png',
        },
        {
          time: 'FT',
          status: 'FINISHED',
          homeTeam: 'Real Sociedad',
          awayTeam: 'Atletico Madrid',
          homeScore: '1',
          awayScore: '2',
          homeLogo: 'https://media.api-sports.io/football/teams/543.png',
          awayLogo: 'https://media.api-sports.io/football/teams/529.png',
        },
        {
          time: 'FT',
          status: 'FINISHED',
          homeTeam: 'Sevilla',
          awayTeam: 'Valencia',
          homeScore: '1',
          awayScore: '2',
          homeLogo: 'https://media.api-sports.io/football/teams/545.png',
          awayLogo: 'https://media.api-sports.io/football/teams/556.png',
        },
      ],
    },
    {
      name: 'Bundesliga',
      country: 'Germany',
      logo: 'https://media.api-sports.io/football/leagues/78.png',
      matches: [
        {
          time: '15:00',
          status: 'NOT_STARTED',
          homeTeam: 'Bayern Munich',
          awayTeam: 'Borussia Dortmund',
          homeScore: null,
          awayScore: null,
          homeLogo: 'https://media.api-sports.io/football/teams/157.png',
          awayLogo: 'https://media.api-sports.io/football/teams/165.png',
        },
        {
          time: 'FT',
          status: 'FINISHED',
          homeTeam: 'RB Leipzig',
          awayTeam: 'Bayer Leverkusen',
          homeScore: '1',
          awayScore: '2',
          homeLogo: 'https://media.api-sports.io/football/teams/160.png',
          awayLogo: 'https://media.api-sports.io/football/teams/159.png',
        },
        {
          time: 'FT',
          status: 'NOT_STARTED',
          homeTeam: 'Borussia Monchengladbach',
          awayTeam: 'VfL Wolfsburg',
          homeScore: '1',
          awayScore: '2',
          homeLogo: 'https://media.api-sports.io/football/teams/162.png',
          awayLogo: 'https://media.api-sports.io/football/teams/164.png',
        },
      ],
    },
    {
      name: 'Serie A',
      country: 'Italy',
      logo: 'https://media.api-sports.io/football/leagues/135.png',
      matches: [
        {
          time: '15:00',
          status: 'FINISHED',
          homeTeam: 'Juventus',
          awayTeam: 'AC Milan',
          homeScore: null,
          awayScore: null,
          homeLogo: 'https://media.api-sports.io/football/teams/109.png',
          awayLogo: 'https://media.api-sports.io/football/teams/112.png',
        },
        {
          time: 'FT',
          status: 'FINISHED',
          homeTeam: 'Inter Milan',
          awayTeam: 'Napoli',
          homeScore: '1',
          awayScore: '2',
          homeLogo: 'https://media.api-sports.io/football/teams/110.png',
          awayLogo: 'https://media.api-sports.io/football/teams/111.png',
        },
      ],
    },
  ];
}