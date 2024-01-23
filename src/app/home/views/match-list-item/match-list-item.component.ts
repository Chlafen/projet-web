import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-list-item',
  templateUrl: './match-list-item.component.html',
  styleUrls: ['./match-list-item.component.sass'],
})
export class MatchListItemComponent implements OnInit {
  @Input() match: any;
  scoreOrTime: string = '';

  ngOnInit(): void {
    console.log(this.match);

    if (this.match?.status === 'FINISHED') {
      this.scoreOrTime = `${this.match.homeScore} - ${this.match.awayScore}`;
    } else {
      this.scoreOrTime = this.match.time;
    }
  }
}
