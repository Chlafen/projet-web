import { Component, HostListener } from '@angular/core';
import { WorldNews } from 'src/app/common/types/world-news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass'],
})
export class NewsComponent {
  windowWidth: number = window.innerWidth;
  i: any;
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowWidth = window.innerWidth;
  }
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
}
