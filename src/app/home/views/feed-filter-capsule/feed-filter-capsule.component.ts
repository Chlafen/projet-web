import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feed-filter-capsule',
  templateUrl: './feed-filter-capsule.component.html',
  styleUrls: ['./feed-filter-capsule.component.sass'],
})
export class FeedFilterCapsuleComponent {
  @Input() content!: string;
}
