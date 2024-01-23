import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-news-card',
  templateUrl: './home-news-card.component.html',
  styleUrls: ['./home-news-card.component.sass'],
})
export class HomeNewsCardComponent implements OnInit {
  @Input() myNew: any;
  @Input() vertical: boolean = false;

  style: any = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    gap: '.5rem',
  };
  imgStyle: any = {
    width: '5rem',
    height: '5rem',
    'aspect-ratio': '1/1',
    objectFit: 'cover',
    borderRadius: '1rem',
  };
  ngOnInit(): void {
    if (this.vertical) {
      this.style.flexDirection = 'column';
      this.imgStyle.width = '100%';
      this.imgStyle.height = 'auto';
      this.imgStyle['aspect-ratio'] = '16/9';
    }
  }
}
