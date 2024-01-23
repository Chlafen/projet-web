import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-top-transfers',
  templateUrl: './top-transfers.component.html',
  styleUrls: ['./top-transfers.component.sass'],
})
export class TopTransfersComponent {
  @Input() transfers: any[] = [
    {
      name: 'Lionel Messi',
      img: 'https://resources.premierleague.com/premierleague/photos/players/40x40/p200785.png',
      from: 'FC Barcelona',
      to: 'Paris Saint-Germain',
      fromImg:
        'https://resources.premierleague.com/premierleague/badges/50/t9.png',
      toImg:
        'https://resources.premierleague.com/premierleague/badges/50/t3.png',
      price: '€8.00M',
    },
    {
      name: 'Cristiano Ronaldo',
      img: 'https://resources.premierleague.com/premierleague/photos/players/40x40/p37265.png',
      from: 'Juventus',
      to: 'Manchester United',
      fromImg:
        'https://resources.premierleague.com/premierleague/badges/50/t37.png',
      toImg:
        'https://resources.premierleague.com/premierleague/badges/50/t1.png',
      price: '€15.00M',
    },
    {
      name: 'Lionel Messi',
      img: 'https://resources.premierleague.com/premierleague/photos/players/40x40/p200785.png',
      from: 'FC Barcelona',
      to: 'Paris Saint-Germain',
      fromImg:
        'https://resources.premierleague.com/premierleague/badges/50/t9.png',
      toImg:
        'https://resources.premierleague.com/premierleague/badges/50/t3.png',
      price: '€8.00M',
    },
    {
      name: 'Cristiano Ronaldo',
      img: 'https://resources.premierleague.com/premierleague/photos/players/40x40/p37265.png',
      from: 'Juventus',
      to: 'Manchester United',
      fromImg:
        'https://resources.premierleague.com/premierleague/badges/50/t37.png',
      toImg:
        'https://resources.premierleague.com/premierleague/badges/50/t1.png',
      price: '€15.00M',
    },
  ];
}
