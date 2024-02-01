import { ActivatedRoute } from '@angular/router';
import { LeagueOverviewMatch } from './../../../../common/types/league';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  Long,
  LongKey,
  Matches,
  Short,
  ShortKey,
} from 'src/app/common/types/league';
import { WorldNews } from 'src/app/common/types/world-news';
import { newsActions } from 'src/app/state/actions';
import { Subscription, map, tap } from 'rxjs';
import { getWorldNews, getWorldNewsPage, getWorldNewsStatus } from 'src/app/state/selectors';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.sass'],
})
export class OverviewComponent {
  windowWidth: number = window.innerWidth;

  overviewMatches: LeagueOverviewMatch[] = [
    {
      away: {
        id: '123',
        name: 'Manchester United',
        score: 0,
      },
      home: {
        id: '123',
        name: 'Manchester United',
        score: 0,
      },
      id: '123',
      pageUrl: 'https://www.fotmob.com/matches/123',
      displayTournament: true,
      notStarted: true,
      opponent: {
        id: '123',
        name: 'Manchester United',
        score: 0,
      },
      tournament: {},
      status: {
        cancelled: false,
        finished: false,
        reason: {
          short: Short.Ft,
          shortKey: ShortKey.FulltimeShort,
          long: Long.FullTime,
          longKey: LongKey.Finished,
        },
        scoreStr: '0 - 0',
        started: false,
        utcTime: new Date('2021-10-17T15:00:00.000Z'),
      },
    },
    {
      away: {
        id: '123',
        name: 'Manchester United',
        score: 0,
      },
      home: {
        id: '123',
        name: 'Manchester United',
        score: 0,
      },
      id: '123',
      pageUrl: 'https://www.fotmob.com/matches/123',
      displayTournament: true,
      notStarted: true,
      opponent: {
        id: '123',
        name: 'Manchester United',
        score: 0,
      },
      tournament: {},
      status: {
        cancelled: false,
        finished: false,
        reason: {
          short: Short.Ft,
          shortKey: ShortKey.FulltimeShort,
          long: Long.FullTime,
          longKey: LongKey.Finished,
        },
        scoreStr: '0 - 0',
        started: false,
        utcTime: new Date('2021-10-17T15:00:00.000Z'),
      },
    },
    {
      away: {
        id: '123',
        name: 'Manchester United',
        score: 0,
      },
      home: {
        id: '123',
        name: 'Manchester United',
        score: 0,
      },
      id: '123',
      pageUrl: 'https://www.fotmob.com/matches/123',
      displayTournament: true,
      notStarted: true,
      opponent: {
        id: '123',
        name: 'Manchester United',
        score: 0,
      },
      tournament: {},
      status: {
        cancelled: false,
        finished: false,
        reason: {
          short: Short.Ft,
          shortKey: ShortKey.FulltimeShort,
          long: Long.FullTime,
          longKey: LongKey.Finished,
        },
        scoreStr: '0 - 0',
        started: false,
        utcTime: new Date('2021-10-17T15:00:00.000Z'),
      },
    },
    {
      away: {
        id: '123',
        name: 'Manchester United',
        score: 0,
      },
      home: {
        id: '123',
        name: 'Manchester United',
        score: 0,
      },
      id: '123',
      pageUrl: 'https://www.fotmob.com/matches/123',
      displayTournament: true,
      notStarted: true,
      opponent: {
        id: '123',
        name: 'Manchester United',
        score: 0,
      },
      tournament: {},
      status: {
        cancelled: false,
        finished: false,
        reason: {
          short: Short.Ft,
          shortKey: ShortKey.FulltimeShort,
          long: Long.FullTime,
          longKey: LongKey.Finished,
        },
        scoreStr: '0 - 0',
        started: false,
        utcTime: new Date('2021-10-17T15:00:00.000Z'),
      },
    },
    {
      away: {
        id: '123',
        name: 'Manchester United',
        score: 0,
      },
      home: {
        id: '123',
        name: 'Manchester United',
        score: 0,
      },
      id: '123',
      pageUrl: 'https://www.fotmob.com/matches/123',
      displayTournament: true,
      notStarted: true,
      opponent: {
        id: '123',
        name: 'Manchester United',
        score: 0,
      },
      tournament: {},
      status: {
        cancelled: false,
        finished: false,
        reason: {
          short: Short.Ft,
          shortKey: ShortKey.FulltimeShort,
          long: Long.FullTime,
          longKey: LongKey.Finished,
        },
        scoreStr: '0 - 0',
        started: false,
        utcTime: new Date('2021-10-17T15:00:00.000Z'),
      },
    },
    {
      away: {
        id: '123',
        name: 'Manchester United',
        score: 0,
      },
      home: {
        id: '123',
        name: 'Manchester United',
        score: 0,
      },
      id: '123',
      pageUrl: 'https://www.fotmob.com/matches/123',
      displayTournament: true,
      notStarted: true,
      opponent: {
        id: '123',
        name: 'Manchester United',
        score: 0,
      },
      tournament: {},
      status: {
        cancelled: false,
        finished: false,
        reason: {
          short: Short.Ft,
          shortKey: ShortKey.FulltimeShort,
          long: Long.FullTime,
          longKey: LongKey.Finished,
        },
        scoreStr: '0 - 0',
        started: false,
        utcTime: new Date('2021-10-17T15:00:00.000Z'),
      },
    },
    {
      away: {
        id: '123',
        name: 'Manchester United',
        score: 0,
      },
      home: {
        id: '123',
        name: 'Manchester United',
        score: 0,
      },
      id: '123',
      pageUrl: 'https://www.fotmob.com/matches/123',
      displayTournament: true,
      notStarted: true,
      opponent: {
        id: '123',
        name: 'Manchester United',
        score: 0,
      },
      tournament: {},
      status: {
        cancelled: false,
        finished: false,
        reason: {
          short: Short.Ft,
          shortKey: ShortKey.FulltimeShort,
          long: Long.FullTime,
          longKey: LongKey.Finished,
        },
        scoreStr: '0 - 0',
        started: false,
        utcTime: new Date('2021-10-17T15:00:00.000Z'),
      },
    },
    {
      away: {
        id: '123',
        name: 'Manchester United',
        score: 0,
      },
      home: {
        id: '123',
        name: 'Manchester United',
        score: 0,
      },
      id: '123',
      pageUrl: 'https://www.fotmob.com/matches/123',
      displayTournament: true,
      notStarted: true,
      opponent: {
        id: '123',
        name: 'Manchester United',
        score: 0,
      },
      tournament: {},
      status: {
        cancelled: false,
        finished: false,
        reason: {
          short: Short.Ft,
          shortKey: ShortKey.FulltimeShort,
          long: Long.FullTime,
          longKey: LongKey.Finished,
        },
        scoreStr: '0 - 0',
        started: false,
        utcTime: new Date('2021-10-17T15:00:00.000Z'),
      },
    },
    {
      away: {
        id: '123',
        name: 'Manchester United',
        score: 0,
      },
      home: {
        id: '123',
        name: 'Manchester United',
        score: 0,
      },
      id: '123',
      pageUrl: 'https://www.fotmob.com/matches/123',
      displayTournament: true,
      notStarted: true,
      opponent: {
        id: '123',
        name: 'Manchester United',
        score: 0,
      },
      tournament: {},
      status: {
        cancelled: false,
        finished: false,
        reason: {
          short: Short.Ft,
          shortKey: ShortKey.FulltimeShort,
          long: Long.FullTime,
          longKey: LongKey.Finished,
        },
        scoreStr: '0 - 0',
        started: false,
        utcTime: new Date('2021-10-17T15:00:00.000Z'),
      },
    },
    {
      away: {
        id: '123',
        name: 'Manchester United',
        score: 0,
      },
      home: {
        id: '123',
        name: 'Manchester United',
        score: 0,
      },
      id: '123',
      pageUrl: 'https://www.fotmob.com/matches/123',
      displayTournament: true,
      notStarted: true,
      opponent: {
        id: '123',
        name: 'Manchester United',
        score: 0,
      },
      tournament: {},
      status: {
        cancelled: false,
        finished: false,
        reason: {
          short: Short.Ft,
          shortKey: ShortKey.FulltimeShort,
          long: Long.FullTime,
          longKey: LongKey.Finished,
        },
        scoreStr: '0 - 0',
        started: false,
        utcTime: new Date('2021-10-17T15:00:00.000Z'),
      },
    },
  ];

  matches: Matches[] = [
    {
      firstUnplayedMatch: {
        firstRoundWithUnplayedMatch: 1,
        firstUnplayedMatchIndex: 1,
        firstUnplayedMatchId: '123',
      },
      allMatches: [
        {
          away: {
            id: '123',
            name: 'Manchester United',
            shortName: 'MUN',
          },
          home: {
            id: '123',
            name: 'Manchester United',
            shortName: 'MUN',
          },
          id: '123',
          pageUrl: 'https://www.fotmob.com/matches/123',
          round: 1,
          roundName: 1,
          status: {
            cancelled: false,
            finished: false,
            reason: {
              short: Short.Ft,
              shortKey: ShortKey.FulltimeShort,
              long: Long.FullTime,
              longKey: LongKey.Finished,
            },
            scoreStr: '0 - 0',
            started: false,
            utcTime: new Date('2021-10-17T15:00:00.000Z'),
          },
        },
        {
          away: {
            id: '123',
            name: 'Manchester United',
            shortName: 'MUN',
          },
          home: {
            id: '123',
            name: 'Manchester United',
            shortName: 'MUN',
          },
          id: '123',
          pageUrl: 'https://www.fotmob.com/matches/123',
          round: 1,
          roundName: 1,
          status: {
            cancelled: false,
            finished: false,
            reason: {
              short: Short.Ft,
              shortKey: ShortKey.FulltimeShort,
              long: Long.FullTime,
              longKey: LongKey.Finished,
            },
            scoreStr: '0 - 0',
            started: false,
            utcTime: new Date('2021-10-17T15:00:00.000Z'),
          },
        },
        {
          away: {
            id: '123',
            name: 'Manchester United',
            shortName: 'MUN',
          },
          home: {
            id: '123',
            name: 'Manchester United',
            shortName: 'MUN',
          },
          id: '123',
          pageUrl: 'https://www.fotmob.com/matches/123',
          round: 1,
          roundName: 1,
          status: {
            cancelled: false,
            finished: false,
            reason: {
              short: Short.Ft,
              shortKey: ShortKey.FulltimeShort,
              long: Long.FullTime,
              longKey: LongKey.Finished,
            },
            scoreStr: '0 - 0',
            started: false,
            utcTime: new Date('2021-10-17T15:00:00.000Z'),
          },
        },
        {
          away: {
            id: '123',
            name: 'Manchester United',
            shortName: 'MUN',
          },
          home: {
            id: '123',
            name: 'Manchester United',
            shortName: 'MUN',
          },
          id: '123',
          pageUrl: 'https://www.fotmob.com/matches/123',
          round: 1,
          roundName: 1,
          status: {
            cancelled: false,
            finished: false,
            reason: {
              short: Short.Ft,
              shortKey: ShortKey.FulltimeShort,
              long: Long.FullTime,
              longKey: LongKey.Finished,
            },
            scoreStr: '0 - 0',
            started: false,
            utcTime: new Date('2021-10-17T15:00:00.000Z'),
          },
        },
        {
          away: {
            id: '123',
            name: 'Manchester United',
            shortName: 'MUN',
          },
          home: {
            id: '123',
            name: 'Manchester United',
            shortName: 'MUN',
          },
          id: '123',
          pageUrl: 'https://www.fotmob.com/matches/123',
          round: 1,
          roundName: 1,
          status: {
            cancelled: false,
            finished: false,
            reason: {
              short: Short.Ft,
              shortKey: ShortKey.FulltimeShort,
              long: Long.FullTime,
              longKey: LongKey.Finished,
            },
            scoreStr: '0 - 0',
            started: false,
            utcTime: new Date('2021-10-17T15:00:00.000Z'),
          },
        },
      ],
    },
  ];

  newsList$ = this.store.select(getWorldNews);
  newsStatus$ = this.store.select(getWorldNewsStatus);
  currentPage$ = this.store.select(getWorldNewsPage);
  currentLeagueId$ = this.route.parent!.params.pipe(
    map((params) => parseInt(params['id'], 10)),
    tap((leagueId) => {
      this.store.dispatch(newsActions.loadNewsPerLeague(leagueId));
    })
  )

  constructor(private store: Store, private route: ActivatedRoute) { }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowWidth = window.innerWidth;
  }
}
