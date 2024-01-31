import { Component, Input, OnInit } from '@angular/core';
import { Matches } from 'src/app/common/types/matches';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.sass'],
})
export class FeedComponent implements OnInit {
  @Input('matches') leagueMatches!: Matches;
  @Input('status') leaguesStatus!: string;
  ngOnInit() {
    console.log(this.leaguesStatus);
  }
}
