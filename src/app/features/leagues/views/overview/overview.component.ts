import { LeagueOverviewMatch } from './../../../../common/types/league';
import { Component, HostListener } from '@angular/core';
import {
  Long,
  LongKey,
  Matches,
  Short,
  ShortKey,
} from 'src/app/common/types/league';
import { WorldNews } from 'src/app/common/types/world-news';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.sass'],
})
export class OverviewComponent {
  windowWidth: number = window.innerWidth;
  newsList: WorldNews[] = [
    {
      imageUrl:
        'https://images.performgroup.com/di/library/omnisport/de/a2/8e24be8923594ab397d1fed78b820c21.jpg?t=948385629&w=640&h=360',
      title: 'Manchester United',
      gmtTime: new Date('2021-10-17T15:00:00.000Z'),
      sourceStr: 'FotMob',
      lead: 'Manchester United 0-0 Everton',
      sourceIconUrl:
        'https://images.fotmob.com/image_resources/news/the%20analyst.png',
      page: {
        url: 'https://www.fotmob.com/news/world/1/2/3/4/5/6/7/8/9/10/11/12/13/14/15/16/17',
      },
    },
    {
      imageUrl:
        'https://images.performgroup.com/di/library/omnisport/de/a2/8e24be8923594ab397d1fed78b820c21.jpg?t=948385629&w=640&h=360',
      title: 'Manchester United',
      gmtTime: new Date('2021-10-17T15:00:00.000Z'),
      sourceStr: 'FotMob',
      lead: 'Manchester United 0-0 Everton',
      sourceIconUrl:
        'https://images.fotmob.com/image_resources/news/the%20analyst.png',
      page: {
        url: 'https://www.fotmob.com/news/world/1/2/3/4/5/6/7/8/9/10/11/12/13/14/15/16/17',
      },
    },
    {
      imageUrl:
        'https://images.performgroup.com/di/library/omnisport/de/a2/8e24be8923594ab397d1fed78b820c21.jpg?t=948385629&w=640&h=360',
      title: 'Manchester United',
      gmtTime: new Date('2021-10-17T15:00:00.000Z'),
      sourceStr: 'FotMob',
      lead: 'Manchester United 0-0 Everton',
      sourceIconUrl:
        'https://images.fotmob.com/image_resources/news/the%20analyst.png',
      page: {
        url: 'https://www.fotmob.com/news/world/1/2/3/4/5/6/7/8/9/10/11/12/13/14/15/16/17',
      },
    },
    {
      imageUrl:
        'https://images.performgroup.com/di/library/omnisport/de/a2/8e24be8923594ab397d1fed78b820c21.jpg?t=948385629&w=640&h=360',
      title: 'Manchester United',
      gmtTime: new Date('2021-10-17T15:00:00.000Z'),
      sourceStr: 'FotMob',
      lead: 'Manchester United 0-0 Everton',
      sourceIconUrl:
        'https://images.fotmob.com/image_resources/news/the%20analyst.png',
      page: {
        url: 'https://www.fotmob.com/news/world/1/2/3/4/5/6/7/8/9/10/11/12/13/14/15/16/17',
      },
    },
    {
      imageUrl:
        'https://images.performgroup.com/di/library/omnisport/de/a2/8e24be8923594ab397d1fed78b820c21.jpg?t=948385629&w=640&h=360',
      title: 'Manchester United',
      gmtTime: new Date('2021-10-17T15:00:00.000Z'),
      sourceStr: 'FotMob',
      lead: 'Manchester United 0-0 Everton',
      sourceIconUrl:
        'https://images.fotmob.com/image_resources/news/the%20analyst.png',
      page: {
        url: 'https://www.fotmob.com/news/world/1/2/3/4/5/6/7/8/9/10/11/12/13/14/15/16/17',
      },
    },
    {
      imageUrl:
        'https://images.performgroup.com/di/library/omnisport/de/a2/8e24be8923594ab397d1fed78b820c21.jpg?t=948385629&w=640&h=360',
      title: 'Manchester United',
      gmtTime: new Date('2021-10-17T15:00:00.000Z'),
      sourceStr: 'FotMob',
      lead: 'Manchester United 0-0 Everton',
      sourceIconUrl:
        'https://images.fotmob.com/image_resources/news/the%20analyst.png',
      page: {
        url: 'https://www.fotmob.com/news/world/1/2/3/4/5/6/7/8/9/10/11/12/13/14/15/16/17',
      },
    },
    {
      imageUrl:
        'https://images.performgroup.com/di/library/omnisport/de/a2/8e24be8923594ab397d1fed78b820c21.jpg?t=948385629&w=640&h=360',
      title: 'Manchester United',
      gmtTime: new Date('2021-10-17T15:00:00.000Z'),
      sourceStr: 'FotMob',
      lead: 'Manchester United 0-0 Everton',
      sourceIconUrl:
        'https://images.fotmob.com/image_resources/news/the%20analyst.png',
      page: {
        url: 'https://www.fotmob.com/news/world/1/2/3/4/5/6/7/8/9/10/11/12/13/14/15/16/17',
      },
    },
    {
      imageUrl:
        'https://images.performgroup.com/di/library/omnisport/de/a2/8e24be8923594ab397d1fed78b820c21.jpg?t=948385629&w=640&h=360',
      title: 'Manchester United',
      gmtTime: new Date('2021-10-17T15:00:00.000Z'),
      sourceStr: 'FotMob',
      lead: 'Manchester United 0-0 Everton',
      sourceIconUrl:
        'https://images.fotmob.com/image_resources/news/the%20analyst.png',
      page: {
        url: 'https://www.fotmob.com/news/world/1/2/3/4/5/6/7/8/9/10/11/12/13/14/15/16/17',
      },
    },
    {
      imageUrl:
        'https://images.performgroup.com/di/library/omnisport/de/a2/8e24be8923594ab397d1fed78b820c21.jpg?t=948385629&w=640&h=360',
      title: 'Manchester United',
      gmtTime: new Date('2021-10-17T15:00:00.000Z'),
      sourceStr: 'FotMob',
      lead: 'Manchester United 0-0 Everton',
      sourceIconUrl:
        'https://images.fotmob.com/image_resources/news/the%20analyst.png',
      page: {
        url: 'https://www.fotmob.com/news/world/1/2/3/4/5/6/7/8/9/10/11/12/13/14/15/16/17',
      },
    },
    {
      imageUrl:
        'https://images.performgroup.com/di/library/omnisport/de/a2/8e24be8923594ab397d1fed78b820c21.jpg?t=948385629&w=640&h=360',
      title: 'Manchester United',
      gmtTime: new Date('2021-10-17T15:00:00.000Z'),
      sourceStr: 'FotMob',
      lead: 'Manchester United 0-0 Everton',
      sourceIconUrl:
        'https://images.fotmob.com/image_resources/news/the%20analyst.png',
      page: {
        url: 'https://www.fotmob.com/news/world/1/2/3/4/5/6/7/8/9/10/11/12/13/14/15/16/17',
      },
    },
    {
      imageUrl:
        'https://images.performgroup.com/di/library/omnisport/de/a2/8e24be8923594ab397d1fed78b820c21.jpg?t=948385629&w=640&h=360',
      title: 'Manchester United',
      gmtTime: new Date('2021-10-17T15:00:00.000Z'),
      sourceStr: 'FotMob',
      lead: 'Manchester United 0-0 Everton',
      sourceIconUrl:
        'https://images.fotmob.com/image_resources/news/the%20analyst.png',
      page: {
        url: 'https://www.fotmob.com/news/world/1/2/3/4/5/6/7/8/9/10/11/12/13/14/15/16/17',
      },
    },
    {
      imageUrl:
        'https://images.performgroup.com/di/library/omnisport/de/a2/8e24be8923594ab397d1fed78b820c21.jpg?t=948385629&w=640&h=360',
      title: 'Manchester United',
      gmtTime: new Date('2021-10-17T15:00:00.000Z'),
      sourceStr: 'FotMob',
      lead: 'Manchester United 0-0 Everton',
      sourceIconUrl:
        'https://images.fotmob.com/image_resources/news/the%20analyst.png',
      page: {
        url: 'https://www.fotmob.com/news/world/1/2/3/4/5/6/7/8/9/10/11/12/13/14/15/16/17',
      },
    },
  ];

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

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowWidth = window.innerWidth;
  }
}
