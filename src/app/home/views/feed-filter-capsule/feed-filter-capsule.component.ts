import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HomeFilterOption } from 'src/app/common/types/league';

@Component({
  selector: 'app-feed-filter-capsule',
  templateUrl: './feed-filter-capsule.component.html',
  styleUrls: ['./feed-filter-capsule.component.sass'],
})
export class FeedFilterCapsuleComponent {
  @Input() content!: string;
  @Input() selected!: boolean;
  @Output() onToggled = new EventEmitter<HomeFilterOption>();

  toggle() {
    this.onToggled.emit(this.content as HomeFilterOption);
  }
}
