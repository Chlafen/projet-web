import { Component, Input } from '@angular/core';
import { AllMatch } from 'src/app/common/types/league';

@Component({
  selector: 'app-match-page-card',
  templateUrl: './match-page-card.component.html',
  styleUrls: ['./match-page-card.component.sass'],
})
export class MatchPageCardComponent {
  @Input() match!: AllMatch;
}
