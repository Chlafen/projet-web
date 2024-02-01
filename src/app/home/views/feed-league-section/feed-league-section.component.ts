import { Component, Input } from '@angular/core';
import { League } from 'src/app/common/types/matches';

@Component({
  selector: 'app-feed-league-section',
  templateUrl: './feed-league-section.component.html',
  styleUrls: ['./feed-league-section.component.sass'],
})
export class FeedLeagueSectionComponent {
  @Input() league!: League;
}
