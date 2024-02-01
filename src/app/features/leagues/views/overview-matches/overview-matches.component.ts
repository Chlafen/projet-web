import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { LeagueOverviewMatch } from 'src/app/common/types/league';

@Component({
  selector: 'app-overview-matches',
  templateUrl: './overview-matches.component.html',
  styleUrls: ['./overview-matches.component.sass'],
})
export class OverviewMatchesComponent implements OnChanges {
  @Input() matches!: LeagueOverviewMatch[];
  @Input() gotoIdx!: number;
  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;

  windowWidth: number = window.innerWidth;
  slideConfig = {
    initialSlide: this.gotoIdx,
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

  ngOnChanges() {
    console.log(this.slickModal)
    console.log(this.gotoIdx)
    if (this.slickModal) this.slickModal.slickGoTo(5)

  }

  afterChange() {
    console.log('afterChange');
  }
}
