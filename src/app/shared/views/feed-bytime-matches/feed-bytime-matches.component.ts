import { Component, Input } from '@angular/core';
import { Match } from 'src/app/common/types/matches';

@Component({
  selector: 'app-feed-bytime-matches',
  templateUrl: './feed-bytime-matches.component.html',
  styleUrls: ['./feed-bytime-matches.component.sass'],
})
export class FeedBytimeMatchesComponent {
  @Input() matches!: Match[];
}
