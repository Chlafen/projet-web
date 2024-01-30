import { Component, Input } from '@angular/core';
import { LeagueOverviewMatch } from 'src/app/common/types/league';

@Component({
  selector: 'app-overview-matches',
  templateUrl: './overview-matches.component.html',
  styleUrls: ['./overview-matches.component.sass'],
})
export class OverviewMatchesComponent {
  @Input() matches!: LeagueOverviewMatch[];

  windowWidth: number = window.innerWidth;
  slideConfig = {
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 765,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  slickInit(e: any) {
    console.log('slick initialized');
    // jump to today's matches
    const today = new Date();
    // get index of today's matches
    // const todayIndex = this.matches.findIndex((match) => {
    //   const matchDate = new Date(match.status?.utcTime);
    //   return matchDate.getDate() === today.getDate() && matchDate.getMonth() === today.getMonth();
    // });
  }
}
