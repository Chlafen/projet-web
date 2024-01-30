import { Component, Input } from '@angular/core';
import { Long, Matches } from 'src/app/common/types/league';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.sass'],
})
export class MatchesComponent {
  matches: Matches = {
    allMatches: [
      {
        away: {
          id: '8675',
          name: 'Team numm 1',
          shortName: 'T1',
        },
        home: {
          id: '8675',
          name: 'Team 2',
          shortName: 'T2',
        },
        id: '1',
        pageUrl: 'https://www.google.com',
        round: 1,
        roundName: 1,
        status: {
          utcTime: new Date(),
          finished: true,
          cancelled: false,
          reason: {
            long: Long.FullTime,
          },
          scoreStr: '1 - 0',
          started: true,
        },
      },
      {
        away: {
          id: '8675',
          name: 'Team 1',
          shortName: 'T1',
        },
        home: {
          id: '8675',
          name: 'Team 2',
          shortName: 'T2',
        },
        id: '1',
        pageUrl: 'https://www.google.com',
        round: 1,
        roundName: 1,
        status: {
          utcTime: new Date(),
          finished: false,
          cancelled: false,
          started: false,
        },
      },
      {
        away: {
          id: '8675',
          name: 'Team 1',
          shortName: 'T1',
        },
        home: {
          id: '8675',
          name: 'Team 2',
          shortName: 'T2',
        },
        id: '1',
        pageUrl: 'https://www.google.com',
        round: 1,
        roundName: 1,
        status: {
          utcTime: new Date(),
          finished: true,
          cancelled: false,
          reason: {
            long: Long.FullTime,
          },
          scoreStr: '1 - 0',
          started: true,
        },
      },
      {
        away: {
          id: '8675',
          name: 'Team 1',
          shortName: 'T1',
        },
        home: {
          id: '8675',
          name: 'Team 2',
          shortName: 'T2',
        },
        id: '1',
        pageUrl: 'https://www.google.com',
        round: 1,
        roundName: 1,
        status: {
          utcTime: new Date(),
          finished: false,
          cancelled: false,
          started: false,
        },
      },
      {
        away: {
          id: '8675',
          name: 'Team 1',
          shortName: 'T1',
        },
        home: {
          id: '8675',
          name: 'Team 2',
          shortName: 'T2',
        },
        id: '1',
        pageUrl: 'https://www.google.com',
        round: 1,
        roundName: 1,
        status: {
          utcTime: new Date(),
          finished: true,
          cancelled: false,
          reason: {
            long: Long.FullTime,
          },
          scoreStr: '1 - 0',
          started: true,
        },
      },
      {
        away: {
          id: '8675',
          name: 'Team 1',
          shortName: 'T1',
        },
        home: {
          id: '8675',
          name: 'Team 2',
          shortName: 'T2',
        },
        id: '1',
        pageUrl: 'https://www.google.com',
        round: 1,
        roundName: 1,
        status: {
          utcTime: new Date(),
          finished: false,
          cancelled: false,
          started: false,
        },
      },
    ],
    firstUnplayedMatch: undefined,
    hasOngoingMatch: false,
  };
}
