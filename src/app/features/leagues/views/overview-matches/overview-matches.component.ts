import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { LeagueOverviewMatch } from 'src/app/common/types/league';
import { Match } from 'src/app/common/types/matches';

@Component({
  selector: 'app-overview-matches',
  templateUrl: './overview-matches.component.html',
  styleUrls: ['./overview-matches.component.sass'],
})
export class OverviewMatchesComponent {
  @Input() matches!: LeagueOverviewMatch[];
  @Input() gotoIdx!: number;

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

  identify(_: number, item: LeagueOverviewMatch) {
    return item.id;
  }
}
